import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Cta } from "@/components/Cta";

import { package1,package2, package3 } from "@/components/data";
export default function Solutions() {
  return (
    <Container>
      <SectionTitle
        preTitle="Our solutions"
        title="Solutions for the cutting edge new schools"
      >
        Our hands-on programs boost engagement by 85% and align with NEP 2020
        goals. Designed by IIT educators, we make advanced tech accessible to
        all classrooms.
      </SectionTitle>

      <Benefits data={package1} imgDim={512}/>
      <Benefits imgPos="right" data={package2} imgDim={512}/>
      <Benefits data={package3} imgDim={512}/>
      <Cta />
    </Container>
  );
}
