import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero/deeptech.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Transform your operations with cutting-edge deep tech solutions!
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              We build innovative robotics, IoT, and AI solutions that drive efficiency, 
              automation, and digital transformation for industries and partners.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/solutions"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Explore our solutions
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="725"
              height="725"
              className={"object-cover"}
              alt="Navrobotec deep tech solutions in robotics, IoT and AI"
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Empowering industries with innovative technology — delivering results!
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-500 dark:text-gray-400">
              <span className="text-2xl font-bold">Robotics Solutions</span>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              <span className="text-2xl font-bold">AI & IoT Integration</span>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              <span className="text-2xl font-bold">Custom Software Development</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};