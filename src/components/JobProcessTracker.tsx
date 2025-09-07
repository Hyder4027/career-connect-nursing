import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  X, 
  Calendar, 
  FileCheck, 
  MessageSquare, 
  Heart, 
  FileSignature, 
  BookOpen 
} from "lucide-react";

const JobProcessTracker = () => {
  const processSteps = [
    {
      id: 1,
      title: "Registration & Approval",
      status: "pending",
      date: "02/09/2025",
      icon: CheckCircle,
      description: "Complete registration and await admin approval"
    },
    {
      id: 2,
      title: "Appointment Scheduling",
      status: "not-started",
      date: null,
      icon: Calendar,
      description: "Schedule initial consultation appointment"
    },
    {
      id: 3,
      title: "Document Verification",
      status: "not-started",
      date: null,
      icon: FileCheck,
      description: "Submit and verify required documents"
    },
    {
      id: 4,
      title: "Interview Process",
      status: "not-started",
      date: null,
      icon: MessageSquare,
      description: "Complete interview with hiring team"
    },
    {
      id: 5,
      title: "Health Check",
      status: "not-started",
      date: null,
      icon: Heart,
      description: "Complete mandatory health screening"
    },
    {
      id: 6,
      title: "Contract Signing",
      status: "not-started",
      date: null,
      icon: FileSignature,
      description: "Review and sign employment contract"
    },
    {
      id: 7,
      title: "Training Enrolment",
      status: "not-started",
      date: null,
      icon: BookOpen,
      description: "Enroll in mandatory training programs"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "pending":
        return <Clock className="w-5 h-5 text-amber-600" />;
      default:
        return <X className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
      case "pending":
        return <Badge className="bg-amber-100 text-amber-800 border-amber-200">Pending</Badge>;
      default:
        return <Badge variant="secondary">Not Started</Badge>;
    }
  };

  return (
    <Card className="shadow-healthcare bg-gradient-card border-0">
      <CardHeader>
        <CardTitle className="text-lg text-foreground">Job Process Tracker</CardTitle>
        <p className="text-sm text-muted-foreground">
          Track your progress through our hiring process
        </p>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          {processSteps.map((step, index) => {
            const StepIcon = step.icon;
            const isLast = index === processSteps.length - 1;
            
            return (
              <div key={step.id} className="relative">
                {/* Connector Line */}
                {!isLast && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-border"></div>
                )}
                
                <div className="flex items-start gap-4">
                  {/* Step Icon */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                    step.status === 'pending' 
                      ? 'bg-amber-50 border-amber-200' 
                      : step.status === 'completed'
                      ? 'bg-green-50 border-green-200'
                      : 'bg-muted border-border'
                  }`}>
                    <StepIcon className={`w-5 h-5 ${
                      step.status === 'pending'
                        ? 'text-amber-600'
                        : step.status === 'completed'
                        ? 'text-green-600'
                        : 'text-muted-foreground'
                    }`} />
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-foreground">{step.title}</h3>
                      {getStatusBadge(step.status)}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">
                      {step.description}
                    </p>
                    
                    {step.date && (
                      <p className="text-xs text-muted-foreground">
                        Started: {step.date}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default JobProcessTracker;