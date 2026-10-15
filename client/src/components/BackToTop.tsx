import { ArrowUp } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";

export default function BackToTop() {
  const visible = useScrolled(500);

  return (
    <button
      type="button"
      className={`back-to-top${visible ? " is-visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
