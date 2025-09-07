import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Avatar className="h-16 w-16 border-2 border-primary/20">
              <AvatarImage src="/placeholder.svg" alt="John Doe" />
              <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">JD</AvatarFallback>
            </Avatar>
            
            <div className="text-center sm:text-left">
              <h1 className="text-xl font-semibold text-foreground">John Doe</h1>
              <p className="text-sm text-muted-foreground">Registered Nurse Candidate</p>
              
              {/* Progress Bar */}
              <div className="mt-3 w-full sm:w-64">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-muted-foreground">Profile Progress</span>
                  <span className="text-xs text-primary font-medium">10%</span>
                </div>
                <Progress value={10} className="h-2" />
              </div>
            </div>
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;