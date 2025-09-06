import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Clock, Mail, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileReview = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">
        <Card className="shadow-healthcare bg-gradient-card border-0 text-center">
          <CardHeader>
            <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="text-2xl text-foreground">Profile Under Review</CardTitle>
            <CardDescription className="text-lg">
              Thank you for completing your registration!
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <p>Our admin team will review your profile and documents within 2-3 business days</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <p>You'll receive an email notification once your profile is approved</p>
                </div>
                {/* <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <p>Start browsing and applying for nursing positions in Germany</p>
                </div> */}
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-4">
              <div className="flex items-center gap-2 text-accent mb-2">
                <Mail className="w-4 h-4" />
                <span className="font-medium text-sm">Important</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Please check your email regularly for updates. Make sure to check your spam folder as well.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Need Help?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>support@careconnect.de</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+49 30 12345678</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/" className="block">
                <Button variant="hero" size="lg" className="w-full gap-2">
                  <Home className="w-4 h-4" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileReview;