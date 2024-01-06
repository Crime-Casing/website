import { ProcedureReqBody } from "@/helpers/api-types";
import ProcedureCard from "./procedure-card";
import { useEffect } from "react";

export default function ({
  procedures,
}: {
  procedures: ProcedureReqBody[];
}): JSX.Element {
  const procedureCards: JSX.Element[] = [];

  console.log(procedures);

  if (procedures) {
    procedures.forEach((procedure) => {
      const { motive, scheduled_date, id, status } = procedure;
      procedureCards.push(
        <ProcedureCard motive={motive} status={status}></ProcedureCard>
      );
    });
  }

  useEffect(() => {
    console.log(procedureCards);
  }, []);

  return <div className="section__container">{procedureCards}</div>;
}
