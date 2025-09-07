<<<<<<< HEAD
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import JobProcessTracker from "@/components/JobProcessTracker";
import NotificationCard from "@/components/NotificationCard";
import BottomNav from "@/components/BottomNav";
=======
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import JobProcessTracker from "../components/JobProcessTracker";
import NotificationCard from "../components/NotificationCard";
import BottomNav from "../components/BottomNav";
>>>>>>> 401d692 (Added Dashboard)

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-20 md:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile & Notifications */}
          <div className="lg:col-span-1 space-y-6">
            <ProfileCard />
            <NotificationCard />
          </div>
          
          {/* Right Column - Job Process Tracker */}
          <div className="lg:col-span-2">
            <JobProcessTracker />
          </div>
        </div>
      </main>
      
      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Dashboard;