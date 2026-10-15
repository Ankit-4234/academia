import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import type { NavItem } from "../types";
import SmartLink from "./SmartLink";

export default function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const { pathname, hash } = useLocation();

  const active = item.match?.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));

  // Close after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  // Close when clicking elsewhere.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  const onKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === "Escape" && open) {
      setOpen(false);
      ref.current?.querySelector<HTMLButtonElement>("button")?.focus();
    }
  };

  const onBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
  };

  return (
    <li
      ref={ref}
      className={`nav__item${open ? " is-open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    >
      <button
        type="button"
        className={`nav__trigger${active ? " active" : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <ChevronDown size={14} aria-hidden="true" />
      </button>
      <ul className="nav__menu">
        {item.children?.map((child) => (
          <li key={child.href}>
            <SmartLink href={child.href}>{child.label}</SmartLink>
          </li>
        ))}
      </ul>
    </li>
  );
}
