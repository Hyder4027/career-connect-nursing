export type LegalForm = "GmbH" | "GmbH & Co. KG" | "GbR" | "AG" | "UG" | "OHG" | "KG" | "e.K.";

export interface Address {
  street: string;
  zip: string;
  city: string;
  country: string;
}

export interface Contact {
  name: string;
  role: string;
  email: string;
  phone?: string;
}

export interface BankDetails {
  iban: string;
  bic: string;
  bankName?: string;
}

export interface HoldingCompany {
  id: string;
  name: string;
  legalForm: LegalForm;
  address: Address;
  registrationNumber: string; // Handelsregistereintrag
  taxGroupId?: string;
  managingDirectors: Contact[];
  policies?: {
    hr?: string;
    finance?: string;
    compliance?: string;
  };
}

export interface Location {
  id: string;
  name: string;
  address: Address;
  manager: Contact;
  capacity: number;
  departments: string[];
}

export interface SubsidiaryCompany {
  id: string;
  holdingId: string;
  name: string;
  legalForm: LegalForm;
  address: Address;
  registrationNumber: string;
  vatId: string;
  taxNumber?: string;
  bank: BankDetails;
  independentInvoicing: boolean;
  contact: Contact;
  industry: string;
  locations?: Location[];
}

// ---- HR / ATS ----

export type CandidateStatus =
  | "Received"
  | "In Review"
  | "Interview"
  | "Placed"
  | "Active"
  | "Inactive"
  | "Blocked";

export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface CandidateDocument {
  id: string;
  name: string;
  type: "CV" | "Certificate" | "Reference" | "Other";
  url: string;
  uploadedAt: string;
}

export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  location: string;
  mobility: string;
  experienceYears: number;
  qualifications: string[];
  skills: string[];
  availabilityFrom: string;
  status: CandidateStatus;
  expectedSalary?: number;
  desiredPositions?: string[];
  exclusions?: string[];
  languages?: { language: string; level: CefrLevel }[];
  documents?: CandidateDocument[];
  matchScore?: number;
}
