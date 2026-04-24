"use client";

import { useState, useRef } from "react";
import { Data } from "@/data/servicesData";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

export default function ContactForm({
  title = "Claim your free AI workflow automation audit.",
  subHeading = "Tell me which process is slow, repetitive, or hard to scale. I will review it and show where AI automation could save time, connect tools, and reduce manual work.",
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(Data[0].title);
  const [otherService, setOtherService] = useState("");
  const [message, setMessage] = useState("");
  const [messagedSubmitted, setMessagedSubmitted] = useState(false);
  const recaptchaRef = useRef();
  const [isVerified, setIsVerified] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

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

  function handleSubmit(e) {
    e.preventDefault();
    if (!isVerified) {
      alert("Please verify the reCAPTCHA!");
    } else {
      axios
        .post("/api/contact", {
          name,
          email,
          service,
          otherService,
          message,
        })
        .then(() => {
          setSubmittedName(name);
          setMessagedSubmitted(true);
          setEmail("");
          setMessage("");
          setService("");
          setOtherService("");
          setName("");
        });
    }

   
  }

  return (
    <section
      id="contact"
      className=" py-16 text-center mx-4 md:mx-8"
    >
      {!messagedSubmitted ? (
        <>
          <h2 className="mb-4 text-3xl font-semibold text-white md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            {subHeading}
          </p>

          <form className="mx-auto max-w-2xl border border-white/10 bg-slate-950/70 p-5 text-left md:p-8" onSubmit={handleSubmit}>
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setService(e.target.value)}
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
                onChange={(e) => setOtherService(e.target.value)}
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
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-center py-4">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""}
                    ref={recaptchaRef}
                    onChange={handleChange}
                    onExpired={handleExpired}
                  />
                </div>
            <button
              type="submit"
              disabled={!isVerified}
              className="w-full cursor-pointer bg-accent-cyan px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Request free audit
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
