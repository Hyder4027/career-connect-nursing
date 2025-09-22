import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Building2, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2, 
  Plus,
  ArrowLeft 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Job {
  id: string;
  title: string;
  department: string;
  status: 'Active' | 'Closed' | 'Draft';
  datePosted: string;
  applications: number;
  deadline: string;
}

const MyJobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  // Mock data
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Senior Nurse - ICU',
      department: 'Critical Care',
      status: 'Active',
      datePosted: '2025-01-15',
      applications: 12,
      deadline: '2025-02-15'
    },
    {
      id: '2',
      title: 'Cardiologist',
      department: 'Cardiology',
      status: 'Active',
      datePosted: '2025-01-14',
      applications: 8,
      deadline: '2025-02-14'
    },
    {
      id: '3',
      title: 'Pharmacist',
      department: 'Pharmacy',
      status: 'Closed',
      datePosted: '2025-01-12',
      applications: 24,
      deadline: '2025-02-12'
    },
    {
      id: '4',
      title: 'Radiologic Technologist',
      department: 'Radiology',
      status: 'Active',
      datePosted: '2025-01-10',
      applications: 6,
      deadline: '2025-02-10'
    },
    {
      id: '5',
      title: 'Physical Therapist',
      department: 'Rehabilitation',
      status: 'Draft',
      datePosted: '2025-01-08',
      applications: 0,
      deadline: '2025-02-08'
    },
    {
      id: '6',
      title: 'Emergency Physician',
      department: 'Emergency',
      status: 'Active',
      datePosted: '2025-01-06',
      applications: 15,
      deadline: '2025-02-06'
    }
  ];

  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || job.status.toLowerCase() === statusFilter;
    const matchesDepartment = departmentFilter === 'all' || job.department.toLowerCase() === departmentFilter.toLowerCase();
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Closed':
        return 'bg-red-100 text-red-800';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/hospital/dashboard">
                <Button variant="ghost" size="sm" className="mr-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-hospital rounded-full flex items-center justify-center mr-3">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-semibold text-primary">My Jobs</h1>
              </div>
            </div>
            
            <Link to="/hospital/post-job">
              <Button className="bg-gradient-hospital hover:opacity-90">
                <Plus className="w-4 h-4 mr-2" />
                Post New Job
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Job Postings Management</CardTitle>
            <CardDescription>
              Manage all your job postings, track applications, and monitor performance
            </CardDescription>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search jobs by title or department..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger className="w-44">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="critical care">Critical Care</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="pharmacy">Pharmacy</SelectItem>
                    <SelectItem value="radiology">Radiology</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                    <SelectItem value="rehabilitation">Rehabilitation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">
                  {jobs.filter(j => j.status === 'Active').length}
                </div>
                <div className="text-sm text-muted-foreground">Active Jobs</div>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">
                  {jobs.reduce((sum, job) => sum + job.applications, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Total Applications</div>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">
                  {jobs.filter(j => j.status === 'Draft').length}
                </div>
                <div className="text-sm text-muted-foreground">Draft Jobs</div>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">
                  {Math.round(jobs.reduce((sum, job) => sum + job.applications, 0) / jobs.length)}
                </div>
                <div className="text-sm text-muted-foreground">Avg Applications</div>
              </div>
            </div>

            {/* Jobs Table */}
            <div className="rounded-lg border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Posted</TableHead>
                    <TableHead>Applications</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                      <TableRow key={job.id}>
                        <TableCell className="font-medium text-primary">
                          {job.title}
                        </TableCell>
                        <TableCell>{job.department}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(job.status)}>
                            {job.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(job.datePosted).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className="font-medium">{job.applications}</span>
                            {job.applications > 0 && (
                              <Link 
                                to={`/hospital/applications?job=${encodeURIComponent(job.title)}`}
                                className="ml-2"
                              >
                                <Button variant="ghost" size="sm" className="h-6 px-2">
                                  <Eye className="w-3 h-3" />
                                </Button>
                              </Link>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{new Date(job.deadline).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8">
                        <div className="text-muted-foreground">
                          No jobs found matching your criteria
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default MyJobs;