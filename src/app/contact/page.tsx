import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Container } from "@/components/Container";

export default function Contact() {
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
                href="mailto:robogenic25@gmail.com"
                className="text-blue-700 hover:underline"
              >
                robogenic25@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <PhoneIcon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-1">Phone</h3>
              <a href="tel:+919596917316" className="text-green-700 hover:underline">
                +91 9596917316
              </a>
            </div>

            <div className="flex flex-col items-center">
              <MapPinIcon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-1">Address</h3>
              <address className="not-italic text-center">
                C29 Patel Nagar 2<sup>nd</sup>,<br />
                Gaziabad, Uttar Pradesh,<br />
                201001, India
              </address>
            </div>
          </div>

          <form className="mt-12 max-w-xl mx-auto space-y-6 text-left">
            <label className="block">
              <span className="font-medium">Name</span>
              <input
                type="text"
                name="name"
                required
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className=" font-medium">Email</span>
              <input
                type="email"
                name="email"
                required
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="font-medium">Message</span>
              <textarea
                name="message"
                rows={4}
                required
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Write your message here"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
}
