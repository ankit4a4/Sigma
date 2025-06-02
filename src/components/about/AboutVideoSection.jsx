import React from 'react';
import aboutImg1 from "../../assets/Images/about-docter-1.jpg";
import aboutImg2 from "../../assets/Images/about-docter-2.jpg";
import aboutImg3 from "../../assets/Images/about-docter-3.jpg";


const AboutContentSection = () => {
    const contentData = [
        {
            titleTop: "Our Story",
            titleBottom: "Sigma Scientific Services",
            text: "Sigma Scientific Services, also known as Sigma Biomedical, is a leading laboratory in medical device safety and performance testing. Accredited by A2LA under the ISO/IEC 17025 quality management standard and by the FDA through the ASCA program, we specialize in testing medical devices. From ultrasound systems and transducers to endoscopes and physiotherapy equipment, we offer cutting-edge solutions that meet globally recognized standards.",
            image: aboutImg1,
            imageRight: true,
        },
        {
            titleTop: "What We Do",
            titleBottom: "Medical Device Testing Experts",
            text: "Sigma Scientific Services, also known as Sigma Biomedical, is a leading laboratory in medical device safety and performance testing. Accredited by A2LA under the ISO/IEC 17025 quality management standard and by the FDA through the ASCA program, we specialize in testing medical devices. From ultrasound systems and transducers to endoscopes and physiotherapy equipment, we offer cutting-edge solutions that meet globally recognized standards.",
            image: aboutImg2,
            imageRight: false,
        },
        {
            titleTop: "Our Accreditations",
            titleBottom: "A2LA & FDA Certified",
            text: "We are proud to be an A2LA-accredited laboratory under the ISO/IEC 17025 standard, validating our capacity to conduct high-level acoustic tests. Additionally, we are FDA-accredited under the ASCA program, ensuring that our medical device safety testing complies with the highest international standards.",
            image: aboutImg3,
            imageRight: true,
        },
    ];

    return (
        <div className="w-full px-[5vw] py-16 bg-white space-y-20">
            {contentData.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center justify-between gap-10 ${!item.imageRight && 'md:flex-row-reverse'}`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    {/* Text Section */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-[6vw] md:text-[5vh] font-bold text-black tracking-wide leading-tight">
                            {item.titleTop}
                        </h2>
                        <h3 className="text-[7vw] md:text-[5.5vh] font-extrabold text-[#1F3A73] mt-1 mb-4">
                            {item.titleBottom}
                        </h3>
                        <p className="mt-2 text-[4.5vw] md:text-[2.5vh] text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
                            {item.text}
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                        <img src={item.image} alt={item.titleTop} className="w-full h-full object-cover" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutContentSection;
