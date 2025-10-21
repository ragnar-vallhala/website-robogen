"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What industries do you serve with your deep tech solutions?",
    answer:
      "We serve a wide range of industries including manufacturing, healthcare, logistics, agriculture, energy, retail, and more. Our solutions are customizable to address specific challenges across different sectors.",
  },
  {
    question: "Do you provide end-to-end solutions or individual components?",
    answer:
      "We offer both! You can engage us for complete end-to-end solutions covering design, development, and deployment, or you can choose specific components like robotics automation, IoT integration, or AI development based on your needs.",
  },
  {
    question: "How long does it typically take to implement your solutions?",
    answer:
      "Implementation timelines vary based on project complexity. Pilot projects can take 4-8 weeks, while comprehensive enterprise solutions may require 3-6 months. We follow an agile methodology to deliver value incrementally.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we provide comprehensive 24/7 support and maintenance packages. This includes regular updates, performance monitoring, technical assistance, and optimization services to ensure your systems run smoothly.",
  },
  {
    question: "Can your solutions integrate with our existing systems?",
    answer:
      "Absolutely! We design our solutions with integration in mind. Our team ensures seamless integration with your existing ERP, CRM, and other enterprise systems through well-documented APIs and custom connectors.",
  },
  {
    question: "What is your approach to data security and privacy?",
    answer:
      "We implement industry-standard security protocols including encryption, secure APIs, access controls, and compliance with relevant data protection regulations. Security is built into every layer of our solutions.",
  },
  {
    question: "Do you provide training for our team?",
    answer:
      "Yes, we offer comprehensive training programs for your technical and operational teams. This includes system operation, maintenance procedures, and best practices to ensure your team can effectively use and manage the solutions.",
  },
  {
    question: "What makes your robotics solutions different from others?",
    answer:
      "Our robotics solutions are characterized by customizability, scalability, and advanced AI integration. We focus on creating solutions that not only automate tasks but also learn and adapt to your specific operational environment.",
  },
  {
    question: "Can we start with a pilot project before full implementation?",
    answer:
      "Yes, we encourage starting with pilot projects to demonstrate value and validate the solution in your specific context. This approach minimizes risk and ensures the solution meets your expectations before scaling.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing models including project-based pricing, subscription models for ongoing services, and customized enterprise agreements. We'll work with you to find the most suitable option for your budget and requirements.",
  },
];