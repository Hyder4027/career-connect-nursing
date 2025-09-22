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
  Eye, 
  Check, 
  X, 
  Download,
  ArrowLeft,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface Application {
  id: string;
  candidateName: string;
  jobTitle: string;
  status: 'Pending' | 'Accepted' | 'Rejected' | 'Shortlisted';
  appliedDate: string;
  experience: string;
  qualification: string;
  email: string;
  phone: string;
}

const Applications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [jobFilter, setJobFilter] = useState('all');
  const { toast } = useToast();

  // Mock data
  const applications: Application[] = [
    {
      id: '1',
      candidateName: 'Sarah Johnson',
      jobTitle: 'Senior Nurse - ICU',
      status: 'Pending',
      appliedDate: '2025-01-16',
      experience: '5 years',
      qualification: 'BSN, Critical Care Certification',
      email: 'sarah.johnson@email.com',
      phone: '+1-555-0123'
    },
    {
      id: '2',
      candidateName: 'Dr. Michael Chen',
      jobTitle: 'Cardiologist',
      status: 'Shortlisted',
      appliedDate: '2025-01-15',
      experience: '8 years',
      qualification: 'MD, Cardiology Board Certified',
      email: 'michael.chen@email.com',
      phone: '+1-555-0124'
    },
    {
      id: '3',
      candidateName: 'Emily Rodriguez',
      jobTitle: 'Pharmacist',
      status: 'Accepted',
      appliedDate: '2025-01-14',
      experience: '3 years',
      qualification: 'PharmD, Licensed Pharmacist',
      email: 'emily.rodriguez@email.com',
      phone: '+1-555-0125'
    },
    {
      id: '4',
      candidateName: 'James Wilson',
      jobTitle: 'Radiologic Technologist',
      status: 'Pending',
      appliedDate: '2025-01-13',
      experience: '2 years',
      qualification: 'Associate Degree, ARRT Certified',
      email: 'james.wilson@email.com',
      phone: '+1-555-0126'
    },
    {
      id: '5',
      candidateName: 'Lisa Thompson',
      jobTitle: 'Senior Nurse - ICU',
      status: 'Rejected',
      appliedDate: '2025-01-12',
      experience: '1 year',
      qualification: 'BSN, New Graduate',
      email: 'lisa.thompson@email.com',
      phone: '+1-555-0127'
    },
    {
      id: '6',
      candidateName: 'Robert Davis',
      jobTitle: 'Emergency Physician',
      status: 'Shortlisted',
      appliedDate: '2025-01-11',
      experience: '12 years',
      qualification: 'MD, Emergency Medicine Board Certified',
      email: 'robert.davis@email.com',
      phone: '+1-555-0128'
    }
  ];

  // Filter applications
  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status.toLowerCase() === statusFilter;
    const matchesJob = jobFilter === 'all' || app.jobTitle.toLowerCase().includes(jobFilter.toLowerCase());
    
    return matchesSearch && matchesStatus && matchesJob;
  });

  const handleStatusUpdate = (applicationId: string, newStatus: 'Accepted' | 'Rejected' | 'Shortlisted') => {
    const application = applications.find(app => app.id === applicationId);
    if (application) {
      toast({
        title: "Status Updated",
        description: `${application.candidateName}'s application has been ${newStatus.toLowerCase()}.`,
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Accepted':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Shortlisted':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const uniqueJobs = Array.from(new Set(applications.map(app => app.jobTitle)));

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
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
              <h1 className="text-xl font-semibold text-primary">Applications</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Candidate Applications</CardTitle>
            <CardDescription>
              Review and manage applications from healthcare professionals
            </CardDescription>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by candidate name or job title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Select value={jobFilter} onValueChange={setJobFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by Job" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Jobs</SelectItem>
                    {uniqueJobs.map(job => (
                      <SelectItem key={job} value={job.toLowerCase()}>{job}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="shortlisted">Shortlisted</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">
                  {applications.filter(app => app.status === 'Pending').length}
                </div>
                <div className="text-sm text-muted-foreground">Pending Review</div>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">
                  {applications.filter(app => app.status === 'Shortlisted').length}
                </div>
                <div className="text-sm text-muted-foreground">Shortlisted</div>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">
                  {applications.filter(app => app.status === 'Accepted').length}
                </div>
                <div className="text-sm text-muted-foreground">Accepted</div>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">
                  {applications.length}
                </div>
                <div className="text-sm text-muted-foreground">Total Applications</div>
              </div>
            </div>

            {/* Applications Table */}
            <div className="rounded-lg border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate Name</TableHead>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Qualification</TableHead>
                    <TableHead>Applied Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.length > 0 ? (
                    filteredApplications.map((application) => (
                      <TableRow key={application.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium text-primary">
                              {application.candidateName}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {application.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{application.jobTitle}</TableCell>
                        <TableCell>{application.experience}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {application.qualification}
                          </div>
                        </TableCell>
                        <TableCell>
                          {new Date(application.appliedDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(application.status)}>
                            {application.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 w-8 p-0"
                              title="View Profile"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            
                            {application.status === 'Pending' && (
                              <>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="h-8 w-8 p-0 text-green-600 hover:text-green-700"
                                  onClick={() => handleStatusUpdate(application.id, 'Accepted')}
                                  title="Accept"
                                >
                                  <Check className="w-4 h-4" />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                                  onClick={() => handleStatusUpdate(application.id, 'Rejected')}
                                  title="Reject"
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </>
                            )}
                            
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 w-8 p-0"
                              title="Download Resume"
                            >
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8">
                        <div className="text-muted-foreground">
                          No applications found matching your criteria
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

export default Applications;