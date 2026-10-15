interface SectionHeadingProps {
  title: string;
  id?: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  id,
  eyebrow,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className="section-heading__desc">{description}</p>}
    </div>
  );
}
