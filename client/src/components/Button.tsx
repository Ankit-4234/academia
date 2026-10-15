import type { ReactNode } from "react";
import SmartLink from "./SmartLink";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

/** Link styled as a button. For real form buttons use <button className="btn btn--primary">. */
export default function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  return (
    <SmartLink href={href} className={`btn btn--${variant} ${className}`.trim()}>
      {children}
    </SmartLink>
  );
}
