import {
  AcademicCapIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { workshop68, workshop912, teacherWorkshop } from "@/components/data";
import { Container } from "@/components/Container";
import { Benefits } from "@/components/Benefits";
import { Cta } from "@/components/Cta";
export default function Workshops() {
  return (
    <Container>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">
            STEM Workshops for Students & Teachers
          </h2>
          <p className="mb-12">
            Hands-on, curriculum-aligned programs to explore AI, robotics, and
            coding across all grade levels.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Student Workshops */}
            <div className="shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex justify-center">
                <AcademicCapIcon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Junior Innovators (Class 6-8)
              </h3>
              <p className="mb-4">&ldquo;Fun with Technology&rdquo; - Learn by Doing!</p>
              <ul className="text-left list-disc pl-5 space-y-1 text-sm">
                <li>Python storytelling with Google Colab</li>
                <li>AI image classification projects</li>
                <li>Creative prompt engineering</li>
                <li>Tinkercad circuit simulations</li>
                <li>ATL design challenges</li>
              </ul>
            </div>

            <div className="shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex justify-center">
                <RocketLaunchIcon className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Future Builders (Class 9-12)
              </h3>
              <p className="mb-4">
                &ldquo;Build the Future&rdquo; - Explore AI, Code & Create
              </p>
              <ul className="text-left list-disc pl-5 space-y-1 text-sm">
                <li>Python projects with Replit</li>
                <li>Machine learning fundamentals</li>
                <li>ChatGPT-powered bots</li>
                <li>IoT sensor applications</li>
                <li>Mobile app development</li>
              </ul>
            </div>

            {/* Teacher Training */}
            <div className="shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex justify-center">
                <UserGroupIcon className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Educator Empowerment
              </h3>
              <p className="mb-4">AI, Coding & ATL Integration Training</p>
              <ul className="text-left list-disc pl-5 space-y-1 text-sm">
                <li>Python for STEM teaching</li>
                <li>AI-powered classroom tools</li>
                <li>Prompt engineering for educators</li>
                <li>Digital circuit building</li>
                <li>ATL-subject integration</li>
              </ul>
            </div>
          </div>

          {/* Tool Accessibility Note */}
          <div className="mt-12 p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-semibold mb-2 text-blue-800">
              Universal Access
            </h3>
            <p className="text-sm">
              All workshops designed for hybrid delivery with mobile-friendly
              alternatives for every tool (Google Colab, Tinkercad, Thunkable,
              etc.)
            </p>
          </div>
        </div>
      </section>
      <Benefits data={workshop68}/>
      <Benefits data={workshop912} imgPos="right"/>
      <Benefits data={teacherWorkshop}/>
      <Cta/>
    </Container>
  );
}
