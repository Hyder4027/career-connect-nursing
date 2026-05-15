import { Candidate, HoldingCompany, SubsidiaryCompany } from "@/types/organization";

export const mockHolding: HoldingCompany = {
  id: "holding-1",
  name: "MeidiCare Holding GmbH",
  legalForm: "GmbH",
  address: {
    street: "Hauptstraße 1",
    zip: "10115",
    city: "Berlin",
    country: "Germany",
  },
  registrationNumber: "HRB 123456 B",
  taxGroupId: "DE123456789",
  managingDirectors: [
    { name: "Dr. Anna Müller", role: "CEO", email: "anna.mueller@meidicare.de", phone: "+49 30 1234567" },
    { name: "Markus Weber", role: "CFO", email: "markus.weber@meidicare.de", phone: "+49 30 1234568" },
  ],
  policies: {
    hr: "Group-wide HR policy v3.2",
    finance: "IFRS reporting standard",
    compliance: "ISO 27001 + GDPR",
  },
};

const industries = ["Hospital", "Care Home", "Outpatient Clinic", "Rehabilitation", "Diagnostics"];
const cities = ["Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig"];
const legalForms = ["GmbH", "GmbH & Co. KG", "AG", "UG"] as const;

export const mockSubsidiaries: SubsidiaryCompany[] = Array.from({ length: 24 }, (_, i) => {
  const idx = i + 1;
  const city = cities[i % cities.length];
  return {
    id: `sub-${idx}`,
    holdingId: "holding-1",
    name: `MeidiCare ${city} ${idx}`,
    legalForm: legalForms[i % legalForms.length],
    address: {
      street: `Klinikweg ${idx}`,
      zip: `${10000 + idx * 37}`.slice(0, 5),
      city,
      country: "Germany",
    },
    registrationNumber: `HRB ${100000 + idx}`,
    vatId: `DE${100000000 + idx}`,
    taxNumber: `${idx}/${1000 + idx}/${10000 + idx}`,
    bank: {
      iban: `DE${(89 + idx).toString().padStart(20, "0")}`.slice(0, 22),
      bic: "DEUTDEFFXXX",
      bankName: "Deutsche Bank",
    },
    independentInvoicing: i % 3 !== 0,
    contact: {
      name: `Manager ${idx}`,
      role: "General Manager",
      email: `manager${idx}@meidicare.de`,
      phone: `+49 30 555${(1000 + idx).toString()}`,
    },
    industry: industries[i % industries.length],
  };
});

const skillsPool = ["ICU", "ER", "Pediatrics", "Cardiology", "Geriatrics", "Surgery", "Anesthesia", "Oncology"];
const statuses: Candidate["status"][] = ["Received", "In Review", "Interview", "Placed", "Active", "Inactive", "Blocked"];

export const mockCandidates: Candidate[] = Array.from({ length: 18 }, (_, i) => ({
  id: `cand-${i + 1}`,
  firstName: ["Lukas", "Sophia", "Maria", "Jonas", "Lena", "Elena", "Felix", "Hannah"][i % 8],
  lastName: ["Schmidt", "Becker", "Fischer", "Wagner", "Hoffmann", "Schulz", "Weber", "Koch"][i % 8],
  email: `candidate${i + 1}@example.com`,
  phone: `+49 170 ${(1000000 + i).toString()}`,
  location: cities[i % cities.length],
  mobility: i % 2 === 0 ? "Nationwide" : "Regional",
  experienceYears: (i % 12) + 1,
  qualifications: ["Registered Nurse", i % 2 ? "Bachelor of Nursing" : "Specialist Care"],
  skills: [skillsPool[i % skillsPool.length], skillsPool[(i + 2) % skillsPool.length]],
  availabilityFrom: `2026-${((i % 12) + 1).toString().padStart(2, "0")}-01`,
  status: statuses[i % statuses.length],
  expectedSalary: 38000 + i * 1500,
  desiredPositions: ["Senior Nurse", "Ward Lead"],
  languages: [
    { language: "German", level: (["B1", "B2", "C1", "C2"] as const)[i % 4] },
    { language: "English", level: (["B2", "C1"] as const)[i % 2] },
  ],
  matchScore: 60 + ((i * 7) % 40),
}));
