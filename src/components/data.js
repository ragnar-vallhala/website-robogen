import {
  RocketLaunchIcon,
  DocumentCheckIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

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

export {benefitOne, benefitTwo};
