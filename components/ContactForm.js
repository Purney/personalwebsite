"use client";

import { useState, useRef } from "react";
import { Data } from "@/data/servicesData";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import TextCarouselVerticalComponent from "./TextCarouselVerticalComponent";

export default function ContactForm({title = "Ready to take your business to the next level?", subHeading = "We can help you"}) {
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
      className=" py-32 text-center mx-8"
    >
      {!messagedSubmitted ? (
        <>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="mb-8 text-lg flex justify-center">{subHeading} <TextCarouselVerticalComponent className="font-semibold ml-2 w-48"/></p>

          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4 text-left">
              <label htmlFor="name">What do we call you?</label>
              <input
                type="text"
                placeholder="Your Full Name"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 mt-2 text-black "
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="email">How can we contact you?</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="me@company.com"
                required
                className="w-full px-4 py-3 mt-2 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="service">How can we help you?</label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 mt-2 text-black"
                value={service}
                onChange={(e) => setService(e.target.value)}
                >
                  {Data.map((serviceItem, index) => (
                    <option key={"service-index-" + index} value={serviceItem.title}>{serviceItem.title}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
                {service != "" && !Data.some(item => item.title == service) && (
              <input
                type="otherService"
                id="otherService"
                name="otherService"
                placeholder="Custom Service"
                className="w-full px-4 py-3 mt-2 text-black"
                value={otherService}
                onChange={(e) => setOtherService(e.target.value)}
              />)}
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="message">What is your desired outcome?</label>
              <textarea
                placeholder="Your Message..."
                id="message"
                name="message"
                required
                rows="4"
                className="w-full px-4 py-3 mt-2 text-black"
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
              className="bg-black text-white py-3 px-4 text-xs hover:bg-gray-700 w-full"
            >
              Send message
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Thank you {submittedName}!</h2>
          <p className="mt-4 text-lg">
            Your message has been sent successfully. I&apos;ll get back to you soon!
          </p>
        </div>
      )}
    </section>
  );
}
