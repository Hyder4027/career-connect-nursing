// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { ArrowLeft, Upload, FileText, GraduationCap, Briefcase, AlertCircle, CheckCircle2 } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useToast } from "@/hooks/use-toast";

// const RegisterStep3 = () => {
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     education: "",
//     experience: "",
//     specializations: "",
//     languages: "",
//   });
//   const [acceptedTerms, setAcceptedTerms] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [uploadedFile, setUploadedFile] = useState<File | null>(null);

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setUploadedFile(file);
//     }
//   };

//   const handleTermsAcceptance = () => {
//     if (!acceptedTerms) {
//       setShowConfirmation(true);
//     } else {
//       setAcceptedTerms(false);
//     }
//   };

//   const handleFinalSubmission = () => {
//     // Simulate profile creation
//     toast({
//       title: "Profile Created Successfully!",
//       description: "Your profile is now under review by our admin team.",
//     });

//     setTimeout(() => {
//       navigate("/profile-review");
//     }, 2000);
//   };

//   const confirmTermsAcceptance = () => {
//     setAcceptedTerms(true);
//     setShowConfirmation(false);
//     toast({
//       title: "Terms Accepted",
//       description: "Thank you for accepting our terms and conditions.",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-8">
//       <div className="w-full max-w-2xl">
//         {/* Progress Indicator */}
//         <div className="mb-8">
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-semibold text-sm">✓</div>
//               <span className="text-sm text-muted-foreground">Personal Details</span>
//             </div>
//             <div className="w-12 h-px bg-border"></div>
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-semibold text-sm">✓</div>
//               <span className="text-sm text-muted-foreground">Verification</span>
//             </div>
//             <div className="w-12 h-px bg-border"></div>
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">3</div>
//               <span className="text-sm font-medium text-primary">Profile Setup</span>
//             </div>
//           </div>
//         </div>

//         <Card className="shadow-healthcare bg-gradient-card border-0">
//           <CardHeader className="text-center">
//             <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
//               <GraduationCap className="w-8 h-8 text-primary" />
//             </div>
//             <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
//             <CardDescription>
//               Tell us about your qualifications and experience
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="space-y-6">
//             {/* Educational Qualifications */}
//             <div className="space-y-3">
//               <Label htmlFor="education" className="flex items-center gap-2">
//                 <GraduationCap className="w-4 h-4" />
//                 Educational Qualifications *
//               </Label>
//               <Textarea
//                 id="education"
//                 value={formData.education}
//                 onChange={(e) => handleInputChange("education", e.target.value)}
//                 placeholder="e.g., Bachelor's in Nursing from University of Munich, Additional certifications..."
//                 className="min-h-20"
//               />
//             </div>

//             {/* Work Experience */}
//             <div className="space-y-3">
//               <Label htmlFor="experience" className="flex items-center gap-2">
//                 <Briefcase className="w-4 h-4" />
//                 Work Experience *
//               </Label>
//               <Textarea
//                 id="experience"
//                 value={formData.experience}
//                 onChange={(e) => handleInputChange("experience", e.target.value)}
//                 placeholder="e.g., 3 years as ICU Nurse at City Hospital, Emergency care experience..."
//                 className="min-h-20"
//               />
//             </div>

//             {/* Specializations */}
//             <div className="space-y-3">
//               <Label htmlFor="specializations">Specializations & Skills</Label>
//               <Textarea
//                 id="specializations"
//                 value={formData.specializations}
//                 onChange={(e) => handleInputChange("specializations", e.target.value)}
//                 placeholder="e.g., Critical Care, Pediatric Nursing, Emergency Medicine..."
//                 className="min-h-16"
//               />
//             </div>

//             {/* Languages */}
//             <div className="space-y-3">
//               <Label htmlFor="languages">Language Skills</Label>
//               <Input
//                 id="languages"
//                 value={formData.languages}
//                 onChange={(e) => handleInputChange("languages", e.target.value)}
//                 placeholder="e.g., German (B2), English (Fluent), Indonesian (Native)"
//               />
//             </div>

//             {/* CV Upload */}
//             <div className="space-y-3">
//               <Label className="flex items-center gap-2">
//                 <FileText className="w-4 h-4" />
//                 Upload CV/Resume *
//               </Label>
//               <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-smooth">
//                 <input
//                   type="file"
//                   accept=".pdf,.doc,.docx"
//                   onChange={handleFileUpload}
//                   className="hidden"
//                   id="cv-upload"
//                 />
//                 <label htmlFor="cv-upload" className="cursor-pointer">
//                   {uploadedFile ? (
//                     <div className="flex items-center justify-center gap-2 text-accent">
//                       <CheckCircle2 className="w-5 h-5" />
//                       <span className="font-medium">{uploadedFile.name}</span>
//                     </div>
//                   ) : (
//                     <div className="space-y-2">
//                       <Upload className="w-8 h-8 text-muted-foreground mx-auto" />
//                       <p className="text-sm font-medium">Click to upload CV/Resume</p>
//                       <p className="text-xs text-muted-foreground">PDF, DOC, DOCX up to 10MB</p>
//                     </div>
//                   )}
//                 </label>
//               </div>
//             </div>

//             {/* Terms & Conditions */}
//             <div className="space-y-4">
//               <Label className="text-base font-semibold">Terms & Conditions</Label>

//               {/* Terms Content */}
//               <ScrollArea className="h-40 w-full border rounded-lg p-4 bg-muted/30">
//                 <div className="space-y-4 text-sm text-muted-foreground pr-4">
//                   <h4 className="font-semibold text-foreground">CareConnect Terms of Service</h4>

//                   <div>
//                     <h5 className="font-medium text-foreground mb-2">1. Account Registration</h5>
//                     <p>By creating an account, you agree to provide accurate and complete information. You are responsible for maintaining the security of your account credentials.</p>
//                   </div>

//                   <div>
//                     <h5 className="font-medium text-foreground mb-2">2. Profile Information</h5>
//                     <p>All information provided in your professional profile must be accurate and verifiable. False information may result in account suspension.</p>
//                   </div>

//                   <div>
//                     <h5 className="font-medium text-foreground mb-2">3. Privacy & Data Protection</h5>
//                     <p>We are committed to protecting your privacy in accordance with GDPR and German data protection laws. Your personal information will only be used for matching you with suitable healthcare positions.</p>
//                   </div>

//                   <div>
//                     <h5 className="font-medium text-foreground mb-2">4. Professional Conduct</h5>
//                     <p>Users must maintain professional standards in all communications and interactions through our platform.</p>
//                   </div>

//                   <div>
//                     <h5 className="font-medium text-foreground mb-2">5. Service Availability</h5>
//                     <p>While we strive to maintain continuous service, we cannot guarantee uninterrupted access to our platform.</p>
//                   </div>
//                 </div>
//               </ScrollArea>

//               {/* Terms Acceptance */}
//               <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
//                 <Checkbox
//                   id="terms"
//                   checked={acceptedTerms}
//                   onCheckedChange={handleTermsAcceptance}
//                 />
//                 <div className="flex-1">
//                   <Label
//                     htmlFor="terms"
//                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
//                   >
//                     I have read and accept the Terms & Conditions *
//                   </Label>
//                   <p className="text-xs text-muted-foreground mt-1">
//                     You must accept the terms to continue with registration
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation */}
//             <div className="flex justify-between items-center pt-6">
//               <Link to="/register/step2">
//                 <Button variant="soft" className="gap-2">
//                   <ArrowLeft className="w-4 h-4" />
//                   Back
//                 </Button>
//               </Link>
//               <Button
//                 onClick={handleFinalSubmission}
//                 variant="hero"
//                 disabled={!acceptedTerms || !uploadedFile}
//                 className="gap-2"
//               >
//                 Create Profile
//                 <CheckCircle2 className="w-4 h-4" />
//               </Button>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Confirmation Dialog */}
//         {showConfirmation && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//             <Card className="w-full max-w-md">
//               <CardHeader>
//                 <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
//                   <AlertCircle className="w-6 h-6 text-primary" />
//                 </div>
//                 <CardTitle className="text-center">Confirm Terms Acceptance</CardTitle>
//                 <CardDescription className="text-center">
//                   Are you sure you want to accept the Terms & Conditions?
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="flex gap-3 justify-center">
//                 <Button variant="soft" onClick={() => setShowConfirmation(false)}>
//                   Cancel
//                 </Button>
//                 <Button variant="hero" onClick={confirmTermsAcceptance}>
//                   Yes, I Accept
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RegisterStep3;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowLeft,
  Upload,
  FileText,
  GraduationCap,
  Briefcase,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const RegisterStep3 = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    education: "",
    experience: "",
    specializations: "",
    languages: "",
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showTerms, setShowTerms] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasReadTerms, setHasReadTerms] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleCreateProfile = () => {
    // Show terms dialog first
    setShowTerms(true);
  };

  const confirmTermsAcceptance = () => {
    setShowTerms(false);
    setShowSuccess(true);

    toast({
      title: "Profile Created Successfully!",
      description: "Your profile is now under review by our admin team.",
    });

    setTimeout(() => {
      navigate("/profile-review");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                ✓
              </div>
              <span className="text-sm text-muted-foreground">
                Personal Details
              </span>
            </div>
            <div className="w-12 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                ✓
              </div>
              <span className="text-sm text-muted-foreground">
                Verification
              </span>
            </div>
            <div className="w-12 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                3
              </div>
              <span className="text-sm font-medium text-primary">
                Profile Setup
              </span>
            </div>
          </div>
        </div>

        <Card className="shadow-healthcare bg-gradient-card border-0">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
            <CardDescription>
              Tell us about your qualifications and experience
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Educational Qualifications */}
            <div className="space-y-3">
              <Label htmlFor="education" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Educational Qualifications *
              </Label>
              <Textarea
                id="education"
                value={formData.education}
                onChange={(e) => handleInputChange("education", e.target.value)}
                placeholder="e.g., Bachelor's in Nursing from University of Munich, Additional certifications..."
                className="min-h-20"
              />
            </div>

            {/* Work Experience */}
            <div className="space-y-3">
              <Label htmlFor="experience" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Work Experience *
              </Label>
              <Textarea
                id="experience"
                value={formData.experience}
                onChange={(e) =>
                  handleInputChange("experience", e.target.value)
                }
                placeholder="e.g., 3 years as ICU Nurse at City Hospital, Emergency care experience..."
                className="min-h-20"
              />
            </div>

            {/* Specializations */}
            <div className="space-y-3">
              <Label htmlFor="specializations">Specializations & Skills</Label>
              <Textarea
                id="specializations"
                value={formData.specializations}
                onChange={(e) =>
                  handleInputChange("specializations", e.target.value)
                }
                placeholder="e.g., Critical Care, Pediatric Nursing, Emergency Medicine..."
                className="min-h-16"
              />
            </div>

            {/* Languages */}
            <div className="space-y-3">
              <Label htmlFor="languages">Language Skills</Label>
              <Input
                id="languages"
                value={formData.languages}
                onChange={(e) => handleInputChange("languages", e.target.value)}
                placeholder="e.g., German (B2), English (Fluent), Indonesian (Native)"
              />
            </div>

            {/* CV Upload */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Upload CV/Resume *
              </Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-smooth">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="cv-upload"
                />
                <label htmlFor="cv-upload" className="cursor-pointer">
                  {uploadedFile ? (
                    <div className="flex items-center justify-center gap-2 text-accent">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-medium">{uploadedFile.name}</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto" />
                      <p className="text-sm font-medium">
                        Click to upload CV/Resume
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, DOC, DOCX up to 10MB
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6">
              <Link to="/register/step2">
                <Button variant="soft" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              </Link>
              <Button
                onClick={handleCreateProfile}
                variant="hero"
                disabled={!uploadedFile}
                className="gap-2"
              >
                Create Profile
                <CheckCircle2 className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Terms & Conditions Dialog */}
        {/* {showTerms && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-screen-lg">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-center">Terms & Conditions</CardTitle>
                <CardDescription className="text-center">
                  Please read and accept our terms before proceeding.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-48 w-full border rounded-lg p-4 bg-muted/30 mb-4">
                  <div className="space-y-4 text-sm text-muted-foreground pr-4">
                    <h4 className="font-semibold text-foreground">CareConnect Terms of Service</h4>
                    <p>By creating an account, you agree to provide accurate and complete information...</p>
                    <p>Your data will be protected under GDPR and German laws...</p>
                    <p>You must maintain professional standards while using this platform...</p>
                  </div>
                </ScrollArea>
                <div className="flex gap-3 justify-center">
                  <Button variant="soft" onClick={() => setShowTerms(false)}>
                    Cancel
                  </Button>
                  <Button variant="hero" onClick={confirmTermsAcceptance}>
                    I Accept
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )} */}

       

        {/* Success Popup */}
        {/* {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Profile Created Successfully!</CardTitle>
                <CardDescription>
                  Your profile is now under review by our admin team.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default RegisterStep3;
