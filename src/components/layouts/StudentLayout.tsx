import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useUserStore from "../../store/user.store";
import { X } from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: "home" },
  { label: "Mening kurslarim", path: "/dashboard/courses", icon: "book" },
  { label: "Kurslar katalogi", path: "/dashboard/catalog", icon: "grid" },
  { label: "Natijalarim", path: "/dashboard/results", icon: "chart" },
  { label: "Sertifikatlarim", path: "/dashboard/certificates", icon: "award" },
];

const accountItems = [
  { label: "Profil", path: "/dashboard/profile", icon: "user" },
  { label: "To'lovlar", path: "/dashboard/payments", icon: "card" },
  { label: "Sozlamalar", path: "/dashboard/settings", icon: "settings" },
];

const SidebarIcon = ({ name, className }: { name: string; className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    home: <path d="M3 12l9-9 9 9M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    book: <path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zm16 0h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z" />,
    chart: <path d="M3 3v18h18M7 16v-5M12 16V8M17 16v-9" />,
    award: <><circle cx="12" cy="8" r="5" /><path d="M8.5 13L7 22l5-3 5 3-1.5-9" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" /></>,
    card: <><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3h0A1.7 1.7 0 0 0 10 3.1V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></>,
    search: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
    menu: <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>,
    logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></>,
  };
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
};

const StudentLayout = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const user = useUserStore((state: any) => state.user);
  const userName = user?.firstName ?? "Bobur Tojiev";

  const userImg = user?.img ?? "https://i.pravatar.cc/64?img=53";

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-64 flex-col bg-white border-r border-slate-200 shrink-0">
        <div className="px-5 py-5">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </span>
            <span className="text-base font-bold text-slate-900">O'quv Markaz</span>
          </a>
        </div>

        <nav className="flex-1 px-3 overflow-y-auto">
          <p className="px-3 mt-3 mb-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
            Online ta'lim
          </p>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition ${
                  isActive ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50"
                }`
              }
            >
              <SidebarIcon name={item.icon} className="h-[18px] w-[18px]" />
              {item.label}
            </NavLink>
          ))}

          <p className="px-3 mt-6 mb-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
            Hisob
          </p>
          {accountItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition ${
                  isActive ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50"
                }`
              }
            >
              <SidebarIcon name={item.icon} className="h-[18px] w-[18px]" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-slate-100 flex items-center gap-3">
          <img src={userImg} alt={userName} className="h-9 w-9 rounded-full object-cover" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800 truncate">{userName}</p>
            <p className="text-xs text-slate-400">Online talaba</p>
          </div>
          <button
            onClick={() => setShowLogoutModal(true)}
            className="text-slate-400 hover:text-slate-600 transition"
          >
            <SidebarIcon name="logout" className="h-[18px] w-[18px]" />
          </button>
        </div>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* TOPBAR */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-6">
          <button className="text-slate-500 lg:hidden">
            <SidebarIcon name="menu" className="h-5 w-5" />
          </button>
          <h1 className="text-base font-semibold text-slate-900 hidden sm:block whitespace-nowrap">
            Online ta'lim
          </h1>

          <div className="flex-1 max-w-md relative">
            <SidebarIcon name="search" className="h-4 w-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Kurs qidirish..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <img src={userImg} alt={userName} className="h-9 w-9 rounded-full object-cover" />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-800">{userName}</p>
              <p className="text-xs text-slate-400">Online talaba</p>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

      {/* Logout confirmation modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">Tizimdan chiqasizmi?</h2>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-5 border-b border-slate-100">
              <p className="text-slate-600">
                Hisobingizdan chiqmoqchimisiz? Davom etish uchun qaytadan login
                va parolingiz bilan tizimga kirishingiz kerak bo'ladi.
              </p>
            </div>

            <div className="px-6 py-4 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="border border-slate-200 rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Bekor qilish
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  setShowLogoutModal(false);
                  navigate("/login");
                }}
                className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-5 py-2.5 text-sm font-semibold"
              >
                Ha, chiqish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentLayout;