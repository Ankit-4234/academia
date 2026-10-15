import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { glimpseStats } from "../data/glimpse";
import { glimpseBackground } from "../data/images";

const tones = ["gold", "sand", "white"] as const;

export default function Glimpse() {
  return (
    <section className="section glimpse" aria-labelledby="glimpse-title">
      <div
        className="glimpse__bg"
        style={{ backgroundImage: `url("${glimpseBackground.src}")` }}
        aria-hidden="true"
      />
      <div className="container">
        <SectionHeading
          id="glimpse-title"
          align="center"
          eyebrow="At a glance"
          title="Academia in Glimpse"
          description="A quick look at Academia International College."
        />
        <ScrollReveal>
          <ul className="hex-grid">
            {glimpseStats.map((stat, index) => (
              <li key={stat.label} className={`hex hex--${tones[index % tones.length]}`}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
