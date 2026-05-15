import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockHolding, mockSubsidiaries } from "@/data/mockOrganization";
import { Building2, Mail, Phone, MapPin, FileText } from "lucide-react";

const HoldingPage = () => {
  const h = mockHolding;
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">{h.name}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {h.legalForm} · {h.registrationNumber}
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#06a9e0] to-[#26d9ca] flex items-center justify-center">
              <Building2 className="w-7 h-7 text-white" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>
                {h.address.street}, {h.address.zip} {h.address.city}, {h.address.country}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <FileText className="w-4 h-4" />
              <span>Tax group: {h.taxGroupId ?? "—"}</span>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-medium">Group policies</p>
            <ul className="space-y-1 text-muted-foreground">
              {h.policies?.hr && <li>HR — {h.policies.hr}</li>}
              {h.policies?.finance && <li>Finance — {h.policies.finance}</li>}
              {h.policies?.compliance && <li>Compliance — {h.policies.compliance}</li>}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Managing directors</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {h.managingDirectors.map((d) => (
            <div key={d.email} className="p-4 rounded-xl border bg-muted/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06a9e0] to-[#26d9ca] flex items-center justify-center text-white font-semibold">
                  {d.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="font-medium">{d.name}</p>
                  <p className="text-xs text-muted-foreground">{d.role}</p>
                </div>
              </div>
              <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                <p className="flex items-center gap-2"><Mail className="w-3 h-3" />{d.email}</p>
                {d.phone && <p className="flex items-center gap-2"><Phone className="w-3 h-3" />{d.phone}</p>}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Subsidiaries</CardTitle>
          <Badge variant="secondary">{mockSubsidiaries.length} entities</Badge>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {mockSubsidiaries.slice(0, 9).map((s) => (
              <div key={s.id} className="p-3 rounded-lg border bg-white">
                <p className="font-medium text-sm truncate">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.legalForm} · {s.address.city}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HoldingPage;