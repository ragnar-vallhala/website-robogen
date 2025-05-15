import {
    FaRobot,
    FaCode,
    FaBrain,
    FaNetworkWired,
  } from 'react-icons/fa';
  import { GiArtificialIntelligence } from 'react-icons/gi';
  import { MdOutlineDataExploration } from 'react-icons/md';
  import { SiGooglecloud } from 'react-icons/si';
  import { PiStudent } from 'react-icons/pi';
  import { TbDrone } from 'react-icons/tb';
  
  const programs = [
    {
      title: 'Robotics',
      icon: <FaRobot className="text-4xl text-indigo-600" />,
    },
    {
      title: 'Data Science',
      icon: <MdOutlineDataExploration className="text-4xl text-indigo-600" />,
    },
    {
      title: 'Drones',
      icon: <TbDrone className="text-4xl text-indigo-600" />,
    },
    {
      title: 'Coding',
      icon: <FaCode className="text-4xl text-indigo-600" />,
    },
    {
      title: 'Artificial Intelligence',
      icon: <GiArtificialIntelligence className="text-4xl text-indigo-600" />,
    },
    {
      title: 'Design Thinking',
      icon: <PiStudent className="text-4xl text-indigo-600" />,
    },
    {
      title: 'Machine Learning',
      icon: <FaBrain className="text-4xl text-indigo-600" />,
    },
    {
      title: 'Internet of Things',
      icon: <FaNetworkWired className="text-4xl text-indigo-600" />,
    },
  ];
  
  export default function ProgramsWeOffer() {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Programs We Offer</h2>
          <p className="text-lg mb-12">
            Our lab setup is comprehensive and customizable to fit the needs of each school.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="shadow-md rounded-xl p-6 flex flex-col items-center justify-center transition hover:shadow-xl"
              >
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold">{program.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  