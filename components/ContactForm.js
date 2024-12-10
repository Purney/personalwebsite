"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-8 text-lg">Let me know how we can help</p>

          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4 text-left">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.value)}
                className="w-full px-4 py-3 mt-2 text-black "
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="me@company.com"
                className="w-full px-4 py-3 mt-2 text-black"
                value={email}
                onChange={(e) => setEmail(e.value)}
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Your Message..."
                id="message"
                name="message"
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
            Your message has been sent successfully. I'll get back to you soon!
          </p>
        </div>
      )}
    </section>
  );
}
