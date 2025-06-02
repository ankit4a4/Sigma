import React from "react";
import TestImage from "../../assets/Images/electrical.jpg";
import TestImage2 from "../../assets/Images/electrical2.jpg";
import TestImage3 from "../../assets/Images/electrical3.webp";

const ElectricalTestingSection = () => {
    return (
        <div className="w-full px-[5vw] py-16 space-y-24 bg-white">
            {/* Section 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                        IEC 60601-1 Testing Services
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Medical electrical safety testing of medical devices as per the IEC 60601-1 standard and the U.S. Food and Drug Administration (FDA) requirements. Compliance with these standards and requirements is essential to ensure that medical electrical devices are safe for their intended use. The IEC 60601-1 encompasses a set of standards that address the safety and fundamental performance requirements for medical electrical safety equipment and associated systems. Sigma Scientific is ISO/IEC 17025 accredited and also FDA ASCA accredited as a medical device safety and performance test laboratory to perform medical electrical safety testing of medical products.
                    </p>
                </div>

                {/* Image */}
                <div>
                    <img src={TestImage} alt="Electrical Testing" className="w-full rounded-2xl shadow-lg" />
                </div>
            </div>

            {/* Section 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div>
                    <img src={TestImage2} alt="IEC 60601-1 Test Methods" className="w-full rounded-2xl shadow-lg" />
                </div>

                {/* Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                        IEC 60601-1 Test Methods
                    </h2>
                    <p className="text-gray-700 text-lg">
                        As per the IEC 60601-1 and ANSI AAMI ES60601-1 standards, covering electrical aspects such as insulation, grounding, leakage current testing, and resistance to electrical stress. It also covers labeling requirements, as well as mechanical safety, software safety, and environmental safety. IEC 60601-1 Part One, also known as the General Standard, addresses fundamental safety requirements and essential performance criteria applicable to all medical electrical safety testing equipments.
                    </p>
                </div>
            </div>

            {/* Section 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                        Test Reporting
                    </h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Measurements and test reports include, among others:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                        <li>Leakage Current Testing</li>
                        <li>Dielectric strength</li>
                        <li>Protection against mechanical hazards</li>
                        <li>Labeling compliance</li>
                        <li>Environmental compliance</li>
                        <li>Accuracy of controls and instruments</li>
                        <li>ME systems</li>
                    </ul>
                </div>
                {/* Image */}
                <div>
                    <img src={TestImage3} alt="Test Reporting" className="w-full rounded-2xl shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default ElectricalTestingSection;
