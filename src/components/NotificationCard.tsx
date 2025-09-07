import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bell, CheckCircle } from "lucide-react";

const NotificationCard = () => {
  const notifications = [
    {
      id: 1,
      title: "Registration Submitted",
      message: "Your profile is under review. You will be notified once approved.",
      type: "info",
      timestamp: "2 hours ago",
      read: false
    }
  ];

  return (
    <Card className="shadow-healthcare bg-gradient-card border-0">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg text-foreground flex items-center gap-2">
          <Bell className="w-5 h-5 text-primary" />
          Notifications
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div 
              key={notification.id}
              className={`p-4 rounded-lg border ${
                notification.read 
                  ? 'bg-muted/20 border-border' 
                  : 'bg-primary/5 border-primary/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground mb-1">
                    {notification.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {notification.message}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {notification.timestamp}
                  </p>
                </div>
                
                {!notification.read && (
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;