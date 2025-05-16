import React from 'react';
import { ShieldCheckIcon, EnvelopeIcon, LockClosedIcon, UserGroupIcon, DevicePhoneMobileIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const PrivacyPolicy = () => {
  const privacyFeatures = [
    {
      title: "Information We Collect",
      icon: <DocumentTextIcon className="h-8 w-8 text-blue-600" />,
      items: [
        "Personal Details: Name, email, phone number",
        "Institutional Data: School name, class level",
        "Usage Data: IP address, browser type",
        "Workshop Data: Feedback forms, project submissions"
      ]
    },
    {
      title: "How We Use Information",
      icon: <LockClosedIcon className="h-8 w-8 text-green-600" />,
      items: [
        "Organize and improve workshops",
        "Communicate updates and materials",
        "Personalize your experience",
        "Improve our services",
        "Ensure safety and security"
      ]
    },
    {
      title: "Data Protection",
      icon: <ShieldCheckIcon className="h-8 w-8 text-purple-600" />,
      items: [
        "Encrypted data storage",
        "Limited access to authorized personnel",
        "Regular security reviews",
        "GDPR-compliant third parties",
        "No data trading or selling"
      ]
    },
    {
      title: "Your Rights",
      icon: <UserGroupIcon className="h-8 w-8 text-orange-600" />,
      items: [
        "Access, correct, or delete your data",
        "Unsubscribe from communications",
        "Parental consent for under 18",
        "Clear authorization for student data"
      ]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Privacy Policy
          </h2>
          <p className="text-lg">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
          <p className="mt-4 max-w-2xl mx-auto">
            At Robogenic, we are committed to protecting your personal information and being transparent about our data practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {privacyFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 p-2 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <ul className="space-y-2 pl-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <EnvelopeIcon className="h-8 w-8 text-red-600 mr-4" />
            <h3 className="text-xl font-semibold">Contact Us</h3>
          </div>
          <p className="mb-4">
            For any privacy-related questions or requests, please contact us at:
          </p>
          <a 
            href="mailto:robogenic25@gmail.com" 
            className="text-blue-600 hover:underline font-medium"
          >
            robogenic25@gmail.com
          </a>
          <p className="mt-6 text-sm text-gray-600">
            We may update this policy periodically. Please check back for the latest version.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;