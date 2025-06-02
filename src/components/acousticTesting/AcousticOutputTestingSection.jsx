import React from 'react';
import { FaRegCheckCircle, FaExclamationCircle, FaShieldAlt, FaSearch } from 'react-icons/fa';

const AcousticOutputTestingSection = () => {
   
    return (
        <div className="py-20 px-[5vw] bg-gray-100">
            <div className="text-center mb-12">
                <h2 className="text-[5vw] md:text-[4.5vh] font-semibold text-blue-600 uppercase tracking-wider">
                    Why Your Device Needs Our Acoustic Output Tests?
                </h2>
                <p className="text-gray-600 text-[4vw] md:text-[2.5vh] mt-4">
                    Meeting FDA regulations and international standards is a constant challenge. A single mistake in testing could delay your 510(k) clearance or, worse, compromise patient safety.
                </p>
                <p className="text-gray-600 text-[3.5vw] md:text-[2.2vh] mt-4">
                    At Sigma Scientific, we offer comprehensive acoustic output testing services, ensuring your device not only meets but exceeds safety requirements.
                </p>
            </div>

         
        </div>
    );
}

export default AcousticOutputTestingSection;
