import React from 'react';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Kitchen Price</h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Pick your layout, add your kitchen's measurements and get an estimate
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Premium', 'Essentials', 'Signature'].map((plan) => (
            <div key={plan} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{plan}</h3>
              <div className="text-3xl font-bold mb-6">₹X,XX,XXX</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Feature 1
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Feature 2
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Feature 3
                </li>
              </ul>
              <button className="w-full bg-black text-white py-3 rounded-full text-lg font-semibold hover:bg-gray-800">
                CALCULATE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};