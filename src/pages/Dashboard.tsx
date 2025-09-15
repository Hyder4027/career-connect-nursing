import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import JobProcessTracker from "../components/JobProcessTracker";
import NotificationCard from "../components/NotificationCard";
import BottomNav from "../components/BottomNav";

type UserData = {
    name: string;
    email: string;
    contact: string;
    qualification: string;
    experience: string;
    careerField: string;
    status: string;
};

const Dashboard = () => {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        const savedData = localStorage.getItem("registerFormData");
        if (savedData) {
            const parsed = JSON.parse(savedData);

            setUserData({
                name: `${parsed.firstName} ${parsed.lastName}`,
                email: parsed.email,
                contact: parsed.phone,
                qualification: parsed.education,
                experience: parsed.experience,
                careerField: parsed.specializations,
                status: "Pending",
            });
        }
    }, []);

    if (!userData) {
        return <p className="text-center mt-10">No user data found. Please register first.</p>;
    }

    return (
        <div className="min-h-screen bg-gradient-subtle">
            <Header />
            <main className="container mx-auto px-4 py-6 pb-20 md:pb-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1 space-y-6">
                        <ProfileCard profileData={userData} />
                        <NotificationCard />
                    </div>
                    <div className="lg:col-span-2">
                        <JobProcessTracker />
                    </div>
                </div>
            </main>
            <BottomNav />
        </div>
    );
};

export default Dashboard;