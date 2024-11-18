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
      className="bg-blue-900 text-white py-16 px-8 text-center"
    >
      {!messagedSubmitted ? (
        <>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.value)}
                className="w-full px-4 py-2 rounded text-black"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded text-black"
                value={email}
                onChange={(e) => setEmail(e.value)}
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 rounded text-black"
                value={message}
                onChange={(e) => setMessage(e.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300"
            >
              Submit
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
