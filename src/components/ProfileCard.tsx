import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, GraduationCap, Briefcase, Stethoscope, Clock } from "lucide-react";

const ProfileCard = () => {
  const profileData = {
    name: "John Doe",
    email: "john.doe@email.com",
    contact: "+49 123 456 7890",
    qualification: "Bachelor of Science in Nursing",
    experience: "2 years",
    careerField: "Registered Nurse"
  };

  return (
    <Card className="shadow-healthcare bg-gradient-card border-0">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-foreground">Profile Information</CardTitle>
          <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground">{profileData.email}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Contact</p>
              <p className="text-sm font-medium text-foreground">{profileData.contact}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Qualification</p>
              <p className="text-sm font-medium text-foreground">{profileData.qualification}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Experience</p>
              <p className="text-sm font-medium text-foreground">{profileData.experience}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Career Field</p>
              <p className="text-sm font-medium text-foreground">{profileData.careerField}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            Your registration has been submitted. Awaiting admin approval.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;