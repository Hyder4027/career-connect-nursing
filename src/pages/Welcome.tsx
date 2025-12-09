import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import {
  Heart,
  Building2,
  Briefcase,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Zap,
  Sparkles,
  Lock,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
  UserCheck,
  FileCheck,
  Clock,
} from "lucide-react";
import heroImage from "@/assets/hero-handshake.jpg";
import { useEffect, useState, useRef, useCallback } from "react";

// Hook for scroll-triggered animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

// Animated counter hook
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return { count, ref };
};

const Welcome = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const services = [
    {
      icon: Building2,
      title: "Employer Registration",
      description: "Quick onboarding for hospitals and clinics with verification workflows",
    },
    {
      icon: Briefcase,
      title: "Job Posting & Management",
      description: "Create, manage, and track job listings with real-time applicant insights",
    },
    {
      icon: Users,
      title: "Candidate Portal",
      description: "Empower healthcare professionals to discover and apply for opportunities",
    },
    {
      icon: Shield,
      title: "Verification & Compliance",
      description: "Automated credential verification and compliance tracking",
    },
  ];

  const values = [
    {
      icon: Lock,
      title: "Secure & Verified",
      description: "Enterprise-grade security with Keycloak authentication and encrypted data handling",
    },
    {
      icon: Zap,
      title: "Fast Hiring",
      description: "Reduce time-to-hire by 60% with intelligent matching and streamlined workflows",
    },
    {
      icon: Sparkles,
      title: "Simple to Use",
      description: "Intuitive interface designed for busy healthcare administrators",
    },
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Healthcare Facilities" },
    { value: 10000, suffix: "+", label: "Professionals Matched" },
    { value: 99.9, suffix: "%", label: "Platform Uptime" },
    { value: 60, suffix: "%", label: "Faster Hiring" },
  ];

  const logos = [
    "Hospital Group A",
    "Medical Center B",
    "Healthcare Network C",
    "Clinic Group D",
    "Regional Hospital E",
  ];

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-lg border-b border-border shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-cyan group-hover:shadow-glow transition-shadow duration-300">
                <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Sehet-Meyer</h1>
                <p className="text-xs text-muted-foreground">Healthcare Recruitment</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {["Home", "About", "Services", "Features", "Contact"].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-foreground hover:text-primary transition-colors duration-200 group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Link to="/hospital/login" className="hidden sm:block">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:text-primary"
                >
                  Login
                </Button>
              </Link>
              <Link to="/hospital/register" className="hidden sm:block">
                <Button
                  size="sm"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="pt-4 pb-2 space-y-2">
              {["Home", "About", "Services", "Features", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex gap-2 pt-4">
                <Link to="/hospital/login" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/hospital/register" className="flex-1">
                  <Button size="sm" className="w-full bg-gradient-primary text-primary-foreground">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero-bg pt-20">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Blobs */}
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob delay-500" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-ice/50 rounded-full blur-3xl" />
          
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          
          {/* Floating Icons */}
          <div className="absolute top-32 right-[20%] animate-float">
            <div className="w-16 h-16 rounded-2xl bg-card shadow-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </div>
          <div className="absolute bottom-32 left-[15%] animate-float-delayed">
            <div className="w-14 h-14 rounded-xl bg-card shadow-lg flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-accent" />
            </div>
          </div>
          <div className="absolute top-1/2 right-[8%] animate-float-slow">
            <div className="w-12 h-12 rounded-lg bg-card shadow-md flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-ice border border-primary/20 animate-fade-up">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Trusted by 500+ Healthcare Facilities</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                <span className="block animate-fade-up">Connecting</span>
                <span className="block animate-fade-up delay-100">Hospitals &</span>
                <span className="block gradient-text animate-fade-up delay-200">Healthcare</span>
                <span className="block animate-fade-up delay-300">Professionals</span>
                <span className="block text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-semibold animate-fade-up delay-400">Seamlessly</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up delay-500">
                Smart hiring, verified onboarding, and secure communication — all in one place.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-scale-in delay-600">
                <Link to="/hospital/register">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow hover:scale-[1.02] transition-all duration-300 text-lg px-8 h-14 text-primary-foreground animate-pulse-glow"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 h-14 border-2 hover:bg-muted transition-all duration-300 group"
                  >
                    Explore Services
                    <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground animate-fade-up delay-700">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>SOC 2 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative animate-fade-left delay-300">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Healthcare professionals collaborating"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />

                {/* Floating Stats Cards */}
                <div className="absolute top-6 right-6 glass rounded-2xl p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">500+</p>
                      <p className="text-sm text-muted-foreground">Facilities</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 glass rounded-2xl p-4 shadow-xl animate-float-delayed">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">10K+</p>
                      <p className="text-sm text-muted-foreground">Matched</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <SocialProofSection logos={logos} />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection services={services} />

      {/* Why Choose Us */}
      <ValuesSection values={values} />

      {/* Statistics Section */}
      <StatsSection stats={stats} />

      {/* CTA Section */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Social Proof Section
const SocialProofSection = ({ logos }: { logos: string[] }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 bg-muted/50 border-y border-border">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 ${
          isVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading healthcare institutions
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-xl font-bold text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-pointer"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    { icon: UserCheck, text: "Streamlined employer onboarding" },
    { icon: Shield, text: "Secure verification via Keycloak SSO" },
    { icon: Briefcase, text: "Real-time job posting and applicant tracking" },
    { icon: FileCheck, text: "Compliance-ready documentation" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`space-y-8 ${
              isVisible ? "scroll-visible" : "scroll-hidden-right"
            }`}
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About Our Platform
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
                Built for Modern Healthcare Hiring
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sehet-Meyer is a comprehensive B2B healthcare recruitment platform designed to streamline 
                the entire hiring process. From initial job posting to verified onboarding, we provide 
                the tools healthcare facilities need to find and hire qualified professionals efficiently.
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div
            className={`relative ${
              isVisible ? "scroll-visible" : "scroll-hidden-left"
            }`}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass rounded-3xl p-8 shadow-xl neu-shadow">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Dashboard Preview</h3>
                      <p className="text-muted-foreground">Manage everything in one place</p>
                    </div>
                  </div>
                  
                  {/* Mock Dashboard Elements */}
                  <div className="space-y-3">
                    <div className="h-3 bg-muted rounded-full w-full" />
                    <div className="h-3 bg-muted rounded-full w-3/4" />
                    <div className="h-3 bg-muted rounded-full w-5/6" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-primary/10 text-center">
                      <p className="text-2xl font-bold text-primary">24</p>
                      <p className="text-xs text-muted-foreground">Active Jobs</p>
                    </div>
                    <div className="p-4 rounded-xl bg-accent/10 text-center">
                      <p className="text-2xl font-bold text-accent">156</p>
                      <p className="text-xs text-muted-foreground">Applicants</p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted text-center">
                      <p className="text-2xl font-bold text-foreground">12</p>
                      <p className="text-xs text-muted-foreground">Hired</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = ({
  services,
}: {
  services: { icon: any; title: string; description: string }[];
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete suite of tools designed to streamline healthcare recruitment
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group ${isVisible ? "scroll-visible" : "scroll-hidden"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-8 rounded-3xl glass border border-border/50 hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Values Section
const ValuesSection = ({
  values,
}: {
  values: { icon: any; title: string; description: string }[];
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-accent-ice/30">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Built for Healthcare Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade features designed with healthcare providers in mind
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`text-center ${isVisible ? "scroll-visible" : "scroll-hidden"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <value.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = ({
  stats,
}: {
  stats: { value: number; suffix: string; label: string }[];
}) => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  stat,
  delay,
}: {
  stat: { value: number; suffix: string; label: string };
  delay: number;
}) => {
  const { count, ref } = useCountUp(stat.value);

  return (
    <div
      ref={ref}
      className="text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
        {stat.value % 1 !== 0 ? count.toFixed(1) : count}
        {stat.suffix}
      </p>
      <p className="text-secondary-foreground/80">{stat.label}</p>
    </div>
  );
};

// CTA Section
const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-cta" />
      
      {/* Animated Shimmer */}
      <div className="absolute inset-0 animate-shimmer opacity-20" />
      
      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="w-[200%] h-24 animate-wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,70.28,googletag.88,61.74,272.17,67.55,321.39,56.44Z"
            fill="hsl(var(--background))"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 relative z-10 text-center ${
          isVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Transform Your Healthcare Hiring?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Join hundreds of healthcare facilities already using Sehet-Meyer
        </p>
        <Link to="/hospital/register">
          <Button
            size="lg"
            className="bg-card text-primary hover:bg-card/90 hover:scale-105 transition-all duration-300 text-lg px-10 h-14 shadow-xl animate-pulse-glow"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
        <p className="mt-6 text-primary-foreground/70 text-sm">
          No credit card required • Free 14-day trial
        </p>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = ({
  formData,
  setFormData,
  handleSubmit,
}: {
  formData: { name: string; email: string; message: string };
  setFormData: React.Dispatch<
    React.SetStateAction<{ name: string; email: string; message: string }>
  >;
  handleSubmit: (e: React.FormEvent) => void;
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-background">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div
            className={`space-y-8 ${
              isVisible ? "scroll-visible" : "scroll-hidden-right"
            }`}
          >
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "contact@sehet-meyer.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "123 Healthcare Lane, Medical District, NY 10001",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-3xl bg-muted flex items-center justify-center">
              <MapPin className="w-12 h-12 text-muted-foreground" />
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`${isVisible ? "scroll-visible" : "scroll-hidden-left"}`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl glass border border-border shadow-xl space-y-6"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="h-12 rounded-xl border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="h-12 rounded-xl border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-32 rounded-xl border-border focus:border-primary focus:ring-primary resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 h-14 text-lg text-primary-foreground"
              >
                Send Message
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  const links = {
    product: ["Home", "Features", "Pricing", "Demo"],
    company: ["About", "Careers", "Blog", "Contact"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 ${
          isVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-lg font-bold text-primary-foreground">Sehet-Meyer</span>
            </Link>
            <p className="text-secondary-foreground/70 text-sm mb-4">
              Connecting healthcare facilities with qualified professionals.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © 2025 Sehet-Meyer. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Welcome;
