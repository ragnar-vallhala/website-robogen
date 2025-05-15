import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import ProgramsWeOffer from "@/components/Programs";

import {
  benefitOne,
  benefitTwo,
  labBenefits,
  features,
} from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle preTitle="Our Solutions" title="What we offer to you?">
        End-to-end support to set up ATL-aligned Robotics & AI Labs — from
        planning and installation to training and ongoing engagement.
      </SectionTitle>

      <Benefits data={labBenefits} />
      <div className="flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
        For more details→
        <a href="/solutions" className="text-blue-500 hover:text-blue-800">
          visit our solutions
        </a>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">
            Robotics, Coding & AI Labs in Schools
          </h2>
          <p className="mb-12">
            Our lab setup is comprehensive and customizable to fit the needs of
            each school.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <ProgramsWeOffer />
      {/* 
      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      {/* 
      <Video videoId="fZ0D0cnR88E" /> */}

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials /> */}

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
      Get your doubts cleared.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
