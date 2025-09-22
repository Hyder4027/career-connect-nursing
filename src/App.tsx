import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import RegisterStep1 from "./pages/register/RegisterStep1";
import RegisterStep2 from "./pages/register/RegisterStep2";
import RegisterStep3 from "./pages/register/RegisterStep3";
import ProfileReview from "./pages/ProfileReview";
import TermsConditions from "@/pages/register/TermsConditions";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Hospital Module Pages
import HospitalRegister from "./pages/hospital/HospitalRegister";
import HospitalLogin from "./pages/hospital/HospitalLogin";
import HospitalDashboard from "./pages/hospital/HospitalDashboard";
import PostJob from "./pages/hospital/PostJob";
import MyJobs from "./pages/hospital/MyJobs";
import Applications from "./pages/hospital/Applications";
import Profile from "./pages/hospital/Profile";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Candidate Routes */}
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterStep1 />} />
          <Route path="/register/step1" element={<RegisterStep1 />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="/register/step2" element={<RegisterStep2 />} />
          <Route path="/register/step3" element={<RegisterStep3 />} />
          <Route path="/profile-review" element={<ProfileReview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Hospital Routes */}
          <Route path="/hospital/register" element={<HospitalRegister />} />
          <Route path="/hospital/login" element={<HospitalLogin />} />
          <Route path="/hospital/dashboard" element={<HospitalDashboard />} />
          <Route path="/hospital/post-job" element={<PostJob />} />
          <Route path="/hospital/jobs" element={<MyJobs />} />
          <Route path="/hospital/applications" element={<Applications />} />
          <Route path="/hospital/profile" element={<Profile />} />
          
          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
