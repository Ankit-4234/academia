import { ArrowRight, Building2, GraduationCap, Library, Users, type LucideIcon } from "lucide-react";
import { highlights } from "../data/highlights";
import type { Highlight } from "../types";
import ScrollReveal from "./ScrollReveal";
import SmartLink from "./SmartLink";

const icons: Record<Highlight["icon"], LucideIcon> = {
  building: Building2,
  users: Users,
  library: Library,
  scholarship: GraduationCap,
};

export default function InfoBar() {
  return (
    <section className="info-bar" aria-label="College at a glance">
      <div className="container">
        <ScrollReveal>
          <ul className="info-bar__grid">
            {highlights.map((item) => {
              const Icon = icons[item.icon];
              return (
                <li key={item.id} className="info-card">
                  <Icon className="info-card__icon" size={28} aria-hidden="true" />
                  <h2 className="info-card__title">{item.title}</h2>
                  <p>{item.text}</p>
                  <SmartLink className="info-card__link" href={item.href}>
                    {item.linkLabel}
                    <ArrowRight size={16} aria-hidden="true" />
                  </SmartLink>
                </li>
              );
            })}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
