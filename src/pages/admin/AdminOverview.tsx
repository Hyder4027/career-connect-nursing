import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Network, TrendingUp } from "lucide-react";
import { mockCandidates, mockSubsidiaries } from "@/data/mockOrganization";

const AdminOverview = () => {
  const stats = [
    { label: "Holding companies", value: 1, icon: Network, color: "from-[#06a9e0] to-[#26d9ca]" },
    { label: "Subsidiaries", value: mockSubsidiaries.length, icon: Building2, color: "from-[#06a9e0] to-[#26d9ca]" },
    { label: "Candidates", value: mockCandidates.length, icon: Users, color: "from-[#06a9e0] to-[#26d9ca]" },
    {
      label: "Active placements",
      value: mockCandidates.filter((c) => c.status === "Active").length,
      icon: TrendingUp,
      color: "from-[#06a9e0] to-[#26d9ca]",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className="overflow-hidden">
            <CardContent className="p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent subsidiaries</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockSubsidiaries.slice(0, 5).map((s) => (
              <div key={s.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div>
                  <p className="font-medium text-sm">{s.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {s.legalForm} · {s.address.city}
                  </p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{s.industry}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Candidate pipeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {(["Received", "In Review", "Interview", "Placed", "Active"] as const).map((status) => {
              const count = mockCandidates.filter((c) => c.status === status).length;
              const pct = Math.round((count / mockCandidates.length) * 100);
              return (
                <div key={status}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{status}</span>
                    <span className="text-muted-foreground">{count}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#06a9e0] to-[#26d9ca]"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverview;