import React from 'react';
import { 
  SparklesIcon, 
  LightBulbIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
  PuzzlePieceIcon,
  CogIcon,
  CloudIcon,
  CpuChipIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';

const AboutUs = () => {
  const missionPoints = [
    {
      title: "Industrial Automation",
      description: "Transforming manufacturing and logistics with cutting-edge robotics and automation solutions",
      icon: <CogIcon className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Smart IoT Integration",
      description: "Building connected ecosystems with real-time monitoring and control systems",
      icon: <CloudIcon className="h-8 w-8 text-green-600" />
    },
    {
      title: "AI-Powered Solutions",
      description: "Leveraging machine learning and computer vision for intelligent decision-making",
      icon: <CpuChipIcon className="h-8 w-8 text-purple-600" />
    },
    {
      title: "Enterprise Digital Transformation",
      description: "Driving business growth through comprehensive technology modernization",
      icon: <BuildingStorefrontIcon className="h-8 w-8 text-orange-600" />
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            About Navrobotec
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Pioneering industrial automation and digital transformation with cutting-edge robotics, IoT, and AI solutions
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
                At Navrobotec, our mission is to empower industries with innovative deep tech solutions that drive efficiency, automation, and sustainable growth.
              </p>
              <p className="text-lg">
                We specialize in creating custom robotics, IoT, and AI systems that transform operations, reduce costs, and future-proof businesses in the Industry 4.0 era.
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
              <h3 className="font-semibold mb-2">Consultation & Analysis</h3>
              <p className="">Deep dive into your operational challenges and technical requirements</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Custom Solution Design</h3>
              <p className="">Tailored robotics, IoT, and AI solutions that address specific business needs</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Implementation & Support</h3>
              <p className="">End-to-end deployment with ongoing maintenance and optimization services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;