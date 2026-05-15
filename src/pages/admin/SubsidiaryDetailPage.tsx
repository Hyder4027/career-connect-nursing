import { Link, useParams } from "react-router-dom";
import { mockSubsidiaries } from "@/data/mockOrganization";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building2, Mail, MapPin, Phone, CreditCard, FileText } from "lucide-react";

const Field = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div>
    <p className="text-xs text-muted-foreground">{label}</p>
    <p className="text-sm font-medium mt-1">{value || "—"}</p>
  </div>
);

const SubsidiaryDetailPage = () => {
  const { id } = useParams();
  const sub = mockSubsidiaries.find((s) => s.id === id);

  if (!sub) {
    return (
      <Card>
        <CardContent className="py-10 text-center">
          <p className="text-muted-foreground">Subsidiary not found.</p>
          <Link to="/admin/subsidiaries">
            <Button variant="link">Back to list</Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/admin/subsidiaries">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
      </Link>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#06a9e0] to-[#26d9ca] flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">{sub.name}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {sub.legalForm} · {sub.industry}
                </p>
              </div>
            </div>
            {sub.independentInvoicing ? (
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Independent invoicing</Badge>
            ) : (
              <Badge variant="outline">Central invoicing</Badge>
            )}
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-base flex items-center gap-2"><MapPin className="w-4 h-4" />Address</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Field label="Street" value={sub.address.street} />
            <Field label="ZIP" value={sub.address.zip} />
            <Field label="City" value={sub.address.city} />
            <Field label="Country" value={sub.address.country} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base flex items-center gap-2"><FileText className="w-4 h-4" />Legal & tax</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Field label="Legal form" value={sub.legalForm} />
            <Field label="HRB" value={sub.registrationNumber} />
            <Field label="VAT-ID" value={sub.vatId} />
            <Field label="Tax number" value={sub.taxNumber} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base flex items-center gap-2"><CreditCard className="w-4 h-4" />Bank</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Field label="IBAN" value={sub.bank.iban} />
            <Field label="BIC" value={sub.bank.bic} />
            <Field label="Bank name" value={sub.bank.bankName} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Contact person</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="font-medium">{sub.contact.name}</p>
            <p className="text-muted-foreground">{sub.contact.role}</p>
            <p className="flex items-center gap-2 text-muted-foreground"><Mail className="w-3 h-3" />{sub.contact.email}</p>
            {sub.contact.phone && <p className="flex items-center gap-2 text-muted-foreground"><Phone className="w-3 h-3" />{sub.contact.phone}</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubsidiaryDetailPage;