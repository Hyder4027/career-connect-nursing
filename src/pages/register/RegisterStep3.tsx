import { useState, useEffect } from "react";
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
import {
  ArrowLeft,
  Upload,
  FileText,
  GraduationCap,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const RegisterStep3 = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Load saved data from localStorage
  const savedData = localStorage.getItem("registerFormData");
  const initialData = savedData
    ? JSON.parse(savedData)
    : {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      };

  const [formData, setFormData] = useState({
    firstName: initialData.firstName || "",
    lastName: initialData.lastName || "",
    email: initialData.email || "user@example.com", // read-only
    phone: initialData.phone || "+49 123 456 7890", // read-only
    education: "",
    experience: "",
    specializations: "",
    languages: "",
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showTerms, setShowTerms] = useState(false);

  // Update formData when input changes AND sync to localStorage
  const handleInputChange = (field: string, value: string) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);

    // Sync firstName, lastName changes to localStorage
    const existing = localStorage.getItem("registerFormData");
    const parsed = existing ? JSON.parse(existing) : {};
    localStorage.setItem(
      "registerFormData",
      JSON.stringify({ ...parsed, [field]: value })
    );
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setUploadedFile(file);
  };

  const handleCreateProfile = () => {
     toast({
      title: "Profile Created Successfully!",
      description: "Your profile is now under review by our admin team.",
    });

    setTimeout(() => {
      navigate("/profile-review");
    }, 3000);
    // setShowTerms(true);
  };

  // const confirmTermsAcceptance = () => {
  //   setShowTerms(false);

  //   toast({
  //     title: "Profile Created Successfully!",
  //     description: "Your profile is now under review by our admin team.",
  //   });

  //   setTimeout(() => {
  //     navigate("/profile-review");
  //   }, 3000);
  // };

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
              <span className="text-sm text-muted-foreground">Verification</span>
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
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name (editable) */}
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  placeholder="Enter your first name"
                />
              </div>

              {/* Last Name (editable) */}
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Email (read-only) */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  readOnly
                  className="bg-gray-100 cursor-not-allowed"
                />
              </div>

              {/* Phone (read-only) */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  readOnly
                  className="bg-gray-100 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Education */}
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
                placeholder="e.g., 3 years as ICU Nurse at City Hospital..."
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
                placeholder="e.g., Critical Care, Pediatric Nursing..."
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
                placeholder="e.g., German (B2), English (Fluent)"
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
      </div>
    </div>
  );
};

export default RegisterStep3;
