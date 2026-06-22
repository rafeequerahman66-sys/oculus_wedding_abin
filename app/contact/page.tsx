import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Tell me a little about you and your day. I take a limited number of weddings each year.",
};

export default function ContactPage() {
  return (
    <div className="page">
      <PageHeader script="say hello" title="Get in Touch" />

      <section className="contact">
        <div>
          <p className="contact__intro">
            Tell me a little about you and your day. I take a limited number of
            weddings each year, so do reach out early — I&apos;d love to be part
            of it.
          </p>
          <ContactForm />
        </div>
        <div className="contact__photo">
          <Photo src="/images/yadu-aswathy-3.webp" alt="Get in touch" priority />
        </div>
      </section>

      <section className="contact-band">
        <div className="contact-band__grid">
          <div>
            <div className="contact-band__label">Email</div>
            <a className="contact-band__value" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div>
            <div className="contact-band__label">Call</div>
            <a className="contact-band__value" href={site.phoneHref}>
              {site.phone}
            </a>
          </div>
          <div>
            <div className="contact-band__label">Follow</div>
            <a
              className="contact-band__value"
              href={site.instagramUrl}
              target="_blank"
              rel="noopener"
            >
              {site.instagram}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
