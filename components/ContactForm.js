"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Data } from "@/data/servicesData";

const LazyReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
  loading: () => (
    <div className="border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm text-slate-300">
      Loading verification...
    </div>
  ),
});

export default function ContactForm({
  title = "Claim your free AI workflow automation audit.",
  subHeading = "Tell me which process is slow, repetitive, or hard to scale. I will review it and show where AI automation could save time, connect tools, and reduce manual work.",
  headingLevel = "h2",
  sectionId = "contact",
}) {
  const HeadingTag = headingLevel === "h1" ? "h1" : "h2";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(Data[0].title);
  const [otherService, setOtherService] = useState("");
  const [message, setMessage] = useState("");
  const [messagedSubmitted, setMessagedSubmitted] = useState(false);
  const [captchaRequested, setCaptchaRequested] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  function requestCaptcha() {
    setCaptchaRequested(true);
  }

  useEffect(() => {
    const loadCaptcha = () => setCaptchaRequested(true);

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(loadCaptcha, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(loadCaptcha, 500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const handleChange = (token) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  async function handleCaptchaSubmission(token) {
    try {
      if (token) {
        await fetch("/api/recaptcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!captchaRequested) {
      setCaptchaRequested(true);
      return;
    }

    if (!isVerified) {
      alert("Please verify the reCAPTCHA!");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          service,
          otherService,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Message failed to send");
      }

      setSubmittedName(name);
      setMessagedSubmitted(true);
      setEmail("");
      setMessage("");
      setService(Data[0].title);
      setOtherService("");
      setName("");
      setIsVerified(false);
      setCaptchaRequested(false);
    } catch (error) {
      alert("Sorry, something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id={sectionId}
      className=" py-16 text-center mx-4 md:mx-8"
    >
      {!messagedSubmitted ? (
        <>
          <HeadingTag className="mb-4 text-3xl font-semibold text-white md:text-5xl">
            {title}
          </HeadingTag>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            {subHeading}
          </p>

          <form
            className="mx-auto max-w-2xl border border-white/10 bg-slate-950/70 p-5 text-left md:p-8"
            onFocus={requestCaptcha}
            onSubmit={handleSubmit}
          >
            <div className="mb-4 text-left">
              <label htmlFor="name" className="text-sm font-semibold text-slate-200">
                What is your name?
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => {
                  requestCaptcha();
                  setName(e.target.value);
                }}
                className="mt-2 w-full border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent-cyan"
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="email" className="text-sm font-semibold text-slate-200">
                What is your email?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="me@company.com"
                required
                className="mt-2 w-full border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent-cyan"
                value={email}
                onChange={(e) => {
                  requestCaptcha();
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="service" className="text-sm font-semibold text-slate-200">
                What do you want help with?
              </label>
              <select
                id="service"
                name="service"
                required
                className="mt-2 w-full border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-accent-cyan"
                value={service}
                onChange={(e) => {
                  requestCaptcha();
                  setService(e.target.value);
                }}
                >
                  {Data.map((serviceItem, index) => (
                    <option key={"service-index-" + index} value={serviceItem.title}>{serviceItem.title}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
                {service !== "" && !Data.some((item) => item.title === service) && (
              <input
                type="text"
                id="otherService"
                name="otherService"
                placeholder="Custom service"
                className="mt-2 w-full border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent-cyan"
                value={otherService}
                onChange={(e) => {
                  requestCaptcha();
                  setOtherService(e.target.value);
                }}
              />)}
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="message" className="text-sm font-semibold text-slate-200">
                What workflow should I audit?
              </label>
              <textarea
                placeholder="For example: we manually copy new enquiries into three tools and want to route them automatically."
                id="message"
                name="message"
                required
                rows="4"
                className="mt-2 w-full border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent-cyan"
                value={message}
                onChange={(e) => {
                  requestCaptcha();
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="flex justify-center py-4">
              {captchaRequested ? (
                  <LazyReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""}
                    onChange={handleChange}
                    onExpired={handleExpired}
                  />
              ) : (
                <div className="border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm text-slate-300">
                  Preparing secure verification...
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={!captchaRequested || !isVerified || isSubmitting}
              className="w-full cursor-pointer bg-accent-cyan px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isSubmitting ? "Sending..." : "Request free audit"}
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-semibold text-white">
            Thank you {submittedName}!
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Your message has been sent successfully. I&apos;ll get back to you soon!
          </p>
        </div>
      )}
    </section>
  );
}
