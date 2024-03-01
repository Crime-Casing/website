"use client";

import { SearchResponse } from "@/app/api/search/route";
import CaseDetails from "@/components/search/case-details";
import ProcedureSection from "@/components/search/procedure-section";
import UserCard from "@/components/search/user-card";
import {
  CaseResBody,
  ProcedureReqBody,
  SearchReqData,
} from "@/helpers/api-types";
import { ApiResponse } from "@/helpers/common-types";
import { decryptData } from "@/helpers/cryption/encryption";
import { AppProps } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ({ params }: AppProps): JSX.Element {
  const slug: string[] = params.slug;
  const query = slug[0];

  const [isMounted, setIsMounted] = useState(false);
  const [caseData, setCaseData] = useState<CaseResBody | undefined>(undefined);
  const [proceduresData, setProceduresData] = useState<
    ProcedureReqBody[] | undefined
  >(undefined);
  const [latestProcedure, setLatestProcedure] = useState<
    ProcedureReqBody | undefined
  >();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const getSearchResult = async () => {
    const endpoint = "http://localhost:3000/api/search";

    const reqData: SearchReqData = {
      case_no: query,
    };

    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(reqData),
    });

    const resData: SearchResponse = await response.json();
    console.log(resData);

    const {
      case: caseData,
      procedures,
      //   petitioner,
      //   petitioner_advocate_data,
      //   respondent,
      //   respondent_advocate_data,
    } = resData;

    if (!response.ok) {
      //TODO - Do something about the error
      return;
    }

    let updatedLatest = procedures ? procedures[0] : undefined;

    procedures?.forEach((procedure) => {
      if (updatedLatest?.id! < procedure.id) updatedLatest = procedure;
    });

    if (!caseData || !procedures) {
      router.push("/");
    }

    setCaseData(caseData);
    setProceduresData(procedures);
    setLatestProcedure(updatedLatest);
  };

  useEffect(() => {
    setIsMounted(true);
    setIsLoading(true);

    if (!isMounted) return;

    getSearchResult().then(() => {
      setIsLoading(false);
    });
  }, [isMounted]);
  return (
    <>
      {!isLoading ? (
        <>
          <h1 className="CaseNumber">{caseData?.case_no}</h1>
          <div className="containerProfile">
            {caseData && proceduresData && (
              <>
                <UserCard
                  name={caseData.petitioner_name}
                  aadhar_id={caseData.petitioner_aadhar_id}
                />
                <UserCard
                  name={caseData.respondent_name}
                  aadhar_id={caseData.respondent_aadhar_id}
                />
              </>
            )}
          </div>

          <CaseDetails
            caseData={caseData}
            courtData={latestProcedure?.court}
            procedureData={latestProcedure}
          />
          <ProcedureSection procedures={proceduresData!} />
        </>
      ) : (
        <>
          <div className="lds-hourglass"></div>
        </>
      )}
    </>
  );
}
