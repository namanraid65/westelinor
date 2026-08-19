"use client";

import { useState } from "react";
import { MapPin, Send, CheckCircle } from "lucide-react";

const offices = [
  {
    city: "Las Vegas, USA",
    role: "Strategic Sales & Operations",
    iconColor: "text-[var(--color-primary)]",
    bg: "bg-[var(--color-primary)]/10",
    border: "border-[var(--color-primary)]/25",
    hoverBg: "group-hover:bg-[var(--color-primary)]/20",
  },
  {
    city: "New Delhi, India",
    role: "Global Development Center",
    iconColor: "text-[var(--color-secondary)]",
    bg: "bg-[var(--color-secondary)]/10",
    border: "border-[var(--color-secondary)]/25",
    hoverBg: "group-hover:bg-[var(--color-secondary)]/20",
  },
];

const interests = [
  "LMS Platform Development",
  "Enterprise Software",
  "Cloud Migration",
  "Mobile Application",
  "Business Automation",
  "Other",
];

export function ContactSection() {
  const [form, setForm]           = useState({ name: "", email: "", interest: interests[0], message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* ── Left: info ── */}
          <div className="reveal">
            <h2
              className="font-[var(--font-hanken)] font-bold text-[var(--color-on-surface)] leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Let&apos;s Build Something Extraordinary
            </h2>
            <p className="text-[var(--color-on-surface-variant)] text-lg leading-[1.8] mb-12">
              Our global team of engineers and consultants is ready to discuss
              your next breakthrough project.
            </p>

            <div className="flex flex-col gap-7">
              {offices.map((o) => (
                <div key={o.city} className="flex items-center gap-5 group cursor-default">
                  <div className={`w-14 h-14 rounded-full ${o.bg} ${o.border} border ${o.hoverBg} flex items-center justify-center transition-colors shrink-0`}>
                    <MapPin size={20} className={o.iconColor} />
                  </div>
                  <div>
                    <h5 className="font-[var(--font-hanken)] text-base font-semibold text-[var(--color-on-surface)] mb-1">
                      {o.city}
                    </h5>
                    <p className="text-sm text-[var(--color-on-surface-variant)]">{o.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div
            className="glass-card p-8 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden reveal"
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="pointer-events-none absolute -top-24 -right-24 w-56 h-56 bg-[var(--color-primary)]/10 blur-[90px] rounded-full" />

            {submitted ? (
              <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center gap-5">
                <CheckCircle size={60} className="text-[var(--color-primary)]" />
                <h3 className="font-[var(--font-hanken)] text-2xl font-bold text-[var(--color-on-surface)]">
                  Inquiry Sent!
                </h3>
                <p className="text-[var(--color-on-surface-variant)] max-w-xs leading-relaxed">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", interest: interests[0], message: "" }); }}
                  className="mt-2 text-sm font-semibold text-[var(--color-primary)] hover:underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6" noValidate>
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { id: "name",  label: "Full Name",      type: "text",  placeholder: "John Doe",             auto: "name"  },
                    { id: "email", label: "Email Address",  type: "email", placeholder: "john@enterprise.com",  auto: "email" },
                  ].map(({ id, label, type, placeholder, auto }) => (
                    <div key={id} className="flex flex-col gap-2">
                      <label htmlFor={id} className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-on-surface-variant)]">
                        {label}
                      </label>
                      <input
                        id={id} name={id} type={type} required
                        value={(form as Record<string, string>)[id]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        autoComplete={auto}
                        className="form-input"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="interest" className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-on-surface-variant)]">
                    Interest
                  </label>
                  <select id="interest" name="interest" value={form.interest} onChange={handleChange} className="form-input cursor-pointer">
                    {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-on-surface-variant)]">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell us about your project goals..."
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit" disabled={loading}
                  className="w-full bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] py-4 rounded-xl text-sm font-bold tracking-wide hover:glow-cyan transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer mt-1"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Inquiry <Send size={14} /></>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
