import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, MessageSquare, ShieldCheck } from "lucide-react";

export default function Contact() {
  // Form state that tracks each input field value.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  // Whether the form is currently being submitted.
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Whether the success state is active after submission.
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Error message shown when validation fails.
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // The generated mailto URL for manual fallback if the browser does not open the email client automatically.
  const [mailtoUrl, setMailtoUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent page reload and handle submission in JavaScript.
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please complete all required fields before sending your message.");
      return;
    }

    // Clear any previous error and show the loading indicator.
    setErrorMessage(null);
    setIsSubmitting(true);

    // Build the mailto link from the form values.
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    const mailtoLink = `mailto:hasidhananjaya121212@gmail.com?subject=${subject}&body=${body}`;
    setMailtoUrl(mailtoLink);

    // Simulate a short delay so the user sees a loading state before the browser opens the email client.
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.location.href = mailtoLink;
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 850);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Update the form state dynamically based on the input name attribute.
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Static contact cards displayed on the left side of the form.
  const contactDetails = [
    {
      id: "email",
      label: "Email Address",
      value: "hasidhananjaya121212@gmail.com",
      link: "mailto:hasidhananjaya121212@gmail.com",
      icon: Mail,
      subText: "Expect a response within 24 hours"
    },
    {
      id: "phone",
      label: "Phone Number",
      value: "0771265617",
      link: "tel:0771265617",
      icon: Phone,
      subText: "Available for calls or messages"
    },
    {
      id: "linkedin",
      label: "LinkedIn Professional Network",
      value: "hasitha-dhananjaya-863405181",
      link: "https://www.linkedin.com/in/hasitha-dhananjaya-863405181",
      icon: Linkedin,
      subText: "Let's connect professionally"
    },
    {
      id: "github",
      label: "GitHub Source Repositories",
      value: "github.com/Dhananjaya-77",
      link: "https://github.com/Dhananjaya-77",
      icon: Github,
      subText: "Browse all my public GitHub projects"
    }
  ];

  return (
    <main id="contact-page" className="flex-grow py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center md:text-left mb-12 border-b border-rose-500/10 pb-6">
          <h1 id="contact-title" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Get In <span className="text-[#ef4444]">Touch</span>
          </h1>
          <p className="mt-2 text-[#a3a3a3]">
            Have a project opportunity, coursework query, or looking to hire an intern? Reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Information cards */}
          <section 
            className="space-y-6 lg:col-span-5"
            aria-labelledby="contact-info-heading"
          >
            <h2 id="contact-info-heading" className="text-sm font-bold uppercase tracking-widest text-[#a3a3a3] font-mono">
              Contact Information
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div
                    key={detail.id}
                    className="flex items-start space-x-4 rounded-xl card-surface p-4 transition-all duration-200 hover:border-[#ef4444]/30 hover:bg-neutral-900/60 shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ef4444]/10 text-[#ef4444]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono text-[#a3a3a3] uppercase tracking-wider">{detail.label}</span>
                      <p className="mt-0.5 truncate text-sm font-semibold text-white">
                        <a 
                          href={detail.link} 
                          target={detail.id !== "email" && detail.id !== "phone" ? "_blank" : undefined}
                          rel={detail.id !== "email" && detail.id !== "phone" ? "noopener noreferrer" : undefined}
                          className="hover:text-[#ef4444] transition-colors duration-200"
                        >
                          {detail.value}
                        </a>
                      </p>
                      <p className="text-[11px] text-[#a3a3a3]/70 mt-0.5">{detail.subText}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* HCI Security Tip Panel */}
            <div className="rounded-xl border border-dashed border-red-500/20 bg-red-500/5 p-4 flex items-start space-x-3">
              <ShieldCheck className="h-5 w-5 text-[#ef4444] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#ef4444] font-mono tracking-wide uppercase">Secure Communication</p>
                <p className="text-[11px] text-[#a3a3a3] mt-1 leading-relaxed">
                  Your communication parameters are filtered and handled client-side in compliance with user-privacy regulations. No automated cookies or tracker tags are dispatched.
                </p>
              </div>
            </div>
          </section>

          {/* Right Column: Interaction Form */}
          <section 
            className="lg:col-span-7"
            aria-labelledby="form-heading"
          >
            <div className="rounded-2xl card-surface p-6 md:p-8 backdrop-blur-sm shadow-xl">
              <div className="flex items-center space-x-2.5 mb-6">
                <MessageSquare className="h-5 w-5 text-[#ef4444]" />
                <h2 id="form-heading" className="text-lg font-bold text-white uppercase tracking-wide">
                  Hasitha Dhananjaya
                </h2>
              </div>

              {/* Form block */}
              <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                {errorMessage && (
                  <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-200">
                    {errorMessage}
                  </div>
                )}
                
                {/* Name field */}
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] font-mono font-medium text-[#a3a3a3] uppercase tracking-widest mb-1.5">
                    Your Full Name <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    disabled={isSubmitted}
                    className="w-full rounded-md border border-white/5 bg-zinc-950 px-4 py-3 text-sm text-zinc-250 placeholder-zinc-650 focus:border-[#ef4444] focus:ring-1 focus:ring-[#ef4444] focus:outline-none transition-all duration-200 disabled:opacity-50"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="contact-email" className="block text-[10px] font-mono font-medium text-[#a3a3a3] uppercase tracking-widest mb-1.5">
                    Your Email Address <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    disabled={isSubmitted}
                    className="w-full rounded-md border border-white/5 bg-zinc-950 px-4 py-3 text-sm text-zinc-250 placeholder-zinc-650 focus:border-[#ef4444] focus:ring-1 focus:ring-[#ef4444] focus:outline-none transition-all duration-200 disabled:opacity-50"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-mono font-medium text-[#a3a3a3] uppercase tracking-widest mb-1.5">
                    Message Content <span className="text-[#ef4444]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message details here..."
                    disabled={isSubmitted}
                    className="w-full rounded-md border border-white/5 bg-zinc-950 px-4 py-3 text-sm text-zinc-250 placeholder-zinc-650 focus:border-[#ef4444] focus:ring-1 focus:ring-[#ef4444] focus:outline-none transition-all duration-200 resize-none disabled:opacity-50"
                  />
                </div>

                {/* Submit button / dynamic success state */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="form-submit-btn"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center rounded-md px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none shadow-md ${
                      isSubmitted
                        ? "bg-emerald-600 text-white shadow-emerald-500/10 scale-[1.01]"
                        : "bg-[#ef4444] text-black hover:opacity-90 hover:translate-y-[-1.5px] active:scale-[0.99] shadow-red-500/20 cursor-pointer hover:shadow-red-550/40"
                    } disabled:opacity-80`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        {/* custom SVG spinner loading */}
                        <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Dispatching...</span>
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5" />
                        <span>Message Sent!</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-2">
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </span>
                    )}
                  </button>
                </div>
              </form>

              {/* Dynamic Overlay success state banner for supreme HCI accessibility */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    id="success-banner"
                    className="mt-6 flex items-start space-x-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">Thank you for getting in touch, Hasitha here!</p>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        Your email draft should open in your default mail application. If it does not, use the link below to open it manually.
                      </p>
                      {mailtoUrl && (
                        <p className="mt-2 text-xs text-[#ef4444]">
                          <a
                            href={mailtoUrl}
                            className="underline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Open email draft manually
                          </a>
                        </p>
                      )}
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="mt-2 text-[11px] font-mono hover:underline font-semibold text-emerald-400"
                        type="button"
                      >
                        Send another message
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
