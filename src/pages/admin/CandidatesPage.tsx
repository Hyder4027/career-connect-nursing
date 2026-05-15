import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, MapPin, Briefcase } from "lucide-react";
import { mockCandidates } from "@/data/mockOrganization";
import { CandidateStatus } from "@/types/organization";

const statusColumns: CandidateStatus[] = ["Received", "In Review", "Interview", "Placed", "Active", "Inactive", "Blocked"];

const statusColor: Record<CandidateStatus, string> = {
  Received: "bg-slate-100 text-slate-800",
  "In Review": "bg-yellow-100 text-yellow-800",
  Interview: "bg-blue-100 text-blue-800",
  Placed: "bg-purple-100 text-purple-800",
  Active: "bg-green-100 text-green-800",
  Inactive: "bg-gray-100 text-gray-700",
  Blocked: "bg-red-100 text-red-800",
};

const CandidatesPage = () => {
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      mockCandidates.filter((c) => {
        const full = `${c.firstName} ${c.lastName} ${c.email} ${c.skills.join(" ")}`.toLowerCase();
        return full.includes(q.toLowerCase());
      }),
    [q]
  );

  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Candidates</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{filtered.length} candidates</p>
          </div>
        </div>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, skill..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="pl-10"
          />
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="list">
          <TabsList>
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="board">Pipeline</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="mt-4">
            <div className="rounded-lg border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Skills</TableHead>
                    <TableHead>Languages</TableHead>
                    <TableHead>Match</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((c) => (
                    <TableRow key={c.id}>
                      <TableCell>
                        <div className="font-medium">{c.firstName} {c.lastName}</div>
                        <div className="text-xs text-muted-foreground">{c.email}</div>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center gap-1 text-sm">
                          <MapPin className="w-3 h-3 text-muted-foreground" />{c.location}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center gap-1 text-sm">
                          <Briefcase className="w-3 h-3 text-muted-foreground" />{c.experienceYears} yrs
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {c.skills.map((s) => (
                            <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-xs">
                        {c.languages?.map((l) => `${l.language} ${l.level}`).join(", ")}
                      </TableCell>
                      <TableCell>
                        <div className="w-24">
                          <div className="flex justify-between text-xs mb-1">
                            <span>{c.matchScore}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#06a9e0] to-[#26d9ca]"
                              style={{ width: `${c.matchScore}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={statusColor[c.status]}>{c.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="board" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
              {statusColumns.map((status) => {
                const items = filtered.filter((c) => c.status === status);
                return (
                  <div key={status} className="bg-muted/30 rounded-lg p-3 min-h-[200px]">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-semibold">{status}</p>
                      <Badge variant="secondary" className="text-xs">{items.length}</Badge>
                    </div>
                    <div className="space-y-2">
                      {items.map((c) => (
                        <div key={c.id} className="bg-white p-3 rounded-md border shadow-sm">
                          <p className="text-sm font-medium">{c.firstName} {c.lastName}</p>
                          <p className="text-xs text-muted-foreground">{c.location} · {c.experienceYears}y</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {c.skills.slice(0, 2).map((s) => (
                              <Badge key={s} variant="outline" className="text-[10px]">{s}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CandidatesPage;