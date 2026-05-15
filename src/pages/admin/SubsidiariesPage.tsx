import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus, Eye } from "lucide-react";
import { mockSubsidiaries } from "@/data/mockOrganization";
import { Link } from "react-router-dom";

const SubsidiariesPage = () => {
  const [q, setQ] = useState("");
  const [industry, setIndustry] = useState("all");
  const [city, setCity] = useState("all");

  const industries = Array.from(new Set(mockSubsidiaries.map((s) => s.industry)));
  const cities = Array.from(new Set(mockSubsidiaries.map((s) => s.address.city)));

  const filtered = useMemo(
    () =>
      mockSubsidiaries.filter((s) => {
        const matchesQ =
          s.name.toLowerCase().includes(q.toLowerCase()) ||
          s.registrationNumber.toLowerCase().includes(q.toLowerCase()) ||
          s.vatId.toLowerCase().includes(q.toLowerCase());
        const matchesI = industry === "all" || s.industry === industry;
        const matchesC = city === "all" || s.address.city === city;
        return matchesQ && matchesI && matchesC;
      }),
    [q, industry, city]
  );

  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <CardTitle>Subsidiary companies</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {filtered.length} of {mockSubsidiaries.length} entities
            </p>
          </div>
          <Button className="bg-gradient-to-r from-[#06a9e0] to-[#26d9ca] text-white">
            <Plus className="w-4 h-4 mr-2" />
            New subsidiary
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search name, HRB, VAT-ID..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger className="w-full sm:w-44"><SelectValue placeholder="Industry" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All industries</SelectItem>
              {industries.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger className="w-full sm:w-40"><SelectValue placeholder="City" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All cities</SelectItem>
              {cities.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Legal form</TableHead>
                <TableHead>City</TableHead>
                <TableHead>HRB</TableHead>
                <TableHead>VAT-ID</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Invoicing</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="font-medium">{s.name}</TableCell>
                  <TableCell>{s.legalForm}</TableCell>
                  <TableCell>{s.address.city}</TableCell>
                  <TableCell className="text-xs">{s.registrationNumber}</TableCell>
                  <TableCell className="text-xs">{s.vatId}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{s.industry}</Badge>
                  </TableCell>
                  <TableCell>
                    {s.independentInvoicing ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Independent</Badge>
                    ) : (
                      <Badge variant="outline">Central</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Link to={`/admin/subsidiaries/${s.id}`}>
                      <Button size="sm" variant="ghost"><Eye className="w-4 h-4" /></Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No subsidiaries match your filters
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubsidiariesPage;