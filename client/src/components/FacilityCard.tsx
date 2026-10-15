import {
  Briefcase,
  Coffee,
  FlaskConical,
  Library,
  Monitor,
  Trophy,
  Users,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { Facility } from "../types";

const icons: Record<Facility["icon"], LucideIcon> = {
  monitor: Monitor,
  library: Library,
  trophy: Trophy,
  coffee: Coffee,
  wifi: Wifi,
  users: Users,
  flask: FlaskConical,
  briefcase: Briefcase,
};

export default function FacilityCard({ facility }: { facility: Facility }) {
  const Icon = icons[facility.icon];
  return (
    <article className="facility-card">
      <span className="facility-card__icon">
        <Icon size={24} aria-hidden="true" />
      </span>
      <h3>{facility.title}</h3>
      <p>{facility.text}</p>
    </article>
  );
}
