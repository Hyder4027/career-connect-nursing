//

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Globe, Users, Shield, QrCode } from "lucide-react";
import heroImage from "@/assets/hero-handshake.jpg";
import { LanguageSelector } from "@/components/LanguageSelector";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Sehat Meyer</h1>
            <p className="text-xs text-muted-foreground">
              Nursing Careers Germany
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSelector />
         <Link
  to="/register"
  onClick={() => localStorage.removeItem("registerFormData")}
>
  <Button variant="hero" size="lg">Register</Button>
</Link>

          <Link to="/login">
            <Button variant="soft" size="lg">
              Login
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-8xl font-bold text-foreground leading-tight">
                Welcome!
                <br />
                <span className="text-primary">Start your career</span>
                <br />
                journey with us.
              </h2>
              <p className="text-xl text-muted-foreground max-w-md">
                Your journey to a nursing career in Germany starts here.
              </p>
            </div>

            {/* Social Login Options */}
            {/* <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-border"></div>
                <span className="text-sm text-muted-foreground">Or continue with</span>
                <div className="flex-1 h-px bg-border"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button variant="social" className="justify-center gap-2">
                  <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5" />
                  Google
                </Button>
                <Button variant="social" className="justify-center gap-2">
                  <div className="w-5 h-5 bg-blue-600 text-white rounded text-xs flex items-center justify-center font-bold">f</div>
                  Facebook
                </Button>
                <Button variant="social" className="justify-center gap-2">
                  <div className="w-5 h-5 bg-black text-white rounded text-xs flex items-center justify-center font-bold"></div>
                  Apple
                </Button>
              </div>
            </div> 



            {/* ✅ QR Code Icon with Text */}
            <div className="flex items-center gap-4 pt-6">
              <QrCode className="w-16 h-16 text-primary" />
              <p className="text-base text-muted-foreground">
                Scan to download our app on <br />
                <span>Play Store</span> and <span>App Store</span>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5" />
                <span className="text-sm">1000+ Success Stories</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Secure & Trusted</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-healthcare">
              <img
                src={heroImage}
                alt="Nurse and employer handshake representing trust and career opportunities"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-glow">
              <Globe className="w-8 h-8 text-accent-foreground" />
            </div> */}
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="container mx-auto px-4 py-8 mt-16">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-foreground transition-smooth">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-foreground transition-smooth">
              Privacy Policy
            </Link>
          </div>
          <p>&copy; 2024 CareConnect. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Welcome;
