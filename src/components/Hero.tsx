import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero/hero.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Bringing AI & Robotics to Every Classroom
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Hands-on workshops and ATL-compliant kits for students (6-12) and
              teachers. Learn Python, AI, and IoT with Tinkercad, Colab, and
              ChatGPT - no prior experience needed!
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/workshops"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Book a Free Demo
              </a>
              <a
                href="/curriculum"
                className="px-8 py-4 text-lg font-medium text-center text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
              >
                Explore Curriculum
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="528"
              height="528"
              className={"object-cover"}
              alt="Students working on robotics project"
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600">50+</span> schools
            across India
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <span className="text-2xl font-bold">ATL</span>
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <span className="text-2xl font-bold">NEP 2020</span>
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <span className="text-2xl font-bold">IIT Jammu</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
