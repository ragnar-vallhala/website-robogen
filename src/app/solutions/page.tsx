import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Cta } from "@/components/Cta";

import { industryPackage1, industryPackage2, industryPackage3 } from "@/components/data";

export default function Solutions() {
  return (
    <Container>
      <SectionTitle
        preTitle="Our Solutions"
        title="Industrial-Grade Deep Tech Solutions"
      >
        Our cutting-edge robotics, IoT, and AI solutions drive operational efficiency by 40%+ 
        and align with Industry 4.0 standards. Designed by industry experts, we make advanced 
        technology accessible and scalable for businesses of all sizes.
      </SectionTitle>

      <Benefits data={industryPackage1} imgDim={512}/>
      <Benefits imgPos="right" data={industryPackage2} imgDim={512}/>
      <Benefits data={industryPackage3} imgDim={512}/>
    </Container>
  );
}