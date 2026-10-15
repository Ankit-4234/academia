import { useEffect } from "react";
import { site } from "../data/site";

interface SeoProps {
  /** Full page title. Use `pageTitle()` for inner pages. */
  title: string;
  description: string;
  path?: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
}

export function pageTitle(name: string): string {
  return `${name} | ${site.name}`;
}

function setMeta(attr: "name" | "property", key: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(href: string): void {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function setJsonLd(data?: Record<string, unknown>): void {
  const id = "page-json-ld";
  const existing = document.getElementById(id);
  if (!data) {
    existing?.remove();
    return;
  }
  const script = existing ?? document.createElement("script");
  script.id = id;
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(script);
}

export default function Seo({ title, description, path = "", image, jsonLd }: SeoProps) {
  useEffect(() => {
    const baseUrl = (import.meta.env.VITE_SITE_URL as string | undefined) || window.location.origin;
    const url = `${baseUrl.replace(/\/+$/, "")}${path}`;
    const imageUrl = image ?? `${site.website}/img/og-image.jpg`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", site.name);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setCanonical(url);
    setJsonLd(jsonLd);

    return () => setJsonLd(undefined);
  }, [title, description, path, image, jsonLd]);

  return null;
}
