import React from 'react';

const steps = [
  {
    number: 1,
    title: 'Initial Consultation',
    description: 'Meet with our design experts to discuss your vision and requirements.'
  },
  {
    number: 2,
    title: 'Design Analysis',
    description: 'We analyze your space and create detailed measurements and plans.'
  },
  {
    number: 3,
    title: 'Design & Budgeting',
    description: 'Review custom designs and finalize your budget.'
  },
  {
    number: 4,
    title: 'Installation',
    description: 'Professional installation with attention to every detail.'
  }
];

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">How We Work</h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Step by Step Guide to Achieving Your Kitchen Goals
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <div className="text-6xl font-bold text-black/10 mb-4">
                  {String(step.number).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {step.number < steps.length && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gray-300 transform translate-x-full"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Visit our experience centers to have a look and feel of our modular solutions. 
            We're committed to help you find your style and budget.
          </p>
        </div>
      </div>
    </section>
  );
};