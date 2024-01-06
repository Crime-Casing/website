import { ProcedureReqBody } from "@/helpers/api-types";

export default function ({
  motive,
  status,
}: {
  motive: string;
  status: string;
}): JSX.Element {
  return (
    <div className="procedure">
      <div className="heading-box">
        <div className="number-status">1</div>
        <div className={`procedure-status ${status.toLowerCase()}`}>
          <div className="status-dot"></div>
          <p className="status">{status}</p>
        </div>
      </div>

      <h2 className="procedure-title">NOTICE</h2>
      <center>
        <div className="notice-type">Notice type: {motive}</div>
      </center>
      <div className="date">Date of Issue: 06/01/2024</div>
    </div>
  );
}
