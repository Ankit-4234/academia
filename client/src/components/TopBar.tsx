import { Lock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "../data/site";
import SocialLinks from "./SocialLinks";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <ul className="topbar__info">
          <li className="topbar__address">
            <MapPin size={14} aria-hidden="true" />
            <span>{site.address}</span>
          </li>
          <li className="topbar__email">
            <a href={`mailto:${site.email}`}>
              <Mail size={14} aria-hidden="true" />
              <span>{site.email}</span>
            </a>
          </li>
          <li className="topbar__phone">
            <a href={site.phoneHref}>
              <Phone size={14} aria-hidden="true" />
              <span>{site.phones[0]}</span>
            </a>
          </li>
        </ul>
        <div className="topbar__right">
          <SocialLinks />
          <a
            className="topbar__login"
            href={site.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lock size={14} aria-hidden="true" />
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
