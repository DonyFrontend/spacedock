import { LangSelect } from "@/shared/lang/ui/lang-select";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/biblary", label: "Library" },
  { to: "/planetary-science", label: "Planetary" },
  { to: "/lunary-discovery", label: "Lunar" },
  { to: "/heliophysics", label: "Heliophysics" },
  { to: "/biological-physical", label: "Bio & Physical" },
];

const Header = () => {
  return (
    <header className="flex flex-col gap-4 p-4 bg-black border-b border-b-white">
      <div className="flex items-center justify-between">
        <img src="/nasa_logo.svg" alt="NASA Logo" className="h-12" />
        <nav aria-label="Primary" className="hidden md:flex gap-6 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-white/70 hover:text-white ${
                  isActive ? "text-white font-semibold" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <nav
        aria-label="Primary mobile"
        className="flex flex-wrap gap-3 text-sm md:hidden"
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `text-white/70 hover:text-white ${
                isActive ? "text-white font-semibold" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
        <LangSelect />
    </header>
  );
};

export default Header;
