import {
  AdvocateReqBody,
  CaseResBody,
  ProcedureReqBody,
  ProcedureReqListBody,
  SearchReqData,
  UserReqBody,
} from "@/helpers/api-types";
import { ApiResponse } from "@/helpers/common-types";
import { decryptData } from "@/helpers/cryption/encryption";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

export interface SearchResponse {
  case: CaseResBody | undefined;
  procedures: ProcedureReqBody[] | undefined;
  //   petitioner_advocate_data: AdvocateReqBody & UserReqBody;
  //   respondent_advocate_data: AdvocateReqBody & UserReqBody;
  //   petitioner: UserReqBody;
  //   respondent: UserReqBody;
}

export async function GET(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse<ApiResponse>> {
  return NextResponse.json({
    success: true,
    message: "Server is up and running",
    data: {},
  });
}

export async function POST(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse<SearchResponse | ApiResponse>> {
  const caseEndpoint = "http://localhost:8666/api/case/show";
  const reqData: SearchReqData = await req.json();

  if (!reqData)
    return NextResponse.json({
      success: false,
      message: "Something is wrong with the data",
      data: {},
    });

  const caseResponse = await fetch(caseEndpoint, {
    method: "POST",
    body: JSON.stringify(reqData),
    headers: {
      "Content-type": "application/json",
    },
  });

  const decryptedCase = decryptData((await caseResponse.json()).data);

  const caseData: CaseResBody = decryptedCase
    ? JSON.parse(decryptedCase)
    : undefined;

  const procedureEndpoint = "http://localhost:8666/api/procedure/list";
  const procedureResponse = await fetch(procedureEndpoint, {
    method: "POST",
    body: JSON.stringify(reqData),
    headers: {
      "Content-type": "application/json",
    },
  });

  const decryptedProcedures = decryptData(
    (await procedureResponse.json()).data
  );

  const procedureData: ProcedureReqBody[] = decryptedProcedures
    ? JSON.parse(decryptedProcedures)
    : undefined;

  // const userEndpoint = "http://localhost:8666/api/user/show";
  // const userResponse1 = await fetch(userEndpoint, {
  //   method: "POST",
  //   body: JSON.stringify({ aadhar_id: caseData.petitioner_aadhar_id }),
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // });

  // const decryptedUser1 = decryptData((await userResponse1.json()).data);
  // const user1: UserReqBody = decryptedUser1
  //   ? JSON.parse(decryptedUser1)
  //   : undefined;

  // const userResponse2 = await fetch(userEndpoint, {
  //   method: "POST",
  //   body: JSON.stringify({ aadhar_id: caseData.respondent_aadhar_id }),
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // });

  // const decryptedUser2 = decryptData((await userResponse2.json()).data);
  // console.log(decryptedUser2);
  // const user2: UserReqBody = decryptedUser2
  //   ? JSON.parse(decryptedUser2)
  //   : undefined;

  // let latestProcedure = procedureData[0];

  // procedureData.forEach((procedure) => {
  //   if (procedure.id > latestProcedure.id) latestProcedure = procedure;
  // });

  // const advocateEndpoint = "http://localhost:8666/api/advocate/show";
  // const advocateResponse1 = await fetch(advocateEndpoint, {
  //   method: "POST",
  //   body: JSON.stringify({ aadhar_id: latestProcedure.pet_advocate_aadhar_id }),
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // });
  // const decryptedAdvocate1 = decryptData((await advocateResponse1.json()).data);
  // const advocate1: AdvocateReqBody = decryptedAdvocate1
  //   ? JSON.parse(decryptedAdvocate1)
  //   : undefined;

  // const userResponse3 = await fetch(userEndpoint, {
  //   method: "POST",
  //   body: JSON.stringify({ aadhar_id: latestProcedure.pet_advocate_aadhar_id }),
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // });

  // const decryptedUser3 = decryptData((await userResponse3.json()).data);
  // const user3: UserReqBody = decryptedUser3
  //   ? JSON.parse(decryptedUser3)
  //   : undefined;

  // const petitioner_advocate = {
  //   ...advocate1,
  //   ...user3,
  // };

  // const advocateResponse2 = await fetch(advocateEndpoint, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     aadhar_id: latestProcedure.res_advocate_aadhar_id,
  //   }),
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // });
  // const decryptedAdvocate2 = decryptData((await advocateResponse2.json()).data);
  // const advocate2: AdvocateReqBody = decryptedAdvocate2
  //   ? JSON.parse(decryptedAdvocate2)
  //   : undefined;

  // const userResponse4 = await fetch(userEndpoint, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     aadhar_id: latestProcedure.pet_advocate_aadhar_id,
  //   }),
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // });

  // const decryptedUser4 = decryptData((await userResponse4.json()).data);
  // const user4: UserReqBody = decryptedUser4
  //   ? JSON.parse(decryptedUser4)
  //   : undefined;

  // const respondent_advocate = {
  //   ...user4,
  //   ...advocate2,
  // };

  const resData: SearchResponse = {
    case: caseData,
    procedures: procedureData,
    // petitioner: user1,
    // respondent: user2,
    // petitioner_advocate_data: petitioner_advocate,
    // respondent_advocate_data: respondent_advocate,
  };

  return NextResponse.json(resData);
}
