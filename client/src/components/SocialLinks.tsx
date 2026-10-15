import { Facebook, Instagram, Linkedin, Youtube, type LucideIcon } from "lucide-react";
import { socials } from "../data/site";
import type { SocialLink } from "../types";

const icons: Record<SocialLink["icon"], LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
};

export default function SocialLinks() {
  return (
    <ul className="social-links">
      {socials.map((social) => {
        const Icon = icons[social.icon];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Academia on ${social.label}`}
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
