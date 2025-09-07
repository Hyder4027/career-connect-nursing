import { Button } from "@/components/ui/button";
import { Home, User, TrendingUp, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    {
      icon: Home,
      label: "Home",
      path: "/dashboard",
      active: location.pathname === "/dashboard"
    },
    {
      icon: User,
      label: "Profile",
      path: "/profile",
      active: location.pathname === "/profile"
    },
    {
      icon: TrendingUp,
      label: "Progress",
      path: "/progress",
      active: location.pathname === "/progress"
    },
    {
      icon: LogOut,
      label: "Sign Out",
      path: "/login",
      active: false
    }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-healthcare z-50">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          if (item.label === "Sign Out") {
            return (
              <Link key={item.label} to={item.path} className="flex items-center justify-center">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="flex flex-col items-center gap-1 h-full w-full text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              </Link>
            );
          }
          
          return (
            <Link key={item.label} to={item.path} className="flex items-center justify-center">
              <Button 
                variant="ghost" 
                size="sm"
                className={`flex flex-col items-center gap-1 h-full w-full ${
                  item.active 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs">{item.label}</span>
              </Button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;