"use client";

import { useState } from "react";

// Underline-only inputs. Wired to a no-op submit handler that shows a
// confirmation — replace the body with a real form action / API route
// (e.g. POST to /api/enquiry or an email service) in production.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO(production): send to a real handler (server action, /api route, or form service).
    setSent(true);
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div className="contact__row">
        <div className="field">
          <label htmlFor="names">Your names</label>
          <input id="names" name="names" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="datePlace">Wedding date &amp; place</label>
        <input id="datePlace" name="datePlace" type="text" />
      </div>
      <div className="field">
        <label htmlFor="story">Tell me your story</label>
        <textarea id="story" name="story" rows={4} />
      </div>
      <button type="submit" className="contact__submit">
        Send enquiry
      </button>
      {sent ? (
        <p className="contact__status" role="status">
          Thank you — your note is on its way. I&apos;ll be in touch soon.
        </p>
      ) : null}
    </form>
  );
}
