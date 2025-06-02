import React from 'react';
import { FaCheckCircle, FaGlobeAmericas, FaFileAlt, FaMicroscope } from 'react-icons/fa';

const AccreditationHighlightsSection = () => {
    return (
        <div className="w-full py-20 px-[5vw] bg-white flex flex-col items-center justify-center text-center">
            <h2 className="text-[8vw] md:text-[3vw] text-[#2B48E6] font-bold  mb-4">
                Why Choose Sigma Scientific?
            </h2>
            <p className="text-[4vw] md:text-[2.5vh] text-gray-600 mb-10">
                We provide accurate, reliable, and fast testing services to ensure your product's success.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {/* Box 1 */}
                <div className="flex flex-col gap-4 items-center justify-center p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <FaCheckCircle className="text-[6vw] md:text-[5vh] text-blue-600 mr-4" />
                    <div>
                        <h3 className="text-black text-[4vw] md:text-[3.5vh] font-semibold">
                            FDA and A2LA accreditation
                        </h3>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="flex flex-col gap-4 items-center justify-center p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <FaGlobeAmericas className="text-[6vw] md:text-[5vh] text-green-600 mr-4" />
                    <div>
                        <h3 className="text-black text-[4vw] md:text-[3.5vh] font-semibold">
                            Global Regulatory Compliance
                        </h3>
                    </div>
                </div>

                {/* Box 3 */}
                <div className="flex flex-col gap-4 items-center justify-center p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <FaFileAlt className="text-[6vw] md:text-[5vh] text-purple-600 mr-4" />
                    <div>
                        <h3 className="text-black text-[4vw] md:text-[3.5vh] font-semibold">
                            510(k) Ready Reports
                        </h3>
                    </div>
                </div>

                {/* Box 4 */}
                <div className="flex flex-col gap-4 items-center justify-center p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <FaMicroscope className="text-[6vw] md:text-[5vh] text-red-600 mr-4" />
                    <div>
                        <h3 className="text-black text-[4vw] md:text-[3.5vh] font-semibold">
                            Advanced Measurement Technology
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccreditationHighlightsSection;






