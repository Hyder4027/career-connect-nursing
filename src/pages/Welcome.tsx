import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, Stethoscope, Users, Award, Phone, Mail, MapPin, 
  Clock, CheckCircle, Star, Play, Facebook, Twitter, Instagram, 
  Linkedin, GraduationCap, Briefcase, Globe, Shield, 
  TrendingUp, FileCheck, Video, Menu, X, ArrowRight,
  Target, Eye, Sparkles, QrCode, Building2, MapPinned
} from "lucide-react";
import heroImage from "@/assets/hero-handshake.jpg";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef } from "react";

const Welcome = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth parallax effect
  const y = useSpring(useTransform(scrollY, [0, 500], [0, 150]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Sticky Navbar */}
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
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-11 h-11 bg-gradient-hero rounded-xl flex items-center justify-center shadow-healthcare">
                <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
              </div>
              <div>
                <h1 className={`text-xl font-bold ${scrolled ? 'text-foreground' : 'text-card'}`}>
                  Sehat Meyer
                </h1>
                <p className={`text-xs ${scrolled ? 'text-muted-foreground' : 'text-card/80'}`}>
                  Nursing Careers Germany
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {["Home", "About", "Services", "Jobs", "Training", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative transition-colors hover:text-primary ${
                    scrolled ? 'text-foreground' : 'text-card'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <LanguageSelector />
              <Link to="/register" className="hidden sm:block">
                <Button 
                  size="sm" 
                  className="bg-gradient-coral hover:shadow-coral transition-all"
                >
                  Create Profile
                </Button>
              </Link>
              <Link to="/login">
                <Button 
                  size="sm" 
                  variant={scrolled ? "outline" : "ghost"}
                  className={!scrolled ? "text-card border-card/30 hover:bg-card/10" : ""}
                >
                  Login
                </Button>
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className={`w-6 h-6 ${scrolled ? 'text-foreground' : 'text-card'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${scrolled ? 'text-foreground' : 'text-card'}`} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pt-4 pb-2 space-y-2"
            >
              {["Home", "About", "Services", "Jobs", "Training", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Video Background Overlay */}
        <div className="absolute inset-0 bg-gradient-overlay z-0"></div>
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <img
            src={heroImage}
            alt="Healthcare professionals"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>

        <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8 text-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                <Badge className="mb-4 bg-card/20 text-card border-card/30 backdrop-blur-sm">
                  🇩🇪 Germany's Leading Nurse Recruitment Platform
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Your Nursing
                <br />
                <span className="text-secondary">Career in</span>
                <br />
                Germany Awaits
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-card/90 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Join <span className="font-bold text-secondary">5,000+</span> nurses who found their dream healthcare careers through employer-sponsored training and job placement.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link to="/register">
                  <Button 
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 text-lg px-8 shadow-coral hover:shadow-xl hover:scale-105 transition-all group"
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-card/10 border-card/30 text-card hover:bg-card/20 text-lg px-8 backdrop-blur-sm group"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Story
                </Button>
              </motion.div>

              <motion.div 
                className="flex flex-wrap items-center gap-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-card/90 font-medium">Free Language Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span className="text-card/90 font-medium">Visa Support</span>
                </div>
                <motion.div 
                  className="flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <QrCode className="w-5 h-5 text-secondary animate-pulse" />
                  <span className="text-card/90 font-medium">Scan for App</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Nursing professionals in Germany"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                
                {/* Floating Stats Cards */}
                <motion.div
                  className="absolute top-8 right-8 bg-card rounded-xl p-4 shadow-xl backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">5000+</p>
                      <p className="text-sm text-muted-foreground">Success Stories</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-card rounded-xl p-4 shadow-xl backdrop-blur-sm"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-coral rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">98%</p>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-card rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Who We Are"
            title="About Sehat Meyer"
            description="Leading the way in healthcare recruitment and professional development across Germany"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { 
                icon: Target, 
                title: "Our Mission", 
                desc: "To connect talented healthcare professionals with world-class opportunities while maintaining the highest standards of care and ethical practice.",
                color: "primary"
              },
              { 
                icon: Eye, 
                title: "Our Vision", 
                desc: "Creating a future where healthcare professionals thrive in fulfilling careers that make a meaningful difference in patients' lives.",
                color: "secondary"
              },
              { 
                icon: Sparkles, 
                title: "Our Values", 
                desc: "Integrity, Excellence, Compassion, Innovation, and Commitment to continuous improvement in healthcare recruitment.",
                color: "primary"
              }
            ].map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <Card className="p-8 h-full hover:shadow-healthcare transition-all duration-300 group cursor-pointer border-0 bg-gradient-card">
                  <motion.div 
                    className={`w-16 h-16 ${item.color === 'primary' ? 'bg-gradient-hero' : 'bg-gradient-coral'} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-8 h-8 text-card" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection id="services" className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="What We Offer"
            title="Our Services"
            description="Comprehensive support throughout your healthcare career journey"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Briefcase, title: "Job Placement", desc: "Personalized matching with top German hospitals", color: "primary" },
              { icon: GraduationCap, title: "Language Training", desc: "B1/B2 German courses with certified instructors", color: "secondary" },
              { icon: Globe, title: "Visa Assistance", desc: "Complete immigration and documentation support", color: "primary" },
              { icon: Heart, title: "Onboarding", desc: "Continuous guidance throughout your career", color: "secondary" },
              { icon: FileCheck, title: "Recognition", desc: "Credential evaluation and certification", color: "primary" },
              { icon: Clock, title: "Fast Process", desc: "Average placement in 3-6 months", color: "secondary" },
              { icon: Shield, title: "Secure", desc: "ISO certified recruitment standards", color: "primary" },
              { icon: TrendingUp, title: "Career Growth", desc: "Ongoing professional development", color: "secondary" }
            ].map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2 border-0 bg-card">
                  <motion.div 
                    className={`w-14 h-14 ${service.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className={`w-7 h-7 ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Jobs/Hospitals Section */}
      <AnimatedSection id="jobs" className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Partner Hospitals"
            title="Available Opportunities"
            description="Explore positions at leading healthcare facilities across Germany"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { name: "Charité Berlin", location: "Berlin", specialty: "General Nursing", positions: 15 },
              { name: "University Hospital Munich", location: "Munich", specialty: "ICU & Emergency", positions: 8 },
              { name: "Hamburg Medical Center", location: "Hamburg", specialty: "Pediatrics", positions: 12 },
              { name: "Frankfurt Clinic", location: "Frankfurt", specialty: "Surgery", positions: 10 },
              { name: "Cologne General Hospital", location: "Cologne", specialty: "Geriatrics", positions: 6 },
              { name: "Stuttgart Medical", location: "Stuttgart", specialty: "Oncology", positions: 9 }
            ].map((hospital, index) => (
              <AnimatedCard key={index} delay={index * 0.15}>
                <Card className="p-6 hover:shadow-healthcare transition-all duration-300 group cursor-pointer hover:-translate-y-1 border-0 bg-gradient-card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-card" />
                    </div>
                    <Badge className="bg-secondary/10 text-secondary border-0">
                      {hospital.positions} positions
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{hospital.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <MapPinned className="w-4 h-4" />
                    <span className="text-sm">{hospital.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{hospital.specialty}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      Apply Now
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Training Dashboard Section */}
      <AnimatedSection id="training" className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Language Training"
            title="Your Learning Journey"
            description="Track your progress through our comprehensive German language program"
          />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-16 items-center">
            <AnimatedCard>
              <Card className="p-8 border-0 bg-card shadow-xl">
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-bold text-foreground">German B1 Course</h3>
                      <span className="text-2xl font-bold text-primary">75%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-hero"
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">12 of 16 modules completed</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-bold text-foreground">Medical Terminology</h3>
                      <span className="text-2xl font-bold text-secondary">60%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-coral"
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">9 of 15 lessons completed</p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Next Lesson</p>
                        <p className="font-bold text-foreground">Grammar: Past Tense</p>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">
                        Continue
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="space-y-6">
                {[
                  { title: "Interactive Lessons", desc: "Engaging video content with native speakers", icon: Video },
                  { title: "Live Classes", desc: "Weekly sessions with certified instructors", icon: Users },
                  { title: "Practice Tests", desc: "Regular assessments to track progress", icon: FileCheck },
                  { title: "Certification", desc: "Official B1/B2 certificate upon completion", icon: Award }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Success Stories Section */}
      <AnimatedSection id="stories" className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Testimonials"
            title="Success Stories"
            description="Hear from nurses who transformed their careers with Sehat Meyer"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { 
                name: "Priya Sharma", 
                role: "Registered Nurse, Berlin", 
                country: "🇮🇳 India",
                quote: "Sehat Meyer made my dream of working in Germany a reality. The language training was excellent, and they supported me every step of the way!",
                rating: 5
              },
              { 
                name: "Maria Rodriguez", 
                role: "ICU Nurse, Munich", 
                country: "🇵🇭 Philippines",
                quote: "From visa processing to finding the perfect hospital, everything was handled professionally. I'm now thriving in my career here.",
                rating: 5
              },
              { 
                name: "Ahmed Hassan", 
                role: "Healthcare Assistant, Hamburg", 
                country: "🇪🇬 Egypt",
                quote: "The support didn't end after placement. They continue to check in and help with integration. Truly a comprehensive service!",
                rating: 5
              }
            ].map((story, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <Card className="p-8 h-full hover:shadow-healthcare transition-all duration-300 border-0 bg-gradient-card">
                  <div className="flex gap-1 mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground italic mb-6 leading-relaxed">"{story.quote}"</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-14 h-14 bg-gradient-hero rounded-full flex items-center justify-center text-card font-bold text-lg">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{story.name}</p>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">{story.country}</p>
                    </div>
                  </div>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Awards & Stats Section */}
      <AnimatedSection id="awards" className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Our Impact"
            title="Awards & Achievements"
            description="Recognized for excellence in international healthcare recruitment"
          />
          
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "5000+", label: "Successful Placements", icon: Users },
              { number: "98%", label: "Satisfaction Rate", icon: Star },
              { number: "50+", label: "Partner Hospitals", icon: Building2 },
              { number: "15+", label: "Years Experience", icon: Award }
            ].map((stat, index) => (
              <AnimatedCard key={index} delay={index * 0.15}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 bg-gradient-teal-coral rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-healthcare">
                    <stat.icon className="w-12 h-12 text-card" />
                  </div>
                  <motion.p 
                    className="text-5xl font-bold mb-3 bg-gradient-teal-coral bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Get in Touch"
            title="Contact Us"
            description="Ready to start your nursing career in Germany? We're here to help"
          />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <AnimatedCard>
              <div className="space-y-8">
                {[
                  { 
                    icon: MapPin, 
                    title: "Visit Us", 
                    content: "Friedrichstraße 123, 10117 Berlin, Germany",
                    color: "primary"
                  },
                  { 
                    icon: Phone, 
                    title: "Call Us", 
                    content: "+49 30 1234 5678",
                    color: "secondary"
                  },
                  { 
                    icon: Mail, 
                    title: "Email Us", 
                    content: "contact@sehatmeyer.de",
                    color: "primary"
                  },
                  { 
                    icon: Clock, 
                    title: "Working Hours", 
                    content: "Mon-Fri: 9:00 AM - 6:00 PM CET",
                    color: "secondary"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-14 h-14 ${item.color === 'primary' ? 'bg-gradient-hero' : 'bg-gradient-coral'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-7 h-7 text-card" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </motion.div>
                ))}

                <div className="pt-6">
                  <h3 className="font-bold text-foreground mb-4 text-lg">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, color: "hover:bg-blue-500" },
                      { icon: Twitter, color: "hover:bg-blue-400" },
                      { icon: Instagram, color: "hover:bg-pink-500" },
                      { icon: Linkedin, color: "hover:bg-blue-600" }
                    ].map((social, i) => (
                      <motion.button
                        key={i}
                        className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center transition-all hover:text-card ${social.color}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="p-8 border-0 bg-gradient-card shadow-xl">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                      <Input placeholder="John" className="bg-card" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                      <Input placeholder="Doe" className="bg-card" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="john.doe@example.com" className="bg-card" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                    <Input type="tel" placeholder="+49 123 456 789" className="bg-card" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us about your career goals..." 
                      rows={5}
                      className="bg-card resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-teal-coral hover:shadow-xl transition-all group"
                  >
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-foreground text-card py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-card" fill="currentColor" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Sehat Meyer</h3>
                  <p className="text-xs text-card/70">Nursing Careers Germany</p>
                </div>
              </div>
              <p className="text-sm text-card/70 leading-relaxed">
                Connecting international nurses with world-class healthcare opportunities in Germany.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-card/70">
                {["About Us", "Services", "Job Listings", "Training", "Contact"].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-card transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">For Candidates</h4>
              <ul className="space-y-2 text-sm text-card/70">
                {["Register Now", "Login", "FAQs", "Success Stories", "Resources"].map(link => (
                  <li key={link}>
                    <a href="#" className="hover:text-card transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">For Hospitals</h4>
              <ul className="space-y-2 text-sm text-card/70">
                {["Partner With Us", "Post a Job", "Hospital Login", "Pricing", "Support"].map(link => (
                  <li key={link}>
                    <a href="#" className="hover:text-card transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-card/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-card/70">
                © 2025 Sehat Meyer. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-card/70">
                <a href="#" className="hover:text-card transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-card transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-card transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Reusable Components
const SectionHeader = ({ badge, title, description }: { badge: string; title: string; description: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      className="text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
        {badge}
      </Badge>
      <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{title}</h2>
      <p className="text-xl text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const AnimatedSection = ({ id, className, children }: { id: string; className: string; children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Welcome;