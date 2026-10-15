import { useEffect } from "react";
import { primaryNav, applyLink } from "../data/navigation";
import Button from "./Button";
import SmartLink from "./SmartLink";

interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  // Lock page scroll while the menu is open; close with Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div id={id}>
      {open && (
        <nav className="mobile-menu" aria-label="Mobile">
          <ul>
            {primaryNav.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <details>
                    <summary>{item.label}</summary>
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SmartLink href={child.href} onClick={onClose}>
                            {child.label}
                          </SmartLink>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <SmartLink href={item.href ?? "/"} className="mobile-menu__link" onClick={onClose}>
                    {item.label}
                  </SmartLink>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile-menu__cta" onClick={onClose}>
            <Button href={applyLink.href}>{applyLink.label}</Button>
          </div>
        </nav>
      )}
    </div>
  );
}
