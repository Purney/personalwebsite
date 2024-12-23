"use client";

import { useState } from "react";
import { Data } from "@/data/servicesData";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [message, setMessage] = useState("");
  const [messagedSubmitted, setMessagedSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setMessagedSubmitted(true);

    // Optionally clear the form
    setEmail("");
    setMessage("");
  }

  return (
    <section
      id="contact"
      className=" py-16 text-center mx-8"
    >
      {!messagedSubmitted ? (
        <>
          <h2 className="text-3xl font-bold mb-4">Ready to take your business to the next level?</h2>
          <p className="mb-8 text-lg">Reach out today for a free consultation!</p>

          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4 text-left">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                placeholder="Your Full Name"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.value)}
                className="w-full px-4 py-3 mt-2 text-black "
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="me@company.com"
                required
                className="w-full px-4 py-3 mt-2 text-black"
                value={email}
                onChange={(e) => setEmail(e.value)}
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="service">Service *</label>
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
                onChange={(e) => setOtherService(e.value)}
              />)}
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="message">Message *</label>
              <textarea
                placeholder="Your Message..."
                id="message"
                name="message"
                required
                rows="4"
                className="w-full px-4 py-3 mt-2 text-black"
                value={message}
                onChange={(e) => setMessage(e.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-3 px-4 text-xs hover:bg-gray-700 w-full"
            >
              Send message
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Thank you {name}!</h2>
          <p className="mt-4 text-lg">
            Your message has been sent successfully. I&apos;ll get back to you soon!
          </p>
        </div>
      )}
    </section>
  );
}
