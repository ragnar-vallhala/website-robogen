import {
  RocketLaunchIcon,
  
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CubeIcon,
  CpuChipIcon,
  QueueListIcon,
  LifebuoyIcon,
  CheckCircleIcon,
  UserIcon,
  ComputerDesktopIcon,
  CheckBadgeIcon,
  PresentationChartBarIcon,
  BuildingStorefrontIcon,
  PuzzlePieceIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  ChartBarIcon,
  PencilSquareIcon,
  WrenchIcon,
  BookOpenIcon,
  CogIcon,
  CloudIcon,
  ShieldCheckIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/hero/benefit-one.png";
import benefitTwoImg from "../../public/img/hero/benefit-two.png";
import labImg from "../../public/img/hero/lab.png";
import package1Img from "../../public/img/packages/p1.png";
import package2Img from "../../public/img/packages/p2.png";
import package3Img from "../../public/img/packages/p3.png";
import workshop68Img from "../../public/img/workshops/68.png";
import workshop912Img from "../../public/img/workshops/912.png";
import teacherWorkshopImg from "../../public/img/workshops/teachers.png";
import industryImg from "../../public/img/workshops/teachers.png";
import { FaRobot, FaChalkboardTeacher, FaClipboardCheck,FaIndustry,FaWarehouse } from 'react-icons/fa';
import { MdOutlineLibraryBooks, MdVerified, MdBuild, MdAnalytics } from 'react-icons/md';
import { IoIosSpeedometer } from 'react-icons/io';
import { GiArtificialIntelligence } from 'react-icons/gi';
export { 
  benefitOne, 
  benefitTwo, 
  labBenefits, 
  features, 
  package1, 
  package2, 
  package3, 
  workshop68, 
  workshop912, 
  teacherWorkshop,
  industryBenefits,
  services 
};




const teacherWorkshop = {
  title: "Teacher Training Plan: Empowering Educators with Tech & ATL",
  desc: "A hands-on professional development program that equips educators with practical tools in coding, AI, and ATL pedagogy — to make learning more engaging, relevant, and future-ready.",
  image: teacherWorkshopImg,
  bullets: [
    {
      title: "Python for Real Subjects",
      desc: "Use Python to visualize Science/Math data in Google Colab.",
      icon: <ChartBarIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "AI Tools for Smart Classrooms",
      desc: "Create image/audio models with Teachable Machine and ChatGPT.",
      icon: <AcademicCapIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Craft AI Prompts for Class Use",
      desc: "Write smart prompts for worksheets, quizzes, and lesson ideas.",
      icon: <PencilSquareIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Simulate Science Models Using IoT",
      desc: "Build virtual sensors for Physics/EVS using Tinkercad.",
      icon: <WrenchIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Make ATL Connect to Curriculum",
      desc: "Map ATL projects to subject chapters using Google Docs/Canva.",
      icon: <BookOpenIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Design Your Own ATL Lesson",
      desc: "Create and present an ATL-integrated lesson plan in teams.",
      icon: <LightBulbIcon className="w-6 h-6 text-primary" />,
    },
  ],
};

const workshop912 = {
  title: "Workshop for Classes 9–12: Build the Future — Explore AI, Code, and Create",
  desc: "An immersive tech workshop for high school students to dive into Python, AI, IoT, and app development — learning future-ready skills through real projects and creative challenges.",
  image: workshop912Img,
  bullets: [
    {
      title: "Python Mini Projects: From Code to Creation",
      desc: "Build calculator/quiz apps using Python in Google Colab/Replit.",
      icon: <WrenchScrewdriverIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Build & Understand AI Models",
      desc: "Create image/sound classifiers with Teachable Machine.",
      icon: <CpuChipIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "ChatGPT Bot Creator",
      desc: "Develop custom Q&A bots using prompt templates.",
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "IoT in Action: Virtual Circuits",
      desc: "Simulate motion/light sensors with Tinkercad Circuits.",
      icon: <GlobeAltIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Design an App Without Code",
      desc: "Create Android apps using MIT App Inventor blocks.",
      icon: <DevicePhoneMobileIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Demo Day: Pitch Like a Startup",
      desc: "Present projects through live demos or slides.",
      icon: <PresentationChartBarIcon className="w-6 h-6 text-primary" />,
    },
  ],
};

const workshop68 = {
  title: "Workshop for Classes 6–8: Fun with Technology — Learn by Doing!",
  desc: "A hands-on learning experience designed to introduce students to coding, AI, electronics, and creativity through fun and engaging projects.",
  image: workshop68Img,
  bullets: [
    {
      title: "Make Your Own Story Game in Python",
      desc: "Code a 'choose your adventure' game in Google Colab.",
      icon: <CodeBracketIcon />,
    },
    {
      title: "Train an AI to Recognize You!",
      desc: "Create pose/expression detectors with Teachable Machine.",
      icon: <CpuChipIcon />,
    },
    {
      title: "Ask Like a Genius – Fun with ChatGPT",
      desc: "Generate poems, stories, and cards using AI prompts.",
      icon: <ChatBubbleLeftRightIcon />,
    },
    {
      title: "Light Up a Virtual LED",
      desc: "Build simple circuits in Tinkercad.",
      icon: <LightBulbIcon />,
    },
    {
      title: "Design a Smart School Gadget",
      desc: "Brainstorm smart devices using Scratch/Canva.",
      icon: <PuzzlePieceIcon />,
    },
    {
      title: "Final Project: Show and Tell",
      desc: "Present creative projects combining learned tools.",
      icon: <RocketLaunchIcon />,
    },
  ],
};

// Package 1
const package1 = {
  "title": "Basic STEM Lab Package",
  "desc": "Essential robotics and technology starter kit for schools beginning their STEM journey.",
  "image": package1Img, // Image showing basic robotics setup
  "bullets": [
    {
      "title": "Core Robotics",
      "desc": "Line follower, obstacle avoiding, human chasing, and fire detection robots.",
      "icon": <CubeIcon />
    },
    {
      "title": "ATL Foundation Kit",
      "desc": "Microcontrollers, sensors, motors, LEDs and other essential components.",
      "icon": <CpuChipIcon />
    },
    {
      "title": "Robotics Arm",
      "desc": "Industrial-style robotic arm for grasping and automation projects.",
      "icon": <QueueListIcon />
    },
    {
      "title": "Full Support System",
      "desc": "Includes furniture, course material, teacher training and maintenance.",
      "icon": <LifebuoyIcon />
    }
  ]
};

// Package 2
const package2 = {
  "title": "Advanced STEM Lab Package",
  "desc": "Comprehensive technology package with humanoid robots and smart devices for enhanced learning.",
  "image": package2Img, // Image showing humanoid and tablets
  "bullets": [
    {
      "title": "Everything in Basic Package",
      "desc": "All drones, robots, ATL items and support from Package 1.",
      "icon": <CheckCircleIcon />
    },
    {
      "title": "Humanoid Robotics",
      "desc": "Advanced humanoid robots for sophisticated programming challenges.",
      "icon": <UserIcon />
    },
    {
      "title": "Digital Learning Suite",
      "desc": "Meta technology, smart tablets, and computer systems.",
      "icon": <ComputerDesktopIcon />
    },
    {
      "title": "Robotics Community",
      "desc": "Includes robotics club setup and event support.",
      "icon": <UserGroupIcon />
    }
  ]
};

// Package 3
const package3 = {
  "title": "Premium Makerspace Package",
  "desc": "Complete innovation lab with advanced manufacturing tools and all technology from lower packages.",
  "image": package3Img, // Image showing 3D printing and smart board
  "bullets": [
    {
      "title": "Everything in Basic & Advanced Package",
      "desc": "All items from Packages 1 and 2 including humanoids and digital tools.",
      "icon": <CheckBadgeIcon />
    },
    {
      "title": "Smart Classroom",
      "desc": "Interactive smart board for collaborative learning.",
      "icon": <PresentationChartBarIcon />
    },
    {
      "title": "Maker Machines",
      "desc": "3D printing, laser cutting, vertical milling, and hot wire cutting capabilities.",
      "icon": <BuildingStorefrontIcon />
    },
    {
      "title": "Complete Ecosystem",
      "desc": "End-to-end solution with all hardware, curriculum, training and community support.",
      "icon": <PuzzlePieceIcon />
    }
  ]
};


const features = [
  {
    title: 'Robotics & AI Hardware / Software',
    description: 'Advanced robotics kits, microcontrollers, sensors, and coding tools to design, build, and program intelligent machines.',
    icon: <FaRobot className="text-4xl text-indigo-600" />,
  },
  {
    title: 'Curriculum Development',
    description: 'A well-structured curriculum mapped to academic standards, covering key concepts like robotics design, coding, sensors, and automation.',
    icon: <MdOutlineLibraryBooks className="text-4xl text-indigo-600" />,
  },
  {
    title: 'Teacher Training',
    description: 'Comprehensive training programs that equip educators to confidently lead robotics sessions, operate lab equipment, and guide students in hands-on learning.',
    icon: <FaChalkboardTeacher className="text-4xl text-indigo-600" />,
  },
  {
    title: 'Curriculum-Aligned STEM Kits',
    description: 'Hands-on experiments and custom-designed kits mapped to school curriculum, making STEM learning engaging and classroom-ready.',
    icon: <FaClipboardCheck className="text-4xl text-indigo-600" />,
  },
  {
    title: 'On-Demand Kit Manufacturing',
    description: 'We build and deliver robotics kits and components on-demand, ensuring schools have exactly what they need, when they need it.',
    icon: <MdBuild className="text-4xl text-indigo-600" />,
  },
  {
    title: 'Skill Certification',
    description: 'Structured programs to certify students in robotics, AI, and coding—building credentials for competitions, internships, and future careers.',
    icon: <MdVerified className="text-4xl text-indigo-600" />,
  },
];


const labBenefits = {
  title: "21st Century Labs",
  desc: "Explore future-ready domains with hands-on experiences aligned with ATL and school curriculum.",
  image: labImg, // Use image of students building or interacting with robots
  bullets: [
    {
      title: "Robotics & Automation",
      desc: "Design, build, and program robots using beginner-friendly platforms and sensors.",
      icon: <CubeIcon />,
    },
    {
      title: "Artificial Intelligence",
      desc: "Train models, build chatbots, and understand how AI powers everyday technology.",
      icon: <RocketLaunchIcon />,
    },
    {
      title: "Curriculum-Aligned & ATL-Ready",
      desc: "Projects mapped to NEP 2020, ATL themes, and classroom learning outcomes.",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Novel & Emerging Tech",
      desc: "Explore IoT, computer vision, and creative coding with intuitive, mobile-friendly tools.",
      icon: <DevicePhoneMobileIcon />,
    },
  ],
};
const industryBenefits = {
  title: "Enterprise-Grade Solutions",
  desc: "Transform your operations with cutting-edge robotics, IoT, and AI technologies designed for industrial applications.",
  image: industryImg, // Use image of industrial automation or smart factory
  bullets: [
    {
      title: "Increased Operational Efficiency",
      desc: "Automate repetitive tasks and optimize processes with intelligent robotics and AI systems.",
      icon: <IoIosSpeedometer className="w-6 h-6 text-primary" />,
    },
    {
      title: "Real-time Data & Analytics",
      desc: "Gain actionable insights with IoT sensors and advanced analytics for informed decision-making.",
      icon: <MdAnalytics className="w-6 h-6 text-primary" />,
    },
    {
      title: "Scalable Architecture",
      desc: "Modular solutions that grow with your business, from pilot projects to enterprise-wide deployment.",
      icon: <CloudIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "24/7 Monitoring & Support",
      desc: "Comprehensive maintenance and support services ensuring maximum uptime and performance.",
      icon: <ShieldCheckIcon className="w-6 h-6 text-primary" />,
    },
  ],
};

// Services Data
const services = [
  {
    title: 'Industrial Robotics & Automation',
    description: 'Custom robotic solutions including industrial arms, AGVs, and automated systems for manufacturing, assembly, and material handling.',
    icon: <CogIcon className="text-3xl text-indigo-600" />,
  },
  {
    title: 'IoT & Smart Factory Solutions',
    description: 'End-to-end IoT implementation with sensors, connectivity, and cloud platforms for real-time monitoring and control of industrial processes.',
    icon: <CloudIcon className="text-3xl text-indigo-600" />,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent systems for predictive maintenance, quality control, computer vision, and process optimization using advanced AI algorithms.',
    icon: <CpuChipIcon className="text-3xl text-indigo-600" />,
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions including dashboards, mobile apps, and enterprise systems to streamline operations and enhance productivity.',
    icon: <CodeBracketIcon className="text-3xl text-indigo-600" />,
  },
  {
    title: 'Warehouse Automation',
    description: 'Complete automation solutions for logistics and supply chain including inventory management, sorting systems, and smart storage solutions.',
    icon: <BuildingStorefrontIcon className="text-3xl text-indigo-600" />,
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Strategic guidance and implementation support for businesses transitioning to Industry 4.0 and smart manufacturing practices.',
    icon: <PresentationChartBarIcon className="text-3xl text-indigo-600" />,
  },
];

// Updated benefitOne for Industry Context
const benefitOne = {
  title: "For Manufacturing",
  desc: "Boost productivity and quality with automated solutions",
  image: benefitOneImg, // Use image of manufacturing automation
  bullets: [
    {
      title: "Increased Production Speed",
      desc: "Automate assembly lines and reduce cycle times with robotic systems",
      icon: <BoltIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Enhanced Quality Control",
      desc: "AI-powered inspection systems for defect detection and quality assurance",
      icon: <ShieldCheckIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Reduced Operational Costs",
      desc: "Optimize resource usage and minimize waste through intelligent automation",
      icon: <ChartBarIcon className="w-6 h-6 text-primary" />,
    },
  ],
};

// Updated benefitTwo for Industry Context
const benefitTwo = {
  title: "For Operations Management",
  desc: "Streamline processes and gain real-time visibility across operations",
  image: benefitTwoImg, // Use image of operations dashboard
  bullets: [
    {
      title: "Real-time Monitoring",
      desc: "Comprehensive dashboards for tracking KPIs and operational metrics",
      icon: <DevicePhoneMobileIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Predictive Maintenance",
      desc: "AI algorithms to predict equipment failures and schedule maintenance",
      icon: <WrenchScrewdriverIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Data-Driven Decisions",
      desc: "Actionable insights from IoT data and advanced analytics",
      icon: <CursorArrowRaysIcon className="w-6 h-6 text-primary" />,
    },
  ],
};

// In your data.js file
const industryPackage1 = {
  "title": "Starter Automation Package",
  "desc": "Essential robotics and automation solutions for businesses beginning their digital transformation journey.",
  "image": package1Img, // Image showing basic industrial automation
  "bullets": [
    {
      "title": "Basic Robotics Integration",
      "desc": "Entry-level robotic arms and automated systems for repetitive tasks.",
      "icon": <CogIcon />
    },
    {
      "title": "IoT Starter Kit",
      "desc": "Essential sensors and monitoring systems for real-time data collection.",
      "icon": <CloudIcon />
    },
    {
      "title": "Process Automation",
      "desc": "Automated workflow solutions for quality control and basic manufacturing processes.",
      "icon": <BoltIcon />
    },
    {
      "title": "Basic Analytics Dashboard",
      "desc": "Real-time monitoring and reporting tools with comprehensive support.",
      "icon": <ChartBarIcon />
    }
  ]
};

const industryPackage2 = {
  "title": "Advanced Integration Package",
  "desc": "Comprehensive automation with AI integration and smart factory solutions for medium to large enterprises.",
  "image": package2Img, // Image showing advanced industrial setup
  "bullets": [
    {
      "title": "Everything in Starter Package",
      "desc": "All robotics, IoT, and automation solutions from Package 1.",
      "icon": <CheckCircleIcon />
    },
    {
      "title": "AI-Powered Systems",
      "desc": "Machine learning models for predictive maintenance and quality optimization.",
      "icon": <CpuChipIcon />
    },
    {
      "title": "Smart Factory Suite",
      "desc": "Advanced IoT networks, cloud integration, and real-time analytics.",
      "icon": <DevicePhoneMobileIcon />
    },
    {
      "title": "Custom Integration",
      "desc": "Seamless integration with existing ERP and enterprise systems.",
      "icon": <PuzzlePieceIcon />
    }
  ]
};

const industryPackage3 = {
  "title": "Enterprise Transformation Package",
  "desc": "Complete digital transformation solution with advanced robotics, AI, and comprehensive IoT ecosystem.",
  "image": package3Img, // Image showing full enterprise solution
  "bullets": [
    {
      "title": "Everything in Starter & Advanced Packages",
      "desc": "All solutions from Packages 1 and 2 including AI and smart factory capabilities.",
      "icon": <CheckBadgeIcon />
    },
    {
      "title": "Advanced Robotics Systems",
      "desc": "Collaborative robots, AGVs, and sophisticated automation systems.",
      "icon": <UserIcon />
    },
    {
      "title": "Enterprise AI Platform",
      "desc": "Custom AI models, computer vision, and advanced predictive analytics.",
      "icon": <PresentationChartBarIcon />
    },
    {
      "title": "End-to-End Digital Twin",
      "desc": "Complete digital replica of operations for simulation and optimization.",
      "icon": <GlobeAltIcon />
    }
  ]
};

export { industryPackage1, industryPackage2, industryPackage3 };