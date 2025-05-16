import React from 'react';
import { SparklesIcon, LightBulbIcon, UserGroupIcon, AcademicCapIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';

const AboutUs = () => {
  const missionPoints = [
    {
      title: "Accessible Tech Education",
      description: "Democratizing future-ready learning for all schools regardless of size or location",
      icon: <SparklesIcon className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Hands-On Innovation",
      description: "Bridging theory and practice with real AI, Robotics, and IoT experiences",
      icon: <LightBulbIcon className="h-8 w-8 text-green-600" />
    },
    {
      title: "Empowering Educators",
      description: "Continuous teacher training to sustain tech integration in classrooms",
      icon: <AcademicCapIcon className="h-8 w-8 text-purple-600" />
    },
    {
      title: "Future Skills Development",
      description: "Building creativity, problem-solving and confidence in young innovators",
      icon: <PuzzlePieceIcon className="h-8 w-8 text-orange-600" />
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            About Robogenic
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Pioneering hands-on technology education for India&apos;s future innovators
          </p>
        </div>

        {/* Mission Statement */}
        <div className="p-8 rounded-xl shadow-lg mb-16 border-l-8 border-blue-500">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="p-6 rounded-full">
                <UserGroupIcon className="h-16 w-16 text-blue-600" />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg mb-4">
                At Robogenic, our mission is to make future-ready technology education accessible, engaging, and empowering for every school in India.
              </p>
              <p className="text-lg">
                We&apos;re not just teaching tech — we&apos;re building confidence, innovation mindsets, and problem-solving leaders for tomorrow&apos;s world.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {missionPoints.map((point, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:border-blue-300 border border-transparent"
            >
              <div className="mb-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Approach Section */}
        <div className="p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Interactive Workshops</h3>
              <p className="">Age-appropriate, curriculum-aligned sessions that make tech fun and relatable</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Smart Lab Solutions</h3>
              <p className="">Turnkey setups with drones, robotics kits, and maker tools for hands-on learning</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Teacher Enablement</h3>
              <p className="">Ongoing training to help educators confidently deliver tech education</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;