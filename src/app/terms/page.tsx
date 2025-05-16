import React from 'react';
import { ClipboardDocumentIcon, UserIcon, LightBulbIcon, CalendarIcon, CreditCardIcon, ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const TermsOfService = () => {
  const termsSections = [
    {
      title: "Use of Services",
      icon: <ClipboardDocumentIcon className="h-8 w-8 text-blue-600" />,
      description: "Educational content, workshops, and lab support for lawful educational purposes only."
    },
    {
      title: "User Responsibilities",
      icon: <UserIcon className="h-8 w-8 text-green-600" />,
      description: "No misuse of materials. Under-18 participants require supervision. Accurate data provision required."
    },
    {
      title: "Intellectual Property",
      icon: <LightBulbIcon className="h-8 w-8 text-purple-600" />,
      description: "All content and materials are proprietary. No replication without express permission."
    },
    {
      title: "Workshop Participation",
      icon: <CalendarIcon className="h-8 w-8 text-orange-600" />,
      description: "Content subject to change. Not liable for third-party tool issues but provide alternatives."
    },
    {
      title: "Payment & Refunds",
      icon: <CreditCardIcon className="h-8 w-8 text-red-600" />,
      description: "Clear fee structure during registration. Refunds only for pre-workshop cancellations."
    },
    {
      title: "Limitation of Liability",
      icon: <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600" />,
      description: "Not liable for indirect damages. Schools/guardians responsible for student participation."
    },
    {
      title: "Modifications",
      icon: <ArrowPathIcon className="h-8 w-8 text-indigo-600" />,
      description: "Terms may be updated. Continued use constitutes acceptance of new terms."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Terms of Service
          </h2>
          <p className="text-lg">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
          <p className="mt-4 max-w-2xl mx-auto">
            By using Robogenic's services, you agree to these terms governing our educational programs and website usage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {termsSections.map((section, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-100"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 p-2 rounded-full">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <p className="mt-2">{section.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg shadow-md max-w-4xl mx-auto border-t-4 border-blue-200">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-4">
              For questions about these Terms of Service, please contact:
            </p>
            <a 
              href="mailto:robogenic25@gmail.com" 
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              robogenic25@gmail.com
            </a>
            <p className="mt-6 text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;