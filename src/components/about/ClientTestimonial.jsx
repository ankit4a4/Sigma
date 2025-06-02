import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ClientTestimonial = () => {
  return (
    <div className="w-full py-20 px-[5vw] bg-white flex flex-col items-center justify-center text-center">
      <h2 className="text-[5vw] md:text-[3.5vh] font-bold text-black mb-4">
        Ready to push your medical devices towards success?
      </h2>
      <p className="text-[4vw] md:text-[2.5vh] text-gray-600 mb-10">
        Contact us to learn more about how we can help you meet the most demanding safety and performance standards in the industry.
      </p>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="flex items-center justify-center p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
          <FaMapMarkerAlt className="text-[6vw] md:text-[5vh] text-blue-600 mr-4" />
          <div>
            <h3 className="text-black text-[4vw] md:text-[3.5vh] font-semibold">
              Our Location
            </h3>
            <p className="text-gray-600 text-[3.5vw] md:text-[2.5vh]">
              490 Sawgrass Corporate Parkway <br />
              Suite 130 Sunrise, FL 33325
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
          <FaPhoneAlt className="text-[6vw] md:text-[5vh] text-green-600 mr-4" />
          <div>
            <h3 className="text-black text-[4vw] md:text-[3.5vh] font-semibold">
              Call Us
            </h3>
            <p className="text-gray-600 text-[3.5vw] md:text-[2.5vh]">
              (305) 239-4441
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
          <FaEnvelope className="text-[6vw] md:text-[5vh] text-red-600 mr-4" />
          <div>
            <h3 className="text-black text-[4vw] md:text-[3.5vh] font-semibold">
              Email Us
            </h3>
            <p className="text-gray-600 text-[3.5vw] md:text-[2.5vh]">
              sigmabiomedical@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;

