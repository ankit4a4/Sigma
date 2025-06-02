import React from 'react';
import ultrasoundImg from '../../assets/Images/UltraSound.jpg'; 

const UltrasoundSafetySection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20" data-aos="fade-up">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 leading-tight">
            Optimize the Safety and Efficiency of Your Diagnostic Ultrasound Systems
          </h2>
          <p className="text-gray-700 text-lg">
            Ensure your device's success with fast, accurate FDA-approved acoustic output testing.
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ultrasoundImg}
              alt="Ultrasound Device Testing"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltrasoundSafetySection;
