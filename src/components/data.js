import {
  RocketLaunchIcon,
  DocumentCheckIcon,
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

import { FaRobot, FaChalkboardTeacher, FaClipboardCheck } from 'react-icons/fa';
import { MdOutlineLibraryBooks, MdVerified, MdBuild } from 'react-icons/md';

export { benefitOne, benefitTwo, labBenefits, features, package1, package2, package3, workshop68, workshop912, teacherWorkshop };


const teacherWorkshop = {
  title: "Teacher Training Plan: Empowering Educators with Tech & ATL",
  desc: "A hands-on professional development program that equips educators with practical tools in coding, AI, and ATL pedagogy — to make learning more engaging, relevant, and future-ready.",
  image: teacherWorkshopImg, // Replace with actual image import or URL
  bullets: [
    {
      title: "Python for Real Subjects",
      desc: "Teachers will use Google Colab to learn how Python can visualize Science and Math data — like plotting a pendulum graph or solving equations — making abstract topics concrete.",
      icon: <ChartBarIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "AI Tools for Smart Classrooms",
      desc: "They’ll learn to use Teachable Machine for creating image/audio models, and ChatGPT to design learning games or interactive lessons customized to their subject.",
      icon: <AcademicCapIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Craft AI Prompts for Class Use",
      desc: "Teachers will practice writing smart prompts in ChatGPT for creating worksheets, quizzes, summaries, and lesson ideas. Bonus: use Canva to visualize the AI-generated content.",
      icon: <PencilSquareIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Simulate Science Models Using IoT",
      desc: "With Tinkercad Circuits, educators will build virtual sensors for temperature, light, or sound — ideal for demonstrating real-world concepts digitally in Physics or EVS.",
      icon: <WrenchIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Make ATL Connect to Curriculum",
      desc: "Teachers will map ATL projects to subject chapters — like designing a solar tracker while teaching renewable energy — using Google Docs and Canva to plan worksheets.",
      icon: <BookOpenIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Design Your Own ATL Lesson",
      desc: "In teams, teachers will create and present a mini ATL-integrated lesson plan using Slides or Docs — combining their subject with coding, AI, or robotics in a hands-on way.",
      icon: <LightBulbIcon className="w-6 h-6 text-primary" />,
    },
  ],
};

const workshop912 = {
  title: "Workshop for Classes 9–12: Build the Future — Explore AI, Code, and Create",
  desc: "An immersive tech workshop for high school students to dive into Python, AI, IoT, and app development — learning future-ready skills through real projects and creative challenges.",
  image: workshop912Img, // Replace with actual image import or URL
  bullets: [
    {
      title: "Python Mini Projects: From Code to Creation",
      desc: "Students will learn Python basics and build a mini calculator or quiz app using Google Colab and Replit. They’ll use conditionals, loops, and functions for real problem-solving.",
      icon: <WrenchScrewdriverIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Build & Understand AI Models",
      desc: "Using Teachable Machine, students will create image or sound classification models (e.g., different claps or hand gestures), then analyze how the model learns, visualizing it in Colab.",
      icon: <CpuChipIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "ChatGPT Bot Creator",
      desc: "Students will go beyond chatting — they’ll build custom Q&A bots for topics like science or exam prep using ChatGPT prompts and structure them like a chatbot using prompt templates.",
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "IoT in Action: Virtual Circuits",
      desc: "Using Tinkercad, students will simulate a motion-sensor security alarm or light-sensitive device. They'll connect sensors, buzzers, and LEDs — virtually wiring up the Internet of Things.",
      icon: <GlobeAltIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Design an App Without Code",
      desc: "With MIT App Inventor, students will create a basic Android app — like a health tracker, quiz app, or campus assistant. They'll learn UI/UX and logic flow using blocks, not code.",
      icon: <DevicePhoneMobileIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Demo Day: Pitch Like a Startup",
      desc: "Teams will present their projects — whether it’s an app, AI model, or IoT demo — through live presentations or slides, gaining confidence in tech communication and innovation.",
      icon: <PresentationChartBarIcon className="w-6 h-6 text-primary" />,
    },
  ],
};


// Workshops
const workshop68 = {
  title: "Workshop for Classes 6–8: Fun with Technology — Learn by Doing!",
  desc: "A hands-on learning experience designed to introduce students to coding, AI, electronics, and creativity through fun and engaging projects.",
  image: workshop68Img, // Replace with actual image import or URL if needed
  bullets: [
    {
      title: "Make Your Own Story Game in Python",
      desc: "Students will learn basic programming concepts like print, input, and if-else through a fun storytelling activity. They'll code their own 'choose your adventure' game in Google Colab.",
      icon: <CodeBracketIcon />,
    },
    {
      title: "Train an AI to Recognize You!",
      desc: "Kids will use Teachable Machine to train an AI model to recognize different poses or facial expressions. They’ll be amazed to see how the AI reacts to their own actions — in real time!",
      icon: <CpuChipIcon />,
    },
    {
      title: "Ask Like a Genius – Fun with ChatGPT",
      desc: "Students will explore how asking better questions gives cooler results. They'll create a poem, a short story, and even design a birthday card using ChatGPT and Canva.",
      icon: <ChatBubbleLeftRightIcon />,
    },
    {
      title: "Light Up a Virtual LED",
      desc: "Using Tinkercad Circuits, students will create a simple circuit that turns an LED on and off — all virtually! They'll learn how switches and motors work while having fun.",
      icon: <LightBulbIcon />,
    },
    {
      title: "Design a Smart School Gadget",
      desc: "Students will brainstorm and sketch a smart classroom device — like a bag detector or smart desk fan — using Scratch for animation and Canva for presentation posters.",
      icon: <PuzzlePieceIcon />,
    },
    {
      title: "Final Project: Show and Tell",
      desc: "Each group will pick a project (chatbot, smart sensor, AI image detector) and present it using a combination of tools they learned — showcasing creativity, logic, and teamwork.",
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
    description:
      'Advanced robotics kits, microcontrollers, sensors, and coding tools to design, build, and program intelligent machines.',
    icon: <FaRobot className="text-4xl text-indigo-600" />,
  },
  {
    title: 'Curriculum Development',
    description:
      'A well-structured curriculum mapped to academic standards, covering key concepts like robotics design, coding, sensors, and automation.',
    icon: <MdOutlineLibraryBooks className="text-4xl text-indigo-600" />,
  },
  {
    title: 'Teacher Training',
    description:
      'Comprehensive training programs that equip educators to confidently lead robotics sessions, operate lab equipment, and guide students in hands-on learning.',
    icon: <FaChalkboardTeacher className="text-4xl text-indigo-600" />,
  },
  {
    title: 'Curriculum-Aligned STEM Kits',
    description:
      'Hands-on experiments and custom-designed kits mapped to school curriculum, making STEM learning engaging and classroom-ready.',
    icon: <FaClipboardCheck className="text-4xl text-indigo-600" />,
  },
  {
    title: 'On-Demand Kit Manufacturing',
    description:
      'We build and deliver robotics kits and components on-demand, ensuring schools have exactly what they need, when they need it.',
    icon: <MdBuild className="text-4xl text-indigo-600" />,
  },
  {
    title: 'Skill Certification',
    description:
      'Structured programs to certify students in robotics, AI, and coding—building credentials for competitions, internships, and future careers.',
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

const benefitOne = {
  title: "For Students",
  desc: "Hands-on projects that make STEM learning engaging and practical",
  image: benefitOneImg, // Use image of students working on projects
  bullets: [
    {
      title: "Learn by Building",
      desc: "Create chatbots, smart devices, and AI models in just 6 days",
      icon: <CursorArrowRaysIcon />, // Or use <CubeIcon /> for "building"
    },
    {
      title: "No Expensive Labs Needed",
      desc: "Mobile-friendly tools like Tinkercad & Google Colab",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Future-Ready Skills",
      desc: "Master Python, AI, and IoT - perfect for ATL competitions",
      icon: <RocketLaunchIcon />, // Or <AcademicCapIcon />
    },
  ],
};

const benefitTwo = {
  title: "For Teachers",
  desc: "Ready-to-implement STEM curriculum with training support",
  image: benefitTwoImg, // Use image of teachers in workshop
  bullets: [
    {
      title: "NEP 2020 Aligned",
      desc: "Seamlessly integrate into Science & Math classes",
      icon: <DocumentCheckIcon />,
    },
    {
      title: "Certification Program",
      desc: "Upskill with ChatGPT and Python training",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Ongoing Support",
      desc: "Access to educator community and teaching resources",
      icon: <UserGroupIcon />,
    },
  ],
};

