"use client";

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Container } from "@/components/Container";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // Changed type to FormEvent
    e.preventDefault();
    setIsSubmitting(true); // Set loading to true when submitting
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwGJ81GV-q1Pd4jVcNilMmE7TZQSUWTHkd2Yx4hFcKYQ-Jzxb4IwdX3Aq-Ofz4xalC3Jg/exec",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=UTF-8" },
          body: JSON.stringify(formData),
          redirect: "follow",
        }
      );
      const result = await response.json();
      console.log("Contact result", result);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      // toast.error("❌ Could not submit the form. Please check your network.");
    } finally {
      setIsSubmitting(false); // Set loading to false when done
    }
  };
  return (
    <Container>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-1">
            Have questions or want to learn more? Reach out to us!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div className="flex flex-col items-center">
              <EnvelopeIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <a
                href="mailto:support@navrobotec.com"
                className="text-blue-700 hover:underline"
              >
                support@navrobotec.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <PhoneIcon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-1">Phone</h3>
              <a
                href="tel:+919596917316"
                className="text-green-700 hover:underline"
              >
                +91 9596917316
              </a>
            </div>

            <div className="flex flex-col items-center">
              <MapPinIcon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-1">Address</h3>
              <address className="not-italic text-center">
                C29 Patel Nagar 2<sup>nd</sup>,<br />
                Gaziabad, Uttar Pradesh,
                <br />
                201001, India
              </address>
            </div>
          </div>

          <form
            className="mt-12 max-w-xl mx-auto space-y-6 text-left"
            onSubmit={handleSubmit}
          >
            <label className="block">
              <span className="font-medium">Name</span>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className=" font-medium">Email</span>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="font-medium">Message</span>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Write your message here"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md font-semibold transition-colors ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  <span>Sending...</span>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
}
