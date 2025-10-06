import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Stethoscope, Users, Award, Phone, Mail, MapPin, Clock, CheckCircle, Star, Play, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-handshake.jpg";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useEffect, useRef, useState } from "react";

const Welcome = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Sehat Meyer</h1>
              <p className="text-xs text-muted-foreground">Healthcare Excellence</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="#hero" className="text-foreground hover:text-primary transition-smooth">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
            <a href="#stories" className="text-foreground hover:text-primary transition-smooth">Stories</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <Link to="/register" onClick={() => localStorage.removeItem("registerFormData")}>
              <Button variant="default" size="sm" className="hidden sm:inline-flex">Register</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center bg-gradient-subtle">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-700 ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Welcome to
                <br />
                <span className="text-primary">Excellence in</span>
                <br />
                Healthcare
              </h2>
              <p className="text-xl text-muted-foreground max-w-xl">
                Your journey to a nursing career in Germany starts here. Join thousands of healthcare professionals who found their dream opportunity with us.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                    Get Started
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="gap-2">
                  <Play className="w-5 h-5" />
                  Watch Video
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">5000+ Success Stories</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">ISO Certified</span>
                </div>
              </div>
            </div>
            <div className={`relative transition-all duration-700 delay-300 ${isVisible('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative overflow-hidden rounded-2xl shadow-healthcare">
                <img
                  src={heroImage}
                  alt="Healthcare professionals collaborating"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">About Sehat Meyer</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the way in healthcare recruitment and professional development across Germany
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Our Mission", desc: "To connect talented healthcare professionals with world-class opportunities while maintaining the highest standards of care and ethical practice." },
              { icon: Users, title: "Our Vision", desc: "Creating a future where healthcare professionals thrive in fulfilling careers that make a meaningful difference in patients' lives." },
              { icon: Award, title: "Our Values", desc: "Integrity, Excellence, Compassion, Innovation, and Commitment to continuous improvement in healthcare recruitment." }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-card p-8 rounded-xl shadow-soft hover:shadow-healthcare transition-all duration-700 delay-${index * 100} ${isVisible('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support throughout your healthcare career journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Career Placement", desc: "Personalized job matching with leading hospitals" },
              { icon: Users, title: "Training Programs", desc: "Language and professional development courses" },
              { icon: CheckCircle, title: "Visa Assistance", desc: "Complete support for immigration process" },
              { icon: Heart, title: "Ongoing Support", desc: "Continuous guidance throughout your career" },
              { icon: Award, title: "Certification", desc: "Recognition validation and processing" },
              { icon: Clock, title: "Quick Processing", desc: "Efficient application and approval process" },
              { icon: Phone, title: "24/7 Support", desc: "Always available to assist you" },
              { icon: Star, title: "Quality Assurance", desc: "ISO certified recruitment standards" }
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-card p-6 rounded-xl shadow-soft hover:shadow-healthcare transition-all duration-700 delay-${index * 75} ${isVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video & Media Section */}
      <section id="media" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible('media') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">See Us in Action</h2>
            <p className="text-xl text-muted-foreground">Watch our story and explore our facilities</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className={`transition-all duration-700 ${isVisible('media') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative aspect-video bg-muted rounded-xl overflow-hidden shadow-healthcare group cursor-pointer">
                <img src={heroImage} alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                  <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-primary ml-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className={`grid grid-cols-2 gap-4 transition-all duration-700 ${isVisible('media') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-xl overflow-hidden shadow-soft hover:shadow-healthcare transition-all cursor-pointer group">
                  <img src={heroImage} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="stories" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible('stories') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Hear from professionals who transformed their careers with us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maria Schmidt", role: "Registered Nurse", quote: "Sehat Meyer helped me find my dream position in Berlin. The support throughout the process was exceptional!" },
              { name: "Rajesh Kumar", role: "Healthcare Assistant", quote: "From visa processing to job placement, everything was handled professionally. I'm now thriving in my new role." },
              { name: "Anna Müller", role: "Senior Nurse", quote: "The training programs prepared me perfectly for the German healthcare system. Highly recommended!" }
            ].map((story, index) => (
              <div
                key={index}
                className={`bg-card p-8 rounded-xl shadow-soft hover:shadow-healthcare transition-all duration-700 delay-${index * 100} ${isVisible('stories') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground italic mb-6">"{story.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{story.name}</p>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Achievements Section */}
      <section id="awards" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible('awards') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Awards & Achievements</h2>
            <p className="text-xl text-muted-foreground">Recognition for excellence in healthcare recruitment</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Successful Placements" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "50+", label: "Partner Hospitals" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 delay-${index * 100} ${isVisible('awards') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              >
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Award className="w-10 h-10 text-primary-foreground" />
                </div>
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">We're here to help you start your healthcare career</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`space-y-8 transition-all duration-700 ${isVisible('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">123 Healthcare Street, Berlin, Germany 10115</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+49 30 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@sehatmeyer.de</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-xl overflow-hidden shadow-soft">
                <div className="w-full h-full flex items-center justify-center bg-primary/5">
                  <MapPin className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>
            <form className={`bg-card p-8 rounded-xl shadow-healthcare space-y-6 transition-all duration-700 ${isVisible('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  placeholder="+49 123 456 7890"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
                  placeholder="Tell us about your career goals..."
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Sehat Meyer</h3>
                  <p className="text-xs text-muted-foreground">Healthcare Excellence</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Leading healthcare recruitment agency connecting talented professionals with opportunities in Germany.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">About Us</a></li>
                <li><a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">Services</a></li>
                <li><a href="#stories" className="text-muted-foreground hover:text-primary transition-smooth">Success Stories</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/termsconditions" className="text-muted-foreground hover:text-primary transition-smooth">Terms & Conditions</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Cookie Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">GDPR Compliance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Sehat Meyer. All rights reserved. | Registered in Germany</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
