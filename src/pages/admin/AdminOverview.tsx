import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  Network,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { mockCandidates, mockSubsidiaries } from "@/data/mockOrganization";
import { Link } from "react-router-dom";

const AdminOverview = () => {
  const stats = [
    { label: "Holding entities", value: 1, delta: "+0", icon: Network },
    {
      label: "Subsidiaries",
      value: mockSubsidiaries.length,
      delta: "+3 this month",
      icon: Building2,
    },
    {
      label: "Active candidates",
      value: mockCandidates.length,
      delta: "+12 this week",
      icon: Users,
    },
    {
      label: "Placements",
      value: mockCandidates.filter((c) => c.status === "Active").length,
      delta: "+2 this week",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#06a9e0] via-[#1cc2cf] to-[#26d9ca] p-6 md:p-10 text-white shadow-xl shadow-cyan-500/20">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-12 -bottom-20 w-64 h-64 rounded-full bg-teal-300/30 blur-3xl" />

        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Group control center
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
              Good morning, Anna.
            </h2>
            <p className="mt-2 text-white/85 text-sm md:text-base">
              {mockSubsidiaries.length} operating companies and {mockCandidates.length}{" "}
              candidates in motion across the MeidiCare group today.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/admin/subsidiaries">
              <Button variant="secondary" className="bg-white text-[#06a9e0] hover:bg-white/90">
                Manage entities
              </Button>
            </Link>
            <Link to="/admin/candidates">
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
                Review pipeline
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, delta, icon: Icon }) => (
          <Card
            key={label}
            className="group relative overflow-hidden border-white/60 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-200/40 to-teal-200/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="relative p-5">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#06a9e0] to-[#26d9ca] text-white flex items-center justify-center shadow-md shadow-cyan-500/20">
                  <Icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="mt-4 text-3xl font-bold tracking-tight tabular-nums">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="mt-2 text-[11px] font-medium text-emerald-600">{delta}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Two-column */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <Card className="lg:col-span-3 border-white/60 bg-white/70 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Candidate pipeline</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">Distribution across hiring stages</p>
            </div>
            <Badge variant="secondary" className="text-xs">Live</Badge>
          </CardHeader>
          <CardContent className="space-y-4 pb-6">
            {(["Received", "In Review", "Interview", "Placed", "Active", "Inactive", "Blocked"] as const).map(
              (status) => {
                const count = mockCandidates.filter((c) => c.status === status).length;
                const pct = Math.round((count / mockCandidates.length) * 100);
                return (
                  <div key={status}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-slate-700">{status}</span>
                      <span className="text-muted-foreground tabular-nums">
                        {count} <span className="text-slate-400">· {pct}%</span>
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#06a9e0] to-[#26d9ca] transition-all duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 border-white/60 bg-white/70 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Recent subsidiaries</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">Latest onboarded entities</p>
            </div>
            <Link to="/admin/subsidiaries" className="text-xs font-medium text-[#06a9e0] hover:underline">
              View all
            </Link>
          </CardHeader>
          <CardContent className="space-y-2">
            {mockSubsidiaries.slice(0, 5).map((s) => (
              <Link
                key={s.id}
                to={`/admin/subsidiaries/${s.id}`}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center text-[#06a9e0] flex-shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{s.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {s.legalForm} · {s.address.city}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </Link>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default AdminOverview;