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
    question: "Who is this program designed for?",
    answer:
      "Our programs are tailored for school students from grades 6–12, with customizable content to suit different learning levels and school needs.",
  },
  {
    question: "Do schools need prior experience in robotics to set up a lab?",
    answer:
      "Not at all! We provide complete support—from lab setup and equipment to teacher training—making it easy for any school to get started.",
  },
  {
    question: "Can we purchase only kits or curriculum separately?",
    answer:
      "Yes, schools can opt for standalone kits, curriculum modules, or bundled packages based on their requirements.",
  },
  {
    question: "Do you offer training for teachers?",
    answer:
      "Yes, we provide in-depth training for educators to help them confidently run STEM and robotics sessions in the classroom.",
  },
  {
    question: "Is technical support available after setup?",
    answer:
      "Absolutely! Our team offers ongoing technical support, regular updates, and assistance to ensure smooth classroom operations.",
  },
];
