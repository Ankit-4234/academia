import { Mail, MapPin, Phone } from "lucide-react";
import { footerQuickLinks } from "../data/navigation";
import { programs } from "../data/programs";
import { site } from "../data/site";
import Brand from "./Brand";
import NewsletterForm from "./forms/NewsletterForm";
import SmartLink from "./SmartLink";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <Brand />
          <p>
            {site.name} is affiliated with {site.affiliation} and offers B.Sc. CSIT, BCA, BBM, BBS
            and MBS programs in the Kathmandu Valley.
          </p>
          <SocialLinks />
        </div>

        <nav aria-label="Quick links">
          <h2 className="footer__title">Quick Links</h2>
          <ul className="footer__list">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <SmartLink href={link.href}>{link.label}</SmartLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Programs">
          <h2 className="footer__title">Programs</h2>
          <ul className="footer__list">
            {programs.map((program) => (
              <li key={program.slug}>
                <SmartLink href={`/programs/${program.slug}`}>{program.code}</SmartLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Contact</h2>
          <address className="footer__contact">
            <p>
              <MapPin size={16} aria-hidden="true" />
              <span>{site.address}</span>
            </p>
            <p>
              <Phone size={16} aria-hidden="true" />
              <a href={site.phoneHref}>{site.phones.slice(0, 3).join(", ")}</a>
            </p>
            <p>
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </address>
          <h2 className="footer__title footer__title--spaced">Newsletter</h2>
          <NewsletterForm />
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul>
            <li>
              <SmartLink href={site.privacyUrl}>Privacy Policy</SmartLink>
            </li>
            <li>
              <SmartLink href="/terms">Terms</SmartLink>
            </li>
            <li>
              <SmartLink href="/accessibility">Accessibility</SmartLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
