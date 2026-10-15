import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}

export default function PageHeader({ title, subtitle, eyebrow, crumbs, children }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="container">
        <Breadcrumbs items={crumbs} />
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
        {children}
      </div>
    </header>
  );
}
