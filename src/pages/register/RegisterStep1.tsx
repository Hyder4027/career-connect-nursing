// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { ArrowRight, User, Mail, Phone, Calendar, MapPin } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// const RegisterStep1 = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     dateOfBirth: "",
//     gender: "",
//     nationality: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [isFormValid, setIsFormValid] = useState(false);

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   // Validation logic
//   useEffect(() => {
//     const newErrors: { [key: string]: string } = {};
//     const {
//       firstName,
//       lastName,
//       dateOfBirth,
//       gender,
//       nationality,
//       email,
//       phone,
//       password,
//       confirmPassword,
//     } = formData;

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9+\-\s]{8,15}$/;

//     if (!firstName.trim()) newErrors.firstName = "First name is required";
//     if (!lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
//     if (!gender) newErrors.gender = "Gender is required";
//     if (!nationality) newErrors.nationality = "Nationality is required";

//     if (!email) newErrors.email = "Email is required";
//     else if (!emailRegex.test(email)) newErrors.email = "Email is invalid";

//     if (!phone) newErrors.phone = "Phone number is required";
//     else if (!phoneRegex.test(phone)) newErrors.phone = "Phone number is invalid";

//     if (!password) newErrors.password = "Password is required";
//     else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

//     if (!confirmPassword) newErrors.confirmPassword = "Please confirm your password";
//     else if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

//     setErrors(newErrors);
//     setIsFormValid(Object.keys(newErrors).length === 0);
//   }, [formData]);

//   const handleNext = () => {
//     if (isFormValid) {
//       navigate("/register/step2");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-8">
//       <div className="w-full max-w-2xl">
//         {/* Progress Indicator */}
//         <div className="mb-8">
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
//                 1
//               </div>
//               <span className="text-sm font-medium text-primary">
//                 Personal Details
//               </span>
//             </div>
//             <div className="w-12 h-px bg-border"></div>
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center font-semibold text-sm">
//                 2
//               </div>
//               <span className="text-sm text-muted-foreground">Verification</span>
//             </div>
//             <div className="w-12 h-px bg-border"></div>
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center font-semibold text-sm">
//                 3
//               </div>
//               <span className="text-sm text-muted-foreground">Profile Setup</span>
//             </div>
//           </div>
//         </div>

//         <Card className="shadow-healthcare bg-gradient-card border-0">
//           <CardHeader className="text-center">
//             <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
//               <User className="w-8 h-8 text-primary" />
//             </div>
//             <CardTitle className="text-2xl">Create Your Account</CardTitle>
//             <CardDescription>
//               Please provide your personal information to get started
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="space-y-6">
//             {/* Name Fields */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="firstName">First Name *</Label>
//                 <Input
//                   id="firstName"
//                   value={formData.firstName}
//                   onChange={(e) =>
//                     handleInputChange("firstName", e.target.value)
//                   }
//                   placeholder="Enter your first name"
//                 />
//                 {errors.firstName && (
//                   <p className="text-sm text-red-500">{errors.firstName}</p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="lastName">Last Name *</Label>
//                 <Input
//                   id="lastName"
//                   value={formData.lastName}
//                   onChange={(e) =>
//                     handleInputChange("lastName", e.target.value)
//                   }
//                   placeholder="Enter your last name"
//                 />
//                 {errors.lastName && (
//                   <p className="text-sm text-red-500">{errors.lastName}</p>
//                 )}
//               </div>
//             </div>

//             {/* Personal Details */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="dateOfBirth">Date of Birth *</Label>
//                 <div className="relative">
//                   <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
//                   <Input
//                     id="dateOfBirth"
//                     type="date"
//                     value={formData.dateOfBirth}
//                     onChange={(e) =>
//                       handleInputChange("dateOfBirth", e.target.value)
//                     }
//                     className="pl-10"
//                   />
//                 </div>
//                 {errors.dateOfBirth && (
//                   <p className="text-sm text-red-500">{errors.dateOfBirth}</p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="gender">Gender *</Label>
//                 <Select
//                   onValueChange={(value) => handleInputChange("gender", value)}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select gender" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="female">Female</SelectItem>
//                     <SelectItem value="male">Male</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 {errors.gender && (
//                   <p className="text-sm text-red-500">{errors.gender}</p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="nationality">Nationality *</Label>
//                 <div className="relative">
//                   <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
//                   <Select
//                     onValueChange={(value) =>
//                       handleInputChange("nationality", value)
//                     }
//                   >
//                     <SelectTrigger className="pl-10">
//                       <SelectValue placeholder="Select nationality" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="german">German</SelectItem>
//                       <SelectItem value="indonesian">Indonesian</SelectItem>
//                       <SelectItem value="other">Other</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 {errors.nationality && (
//                   <p className="text-sm text-red-500">{errors.nationality}</p>
//                 )}
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email Address *</Label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     placeholder="your.email@example.com"
//                     className="pl-10"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="text-sm text-red-500">{errors.email}</p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="phone">Phone Number *</Label>
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
//                   <Input
//                     id="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={(e) => handleInputChange("phone", e.target.value)}
//                     placeholder="+49 123 456 7890"
//                     className="pl-10"
//                   />
//                 </div>
//                 {errors.phone && (
//                   <p className="text-sm text-red-500">{errors.phone}</p>
//                 )}
//               </div>
//             </div>

//             {/* Password Fields */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="password">Password *</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   value={formData.password}
//                   onChange={(e) =>
//                     handleInputChange("password", e.target.value)
//                   }
//                   placeholder="Create a strong password"
//                 />
//                 {errors.password && (
//                   <p className="text-sm text-red-500">{errors.password}</p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="confirmPassword">Confirm Password *</Label>
//                 <Input
//                   id="confirmPassword"
//                   type="password"
//                   value={formData.confirmPassword}
//                   onChange={(e) =>
//                     handleInputChange("confirmPassword", e.target.value)
//                   }
//                   placeholder="Confirm your password"
//                 />
//                 {errors.confirmPassword && (
//                   <p className="text-sm text-red-500">{errors.confirmPassword}</p>
//                 )}
//               </div>
//             </div>

//             {/* Navigation */}
//             <div className="flex justify-between items-center pt-6">
//               <Link to="/">
//                 <Button variant="soft">Back to Home</Button>
//               </Link>
//               <Button
//                 onClick={handleNext}
//                 variant="hero"
//                 className="gap-2"
//                 disabled={!isFormValid}
//               >
//                 Continue to Verification
//                 <ArrowRight className="w-4 h-4" />
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default RegisterStep1;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, User, Mail, Phone, Calendar, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const RegisterStep1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("registerFormData");
    return savedData
      ? JSON.parse(savedData)
      : {
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          gender: "",
          nationality: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        };
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Validation logic
  useEffect(() => {
    const newErrors: { [key: string]: string } = {};
    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      nationality,
      email,
      phone,
      password,
      confirmPassword,
    } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s]{8,15}$/;

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
    if (!gender) newErrors.gender = "Gender is required";
    if (!nationality) newErrors.nationality = "Nationality is required";

    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Email is invalid";

    if (!phone) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(phone))
      newErrors.phone = "Phone number is invalid";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData]);

  const handleNext = () => {
    setIsSubmitted(true); // only show errors after clicking
    if (isFormValid) {
      // Save form data to localStorage or context for next step
      localStorage.setItem("registerFormData", JSON.stringify(formData));

      navigate("/register/step2");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                1
              </div>
              <span className="text-sm font-medium text-primary">
                Personal Details
              </span>
            </div>
            <div className="w-12 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                2
              </div>
              <span className="text-sm text-muted-foreground">
                Verification
              </span>
            </div>
            <div className="w-12 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                3
              </div>
              <span className="text-sm text-muted-foreground">
                Profile Setup
              </span>
            </div>
          </div>
        </div>

        <Card className="shadow-healthcare bg-gradient-card border-0">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <User className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Create Your Account</CardTitle>
            <CardDescription>
              Please provide your personal information to get started
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                {isSubmitted && errors.firstName && (
                  <p className="text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>
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
                {isSubmitted && errors.lastName && (
                  <p className="text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange("dateOfBirth", e.target.value)
                    }
                    className="pl-10"
                  />
                </div>
                {isSubmitted && errors.dateOfBirth && (
                  <p className="text-sm text-red-500">{errors.dateOfBirth}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select
                  onValueChange={(value) => handleInputChange("gender", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {isSubmitted && errors.gender && (
                  <p className="text-sm text-red-500">{errors.gender}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("nationality", value)
                    }
                  >
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Select nationality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="indonesian">Indonesian</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {isSubmitted && errors.nationality && (
                  <p className="text-sm text-red-500">{errors.nationality}</p>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className="pl-10"
                  />
                </div>
                {isSubmitted && errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+49 123 456 7890"
                    className="pl-10"
                  />
                </div>
                {isSubmitted && errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <div className="relative">
                
                <Input
                  id="password"
                  // type="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-3 text-muted-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
                {isSubmitted && errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  placeholder="Confirm your password"
                />
                <button

                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-3 text-muted-foreground"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
                </div>
                {isSubmitted && errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6">
              <Link to="/">
                <Button variant="soft">Back to Home</Button>
              </Link>
              <Button onClick={handleNext} variant="hero" className="gap-2">
                Continue to Verification
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterStep1;
