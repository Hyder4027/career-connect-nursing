import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";


const TermsConditions = () => {
  const navigate = useNavigate();
  const [showTerms, setShowTerms] = useState(true);
  const [hasReadTerms, setHasReadTerms] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const confirmTermsAcceptance = () => {
    console.log("Accepted!");
    navigate("/register/step3");

    setShowTerms(false);
  };

  return (
    <>
      {showTerms && (
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
              {/* Scrollable Terms */}
              <ScrollArea className="h-48 w-full border rounded-lg bg-muted/30 mb-4">
                <div
                  className="p-4 space-y-4 text-sm text-muted-foreground pr-4 max-h-48 overflow-y-auto"
                  onScroll={(e) => {
                    const target = e.currentTarget;
                    if (
                      target.scrollTop + target.clientHeight >=
                      target.scrollHeight - 5
                    ) {
                      setHasReadTerms(true);
                    }
                  }}
                >
                  <h4 className="font-semibold text-foreground">
                    CareConnect Terms of Service
                  </h4>
                  <p>
                    1. <strong>Account Registration:</strong> By creating an account,
                    you agree to provide accurate and complete information...
                  </p>
                  <p>
                    2. <strong>Profile Accuracy:</strong> All details submitted in
                    your profile must be truthful and verifiable...
                  </p>
                  <p>
                    3. <strong>Data Protection:</strong> Your personal information
                    will be processed in compliance with GDPR and German laws...
                  </p>
                  <p>
                    4. <strong>Use of Platform:</strong> You must maintain
                    professional conduct when communicating with employers...
                  </p>
                  <p>
                    5. <strong>Service Availability:</strong> We cannot guarantee
                    uninterrupted access due to maintenance or technical issues...
                  </p>
                  <p>
                    6. <strong>Third-Party Employers:</strong> Sehat-Meyer is not
                    responsible for contracts or work conditions provided by third
                    parties...
                  </p>
                  <p>
                    7. <strong>Termination:</strong> We may suspend or terminate your
                    account if you breach these terms...
                  </p>
                  <p>
                    8. <strong>Limitation of Liability:</strong> Sehat-Meyer is not
                    liable for employment outcomes or indirect damages...
                  </p>
                  <p>
                    9. <strong>Amendments:</strong> These Terms & Conditions may be
                    updated. Continued use means acceptance of updates.
                  </p>
                  <p className="italic text-xs text-muted-foreground">
                    Last updated: September 2025
                  </p>
                </div>
              </ScrollArea>

              {/* Checkbox */}
              <div className="flex items-start space-x-2 mb-4">
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  disabled={!hasReadTerms}
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mt-1 cursor-pointer disabled:cursor-not-allowed"
                />
                <Label
                  htmlFor="terms-checkbox"
                  className={`text-sm ${!hasReadTerms ? "opacity-50" : ""}`}
                >
                  I have read all the Terms & Conditions
                </Label>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 justify-center">
                <Button variant="soft" onClick={() => setShowTerms(false)}>
                  Cancel
                </Button>
                <Button
                  variant="hero"
                  onClick={confirmTermsAcceptance}
                  disabled={!isChecked}
                >
                  I Accept
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default TermsConditions;
