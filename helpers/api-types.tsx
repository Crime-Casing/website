export interface CaseResBody {
  case_no: string;
  petitioner_name: string;
  petitioner_aadhar_id: number;
  respondent_name: string;
  respondent_aadhar_id: number;
  fir_no: number | null;
  date_of_filling: number;
}

export interface ProcedureReqBody {
  id: number;
  case_no: string;
  court: ProcedureReqCourt;
  motive: Motives;
  scheduled_date: number;
  pet_advocate_aadhar_id: number;
  res_advocate_aadhar_id: number;
  status: ProcedureStatus;
}

export type SearchReqData = CaseReqShow | ProcedureReqListBody;

export interface CaseReqShow {
  case_no: string;
}

export interface ProcedureReqListBody {
  case_no: string | undefined;
  petitioner_aadhar_id: number | undefined;
  respondent_aadhar_id: number | undefined;
}

export type ProcedureStatus = "SCHEDULED" | "COMPLETED" | "CANCELED";

export interface AddressReqBody {
  postcode: number;
  district: string;
  line_1: string;
  line_2: string;
  state: string;
}

export type Motives =
  | "SUMMONS"
  | "HEARING"
  | "PRODUCE"
  | "SETTLEMENT"
  | "ARGUEMENTS"
  | "TRIALS";

export interface ProcedureReqCourt {
  address: AddressReqBody;
  name: string;
  type: CourtTypes;
}

export interface ProcedureReqListBody {
  case_no: string | undefined;
  petitioner_aadhar_id: number | undefined;
  respondent_aadhar_id: number | undefined;
}

export type AdvocateStatus = "PENDING" | "APPROVED" | "DENIED";
export type AdvocateWorkStatus = "ACTIVE" | "RETIRED" | "ON BREAK";
export type CourtTypes = "SESSION" | "HIGH" | "SUPREME";

export interface AdvocateReqBody {
  aadhar_id: number;
  type: CourtTypes;
  reg_no: string;
  status: AdvocateStatus;
  work_status: AdvocateWorkStatus;
}

export interface UserReqBody {
  name: string;
  phone: number | null;
  email: string | null;
  address: AddressReqBody | null;
  aadhar_id: number;
  isAdmin: boolean;
  isAdvocate: boolean;
}
