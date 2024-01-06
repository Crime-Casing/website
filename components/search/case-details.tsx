import Image from "next/image";

import court from "@/public/images/court.png";
import caseType from "@/public/images/criminal-report.png";
import lawyer from "@/public/images/lawyer.png";
import statusImg from "@/public/images/status.png";
import {
  CaseResBody,
  ProcedureReqBody,
  ProcedureReqCourt,
} from "@/helpers/api-types";

export interface CaseDetailsProps {
  caseData: CaseResBody | undefined;
  courtData: ProcedureReqCourt | undefined;
  procedureData: ProcedureReqBody | undefined;
}

export default function (props: CaseDetailsProps): JSX.Element {
  const { caseData, courtData, procedureData } = props;
  if (!caseData) {
    return <></>;
  }

  const { case_no } = caseData;

  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <div className="Card">
            <Image className="card-icons" src={court} alt="" />
            <h2>Court Name</h2>
            <h2>{courtData?.name}</h2>
          </div>
          <div className="Card">
            <Image className="card-icons" src={caseType} alt="" />
            <h2>Case Type</h2>
            <h2>
              {case_no.slice(4, 6).toUpperCase() === "OG"
                ? "Original"
                : case_no.slice(4, 6).toUpperCase() === "CR"
                ? "Criminal"
                : "Civil"}
            </h2>
          </div>
        </div>
        <div className="inner-container">
          <div className="Card">
            <Image className="card-icons" src={lawyer} alt="" />
            <div className="lawyerDetails">
              <h3>Petition Lawyer:</h3>
              <h3>Shreeram N S</h3>
            </div>
            <div className="lawyerDetails">
              <h3>Prosecutor:</h3>
              <h3>Hitesh</h3>
            </div>
          </div>
          <div className="Card">
            <Image className="card-icons" src={statusImg} alt="" />
            <h2>Case Status</h2>
            <h2>{procedureData?.status}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
