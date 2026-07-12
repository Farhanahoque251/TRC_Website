
"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { contact, site } from "@/lib/constants";
import { cn } from "@/lib/utils";

const fieldClass = "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition";

export function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = () => {
    const subject = encodeURIComponent("VAT consultation request - " + (form.company || form.name || "New enquiry"));
    const body = encodeURIComponent("Name: " + form.name + "\nCompany: " + form.company + "\nEmail: " + form.email + "\n\n" + form.message);
    window.location.href = site.emailHref + "?subject=" + subject + "&body=" + body;
  };

  return (
    <Section id="contact" tone="white">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="eyebrow eyebrow-line">{contact.eyebrow}</span>
          <h2 className="mt-4 text-display-md font-semibold text-navy-900">{contact.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-700/80">{contact.lead}</p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">Email</dt>
              <dd className="mt-1">
                <a href={site.emailHref} className="font-display text-lg font-semibold text-navy-900 hover:text-gold-600">{site.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">Phone</dt>
              <dd className="mt-1">
                <a href={site.phoneHref} className="font-display text-lg font-semibold text-navy-900 hover:text-gold-600">{site.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">Office</dt>
              <dd className="mt-1 text-navy-800">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-navy-100 bg-paper p-8 shadow-soft sm:p-10">
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-800">Full name</label>
                <input id="name" type="text" value={form.name} onChange={update("name")} placeholder="Your name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy-800">Company</label>
                <input id="company" type="text" value={form.company} onChange={update("company")} placeholder="Your organisation" className={fieldClass} />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-800">Email</label>
              <input id="email" type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">How can we help?</label>
              <textarea id="message" rows={4} value={form.message} onChange={update("message")} placeholder="Tell us about your VAT challenge..." className={cn(fieldClass, "resize-none")} />
            </div>
            <Button onClick={handleSubmit} variant="primary" size="lg" className="w-full">Send enquiry</Button>
            <p className="text-center text-xs text-navy-500">This opens your email app with the details ready to send.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
