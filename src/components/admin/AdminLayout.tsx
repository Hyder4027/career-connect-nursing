import { NavLink, Outlet } from "react-router-dom";
import { Building2, Users, LayoutDashboard, Network } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/admin", icon: LayoutDashboard, label: "Overview", end: true },
  { to: "/admin/holding", icon: Network, label: "Holding" },
  { to: "/admin/subsidiaries", icon: Building2, label: "Subsidiaries" },
  { to: "/admin/candidates", icon: Users, label: "Candidates" },
];

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex">
      <aside className="w-64 bg-white border-r shadow-soft hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b">
          <div className="w-9 h-9 rounded-lg bg-gradient-hospital flex items-center justify-center mr-3">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-primary leading-tight">MeidiCare</p>
            <p className="text-xs text-muted-foreground">Admin Console</p>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map(({ to, icon: Icon, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )
              }
            >
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-soft">
          <h1 className="text-lg font-semibold text-primary">Organisation & Recruiting</h1>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-hospital flex items-center justify-center text-white text-sm font-semibold">
              AM
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-x-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;