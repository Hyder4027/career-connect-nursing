import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Shield, Mail, Phone, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const RegisterStep2 = () => {
  const navigate = useNavigate();
  const [verificationMethod, setVerificationMethod] = useState<'email' | 'sms'>('email');
  const [otpCode, setOtpCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleVerification = () => {
    // Simulate verification
    if (otpCode.length === 6) {
      setIsVerified(true);
      setTimeout(() => {
        navigate("/register/step3");
      }, 2000);
    }
  };

  const handleResendCode = () => {
    setCountdown(60);
    setCanResend(false);
    // Resend logic would go here
  };

  if (isVerified) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-8">
        <Card className="shadow-healthcare bg-gradient-card border-0 w-full max-w-md text-center">
          <CardContent className="pt-16 pb-16">
            <div className="mx-auto w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Verification Successful!</h2>
            <p className="text-muted-foreground mb-6">
              Your account has been verified successfully. Redirecting to profile setup...
            </p>
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-semibold text-sm">✓</div>
              <span className="text-sm text-muted-foreground">Personal Details</span>
            </div>
            <div className="w-12 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">2</div>
              <span className="text-sm font-medium text-primary">Verification</span>
            </div>
            <div className="w-12 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center font-semibold text-sm">3</div>
              <span className="text-sm text-muted-foreground">Profile Setup</span>
            </div>
          </div>
        </div>

        <Card className="shadow-healthcare bg-gradient-card border-0">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Verify Your Account</CardTitle>
            <CardDescription>
              We've sent a verification code to secure your account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
  {/* Verification Method Selection */}
  <div className="space-y-4">
    <Label>Choose verification method:</Label>
    <div className="flex justify-center">
      <div
        className={`p-4 rounded-lg border-2 cursor-pointer transition-smooth ${
          verificationMethod === 'email'
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50'
        }`}
        onClick={() => setVerificationMethod('email')}
      >
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-primary" />
          <div>
            <p className="font-medium">Email Verification</p>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
{/* </CardContent> */}

            {/* OTP Input */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">
                  Enter 6-digit verification code
                </Label>
                <div className="flex gap-2 justify-center">
                  {[...Array(6)].map((_, index) => (
                    <Input
                      key={index}
                      type="text"
                      maxLength={1}
                      className="w-12 h-12 text-center text-lg font-bold"
                      value={otpCode[index] || ''}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value.match(/^[0-9]*$/)) {
                          const newOtp = otpCode.split('');
                          newOtp[index] = value;
                          setOtpCode(newOtp.join(''));
                          
                          // Auto-focus next input
                          if (value && index < 5) {
                            const nextInput = (e.target as HTMLInputElement).parentElement?.children[index + 1] as HTMLInputElement;
                            nextInput?.focus();
                          }
                        }
                      }}
                      onKeyDown={(e) => {
                        // Handle backspace
                        if (e.key === 'Backspace' && !otpCode[index] && index > 0) {
                          const prevInput = (e.target as HTMLInputElement).parentElement?.children[index - 1] as HTMLInputElement;
                          prevInput?.focus();
                        }
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center">
                {canResend ? (
                  <Button 
                    variant="link" 
                    onClick={handleResendCode}
                    className="text-primary"
                  >
                    Resend verification code
                  </Button>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Resend code in {countdown}s
                  </p>
                )}
              </div>
            </div>

            {/* Security Note */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex gap-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Security Notice</p>
                  <p className="text-muted-foreground">
                    This verification step helps us ensure the security of your account and prevent unauthorized access.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6">
              <Link to="/register/step1">
                <Button variant="soft" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              </Link>
              <Button 
                onClick={handleVerification} 
                variant="hero" 
                className="gap-2"
                disabled={otpCode.length !== 6}
              >
                Verify & Continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterStep2;