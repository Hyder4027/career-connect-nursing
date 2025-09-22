import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import StatsCard from '@/components/hospital/StatsCard';
import { 
  Building2, 
  Briefcase, 
  Users, 
  UserCheck, 
  Plus, 
  Bell, 
  Calendar,
  Eye,
  LogOut,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HospitalDashboard = () => {
  const stats = [
    {
      title: "Total Jobs Posted",
      value: 24,
      icon: Briefcase,
      trend: { value: "12%", isPositive: true }
    },
    {
      title: "Active Jobs",
      value: 18,
      icon: Building2,
      trend: { value: "8%", isPositive: true }
    },
    {
      title: "Total Applications",
      value: 156,
      icon: Users,
      trend: { value: "23%", isPositive: true }
    },
    {
      title: "Shortlisted Candidates",
      value: 42,
      icon: UserCheck,
      trend: { value: "15%", isPositive: true }
    }
  ];

  const recentJobs = [
    {
      title: "Senior Nurse - ICU",
      department: "Critical Care",
      date: "2025-01-15",
      status: "Active",
      applications: 12
    },
    {
      title: "Cardiologist",
      department: "Cardiology",
      date: "2025-01-14",
      status: "Active",
      applications: 8
    },
    {
      title: "Pharmacist",
      department: "Pharmacy",
      date: "2025-01-12",
      status: "Closed",
      applications: 24
    },
    {
      title: "Radiologic Technologist",
      department: "Radiology",
      date: "2025-01-10",
      status: "Active",
      applications: 6
    }
  ];

  const notifications = [
    "2 applications pending review for Senior Nurse position",
    "Interview scheduled for Cardiologist position tomorrow",
    "New application received for Pharmacist position"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-hospital rounded-full flex items-center justify-center mr-3">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-primary">Hospital Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
                <Badge variant="destructive" className="ml-2">3</Badge>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Recent Job Posts</CardTitle>
                    <CardDescription>Your latest job postings and their status</CardDescription>
                  </div>
                  <Link to="/hospital/post-job">
                    <Button className="bg-gradient-hospital hover:opacity-90">
                      <Plus className="w-4 h-4 mr-2" />
                      Post New Job
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentJobs.map((job, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">{job.department} • {job.date}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={job.status === 'Active' ? 'default' : 'secondary'}
                          className={job.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {job.status}
                        </Badge>
                        <span className="text-sm font-medium">{job.applications} applications</span>
                        <Link to={`/hospital/applications?job=${encodeURIComponent(job.title)}`}>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View Applications
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <Link to="/hospital/jobs">
                    <Button variant="outline" className="w-full">
                      View All Jobs
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-primary" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div key={index} className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm">{notification}</p>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/hospital/post-job">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    Post New Job
                  </Button>
                </Link>
                <Link to="/hospital/applications">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Review Applications
                  </Button>
                </Link>
                <Link to="/hospital/jobs">
                  <Button variant="outline" className="w-full justify-start">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Manage Jobs
                  </Button>
                </Link>
                <Link to="/hospital/profile">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    Hospital Settings
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HospitalDashboard;