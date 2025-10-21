import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

const industries = [
  {
    name: "Manufacturing",
    description: "Automated production lines, quality control systems, and industrial robotics solutions that enhance efficiency and reduce operational costs.",
    solutions: [
      "Industrial Robotics & Automation",
      "Predictive Maintenance",
      "Quality Inspection AI",
      "Supply Chain Optimization"
    ],
    icon: "🏭"
  },
  {
    name: "Healthcare",
    description: "Medical robotics, patient monitoring systems, and AI-powered diagnostic tools that improve healthcare delivery and patient outcomes.",
    solutions: [
      "Medical Robotics",
      "Remote Patient Monitoring",
      "AI Diagnostics",
      "Hospital Automation"
    ],
    icon: "🏥"
  },
  {
    name: "Logistics & Supply Chain",
    description: "Smart warehouse automation, fleet management, and real-time tracking solutions that optimize logistics operations.",
    solutions: [
      "Autonomous Guided Vehicles",
      "Smart Inventory Management",
      "Route Optimization AI",
      "Real-time Tracking IoT"
    ],
    icon: "🚚"
  },
  {
    name: "Agriculture",
    description: "Precision farming, automated harvesting, and crop monitoring systems that increase yield and reduce resource consumption.",
    solutions: [
      "Agricultural Drones",
      "Smart Irrigation Systems",
      "Crop Health Monitoring",
      "Automated Harvesting"
    ],
    icon: "🌱"
  },
  {
    name: "Energy & Utilities",
    description: "Smart grid management, predictive maintenance, and energy optimization solutions for sustainable operations.",
    solutions: [
      "Smart Grid IoT",
      "Predictive Maintenance",
      "Energy Consumption AI",
      "Remote Monitoring"
    ],
    icon: "⚡"
  },
  {
    name: "Retail & E-commerce",
    description: "Automated inventory management, customer analytics, and smart retail solutions that enhance customer experience.",
    solutions: [
      "Smart Inventory Systems",
      "Customer Behavior Analytics",
      "Automated Checkout",
      "Personalized Recommendations"
    ],
    icon: "🛍️"
  }
];

const technologies = [
  {
    name: "Robotics",
    description: "Custom robotic solutions including industrial arms, AGVs, and specialized automation systems",
    features: ["6-Axis Robotic Arms", "Autonomous Navigation", "Computer Vision", "Motion Planning"]
  },
  {
    name: "Internet of Things",
    description: "End-to-end IoT solutions with sensors, connectivity, and cloud integration",
    features: ["Sensor Networks", "Real-time Data", "Cloud Integration", "Remote Control"]
  },
  {
    name: "Artificial Intelligence",
    description: "AI/ML models for prediction, optimization, and intelligent decision making",
    features: ["Machine Learning", "Computer Vision", "Predictive Analytics", "Natural Language Processing"]
  },
  {
    name: "Software Development",
    description: "Custom software platforms and applications tailored to your business needs",
    features: ["Web Applications", "Mobile Apps", "Dashboard Analytics", "API Integration"]
  }
];

export default function IndustrySolutions() {
  return (
    <Container>
      {/* Industries We Serve Section */}
      <SectionTitle 
        preTitle="Industries We Serve" 
        title="Transforming Sectors with Deep Tech"
      >
        We deliver cutting-edge solutions across multiple industries, driving digital transformation and operational excellence.
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="text-4xl mb-4">{industry.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              {industry.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {industry.description}
            </p>
            <ul className="space-y-2">
              {industry.solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Core Technologies Section */}
      <SectionTitle 
        preTitle="Our Technologies" 
        title="Deep Tech Expertise"
      >
        Leveraging cutting-edge technologies to build innovative solutions that solve complex business challenges.
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-blue-100 dark:border-gray-700 hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
              {tech.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {tech.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tech.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-blue-200 dark:border-gray-600"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-16">
        <SectionTitle 
          preTitle="Our Process" 
          title="From Concept to Deployment"
        >
          We follow a structured approach to ensure successful implementation of your deep tech solutions.
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {[
            {
              step: "01",
              title: "Discovery & Analysis",
              description: "Understand your business challenges and technical requirements"
            },
            {
              step: "02",
              title: "Solution Design",
              description: "Architect the optimal technology stack and system design"
            },
            {
              step: "03",
              title: "Development & Testing",
              description: "Build robust solutions with rigorous quality assurance"
            },
            {
              step: "04",
              title: "Deployment & Support",
              description: "Implement and maintain with ongoing optimization"
            }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                {process.step}
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                {process.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Transform Your Business with Deep Tech?
        </h3>
        <p className="text-xl mb-8 opacity-90">
          Let&apos;s discuss how our robotics, IoT, and AI solutions can drive your digital transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Schedule a Consultation
          </a>
          <a
            href="/case-studies"
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300"
          >
            View Case Studies
          </a>
        </div>
      </div>
    </Container>
  );
}