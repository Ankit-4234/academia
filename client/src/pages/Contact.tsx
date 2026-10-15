import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "../components/forms/ContactForm";
import PageHeader from "../components/PageHeader";
import Seo, { pageTitle } from "../components/Seo";
import SmartLink from "../components/SmartLink";
import SocialLinks from "../components/SocialLinks";
import { site } from "../data/site";

export default function Contact() {
  return (
    <>
      <Seo
        title={pageTitle("Contact Us")}
        description="Contact Academia International College at Gwarko Chowk, Lalitpur: phone, email, WhatsApp and a contact form."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title="Contact Us"
        subtitle="We would love to hear from you."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section">
        <div className="container two-col two-col--info">
          <div className="side-card">
            <h2>Get in touch</h2>
            <address className="contact-list">
              <p>
                <MapPin size={18} aria-hidden="true" />
                <span>{site.address}</span>
              </p>
              <p>
                <Phone size={18} aria-hidden="true" />
                <span>
                  <a href={site.phoneHref}>{site.phones[0]}</a>, {site.phones.slice(1).join(", ")}
                </span>
              </p>
              <p>
                <Mail size={18} aria-hidden="true" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p>
                <MessageCircle size={18} aria-hidden="true" />
                <SmartLink href={site.whatsappUrl}>Chat on WhatsApp</SmartLink>
              </p>
            </address>
            <h3>Follow us</h3>
            <SocialLinks />
          </div>

          <div>
            <h2>Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="map-title">
        <div className="container">
          <h2 id="map-title">Find us</h2>
          <div className="map">
            <iframe
              title="Map showing Academia International College in Gwarko, Lalitpur"
              src={site.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p>
            <SmartLink href={site.mapLink} className="text-link">
              Open in Google Maps
            </SmartLink>
          </p>
        </div>
      </section>
    </>
  );
}
