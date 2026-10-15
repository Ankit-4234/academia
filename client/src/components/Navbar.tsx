import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { applyLink, primaryNav } from "../data/navigation";
import { useScrolled } from "../hooks/useScrolled";
import Brand from "./Brand";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import NavDropdown from "./NavDropdown";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, hash]);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container container--wide navbar__inner">
        <Brand />

        <nav className="nav" aria-label="Primary">
          <ul className="nav__list">
            {primaryNav.map((item) =>
              item.children ? (
                <NavDropdown key={item.label} item={item} />
              ) : (
                <li key={item.label} className="nav__item">
                  <NavLink to={item.href ?? "/"} end={item.href === "/"} className="nav__link">
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />
          <Button href={applyLink.href} className="navbar__apply">
            {applyLink.label}
          </Button>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <MobileMenu id="mobile-menu" open={menuOpen} onClose={closeMenu} />
    </header>
  );
}
