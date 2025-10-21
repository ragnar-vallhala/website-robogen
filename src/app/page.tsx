import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import IndustrySolutions from "@/components/IndustrySolutions";
import React from "react";
import {
  benefitOne,
  benefitTwo,
  industryBenefits,
  services,
} from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Our Services"
        title="What we offer to industries?"
      >
        End-to-end deep tech solutions — from concept and development to
        deployment and ongoing support across robotics, IoT, and AI domains.
      </SectionTitle>

      <Benefits data={industryBenefits} />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">
            Custom Deep Tech Solutions for Industries
          </h2>
          <p className="mb-12">
            Our services are comprehensive and tailored to address specific
            industry challenges and requirements.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {React.cloneElement(service.icon, {
                    className: "text-3xl w-16 text-indigo-600", // Changed from text-4xl to text-3xl
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustrySolutions />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Get your technical questions answered.
      </SectionTitle>

      <Faq />
    </Container>
  );
}
