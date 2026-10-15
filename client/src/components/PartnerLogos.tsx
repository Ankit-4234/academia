import { partners } from "../data/partners";
import Img from "./Img";
import ScrollReveal from "./ScrollReveal";

export default function PartnerLogos() {
  return (
    <ScrollReveal>
      <ul className="partner-grid">
        {partners.map((partner) => (
          <li key={partner.name}>
            <a
              className="partner"
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.name} (opens in a new tab)`}
            >
              <Img image={partner.logo} />
            </a>
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}
