import React from "react";
import img1 from "../../assets/Images/TestingServices1.png";
import img2 from "../../assets/Images/TestingServices4.jpg";
import img3 from "../../assets/Images/TestingServices3.jpg";

const EndoscopeTestingSection = () => {
    return (
        <div className="px-[5vw] py-[6vh] bg-white space-y-16">
            {/* Section 1 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8" data-aos="fade-up">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Testing Services</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We conduct testing and performance evaluation of medical endoscopes and ophthalmic instruments
                        and provide test reports to use in 510(k) submissions to the FDA as well as in international
                        regulatory submissions for medical device approval and registration. Measurements are aimed to
                        evaluate device effectiveness for its intended use and to assess if the subject endoscope provides
                        equivalent or better performance than predicate endoscopes. Sigma Scientific Services is an
                        A2LA and FDA accredited medical safety and performance test laboratory.
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <img src={img1} alt="Testing Services" className="rounded-xl shadow-md h-full w-full" />
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col lg:flex-row items-center gap-8" data-aos="fade-up">
                <div className="w-full lg:w-1/2">
                    <img src={img2} alt="Test Methods" className="rounded-xl shadow-md h-full w-full" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Test Methods</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Testing of medical endoscope systems as per the following relevant international optics and photonics standards for medical endoscopes and endotherapy devices:
                        <br /><br />
                        <strong>Standards Covered:</strong><br />
                        IEC 60601-2-18, ISO 8600 series, ISO 15739, ISO 12233, IEC 62471, ISO 15004-1 and 15004-2.
                    </p>
                </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8" data-aos="fade-up">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Test Reporting</h2>
                    <p className="text-gray-700 leading-relaxed">
                        <strong>Test Reports include:</strong><br />
                        Field of View, Direction of View, Depth of Field (DOF), Optimum Working Distance, Noise and Dynamic Range,
                        Geometric Distortion, Image Intensity Uniformity (IIU), Color performance, Video Latency, Photobiological safety.
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <img src={img3} alt="Test Reporting" className="rounded-xl shadow-md h-full w-full" />
                </div>
            </div>
        </div>
    );
};

export default EndoscopeTestingSection;
