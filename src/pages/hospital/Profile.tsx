import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Lock, 
  Upload,
  ArrowLeft,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const profileSchema = z.object({
  hospitalName: z.string().min(1, 'Hospital name is required'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(1, 'Address is required'),
  website: z.string().optional(),
  description: z.string().optional(),
});

const passwordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
      'Password must contain uppercase, lowercase, digit and special character'),
  confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ProfileData = z.infer<typeof profileSchema>;
type PasswordData = z.infer<typeof passwordSchema>;

const Profile = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isProfileSaving, setIsProfileSaving] = useState(false);
  const [isPasswordSaving, setIsPasswordSaving] = useState(false);
  const { toast } = useToast();

  const profileForm = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      hospitalName: 'City General Hospital',
      phone: '+1-555-0123',
      address: '123 Healthcare Ave, Medical District, NY 10001',
      website: 'https://citygeneral.com',
      description: 'A leading healthcare institution providing comprehensive medical services to the community for over 50 years.'
    }
  });

  const passwordForm = useForm<PasswordData>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  });

  const onProfileSubmit = async (data: ProfileData) => {
    setIsProfileSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProfileSaving(false);
      toast({
        title: "Profile Updated Successfully",
        description: "Your hospital profile has been updated.",
      });
    }, 1500);
  };

  const onPasswordSubmit = async (data: PasswordData) => {
    setIsPasswordSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsPasswordSaving(false);
      toast({
        title: "Password Changed Successfully",
        description: "Your password has been updated.",
      });
      passwordForm.reset();
    }, 1500);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "Document Uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/hospital/dashboard">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-hospital rounded-full flex items-center justify-center mr-3">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-primary">Hospital Profile & Settings</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile Information</TabsTrigger>
            <TabsTrigger value="documents">Verification Documents</TabsTrigger>
            <TabsTrigger value="security">Security Settings</TabsTrigger>
          </TabsList>

          {/* Profile Information Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Hospital Profile Information</CardTitle>
                <CardDescription>
                  Update your hospital's information that will be displayed to candidates
                </CardDescription>
              </CardHeader>
              
              <Form {...profileForm}>
                <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                  <CardContent className="space-y-6">
                    {/* Non-editable email field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input 
                          value="hospital@demo.com" 
                          disabled 
                          className="pl-10 bg-muted/50" 
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Email address cannot be changed. Contact support if needed.
                      </p>
                    </div>

                    <FormField
                      control={profileForm.control}
                      name="hospitalName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hospital Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <Input placeholder="Enter hospital name" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={profileForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <Input placeholder="Phone number" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={profileForm.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hospital Address</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
                              <Textarea 
                                placeholder="Complete hospital address" 
                                className="pl-10 resize-none" 
                                rows={3} 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={profileForm.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourhospital.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={profileForm.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hospital Description (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Brief description of your hospital, services, and values..." 
                              className="resize-none" 
                              rows={4} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>

                  <div className="flex justify-end p-6 bg-muted/30 border-t">
                    <Button 
                      type="submit" 
                      className="bg-gradient-hospital hover:opacity-90"
                      disabled={isProfileSaving}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {isProfileSaving ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </div>
                </form>
              </Form>
            </Card>
          </TabsContent>

          {/* Verification Documents Tab */}
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Verification Documents</CardTitle>
                <CardDescription>
                  Upload and manage your hospital's verification documents
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Document Upload Sections */}
                  {[
                    { title: 'Hospital License', description: 'Current operating license' },
                    { title: 'Accreditation Certificate', description: 'JCI, NABH or other accreditation' },
                    { title: 'Registration Certificate', description: 'Government registration document' },
                    { title: 'Tax Registration', description: 'Tax identification documents' }
                  ].map((doc, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div>
                        <h4 className="font-medium">{doc.title}</h4>
                        <p className="text-sm text-muted-foreground">{doc.description}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="file"
                          id={`upload-${index}`}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileUpload}
                        />
                        <label htmlFor={`upload-${index}`}>
                          <Button variant="outline" size="sm" asChild>
                            <span className="cursor-pointer">
                              <Upload className="w-4 h-4 mr-2" />
                              Upload
                            </span>
                          </Button>
                        </label>
                        
                        {/* Mock existing file */}
                        {index === 0 && (
                          <div className="flex items-center text-sm text-green-600">
                            <span>hospital_license.pdf</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Document Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Documents must be clear and legible</li>
                    <li>• Accepted formats: PDF, JPG, PNG (max 10MB each)</li>
                    <li>• All documents should be current and valid</li>
                    <li>• Processing time: 2-3 business days after upload</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings Tab */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Change your password and manage security preferences
                </CardDescription>
              </CardHeader>
              
              <Form {...passwordForm}>
                <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-6">
                  <CardContent className="space-y-6">
                    <FormField
                      control={passwordForm.control}
                      name="currentPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <Input 
                                type={showCurrentPassword ? "text" : "password"} 
                                placeholder="Enter current password" 
                                className="pl-10 pr-10" 
                                {...field} 
                              />
                              <button
                                type="button"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                              >
                                {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={passwordForm.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <Input 
                                type={showNewPassword ? "text" : "password"} 
                                placeholder="Enter new password" 
                                className="pl-10 pr-10" 
                                {...field} 
                              />
                              <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                              >
                                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={passwordForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm New Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <Input 
                                type={showConfirmPassword ? "text" : "password"} 
                                placeholder="Confirm new password" 
                                className="pl-10 pr-10" 
                                {...field} 
                              />
                              <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                              >
                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Password Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• At least 8 characters long</li>
                        <li>• Contains uppercase and lowercase letters</li>
                        <li>• Contains at least one number</li>
                        <li>• Contains at least one special character (@$!%*?&)</li>
                      </ul>
                    </div>
                  </CardContent>

                  <div className="flex justify-end p-6 bg-muted/30 border-t">
                    <Button 
                      type="submit" 
                      className="bg-gradient-hospital hover:opacity-90"
                      disabled={isPasswordSaving}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {isPasswordSaving ? 'Updating...' : 'Update Password'}
                    </Button>
                  </div>
                </form>
              </Form>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;