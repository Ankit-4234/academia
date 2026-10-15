import type { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface SmartLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
}

/** Internal paths use the router; http(s) links open safely in a new tab. */
export default function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  if (/^https?:\/\//i.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    );
  }

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} {...rest}>
      {children}
    </Link>
  );
}
