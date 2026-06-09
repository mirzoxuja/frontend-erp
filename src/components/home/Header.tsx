import Icon from "../ui/Icon";
import ProfileDropdown from "../ui/ProfileDropdown";
import useUserStore from "../../store/user.store";
import { navLinks } from "../../data/home.data";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isAuthenticated = useUserStore((state: any) => state.isAuthenticated);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Icon.logo className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold text-slate-900">O'quv Markaz</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? "text-blue-500" : "text-slate-600 hover:text-slate-900"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden items-center gap-1.5 text-sm font-medium text-slate-600 transition hover:text-slate-900 sm:flex">
            <Icon.layers className="h-4 w-4" />
            O'zbek
            <Icon.chevronDown className="h-4 w-4" />
          </button>
          {isAuthenticated ? (
            <ProfileDropdown />
          ) : (
            <>
              <a
                href="/login"
                className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-900 sm:block"
              >
                Kirish
              </a>
              <a
                href="/register"
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
              >
                Ro'yxatdan o'tish
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
