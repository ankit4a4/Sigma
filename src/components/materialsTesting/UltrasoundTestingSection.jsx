import React from "react";
import ultrasoundImg1 from "../../assets/Images/materialtest1.jpg"; 
import ultrasoundImg2 from "../../assets/Images/materialtest2.jpg"; 
import ultrasoundImg3 from "../../assets/Images/materialtest3.webp"; 

const data = [
  {
    heading: "Testing Services",
    content: `Assessment of physical properties of gels and probe covers used in diagnostic ultrasound imaging is important for safety and effectiveness reasons. Ultrasound gel testing and probe covers manufacturers need to demonstrate that these materials do not cause the ultrasound signals to degrade, reduce their intensity or affect the propagation of ultrasound.`,
    imagePosition: "right",
    img : ultrasoundImg1
  },
  {
    heading: "Measurements",
    content: `Material properties of ultrasound gel testing and probe covers are measured. Measurements include acoustic speed, acoustic attenuation, acoustic impedance and viscosity. Assessment of material property equivalence of unaged and aged gels and probe covers is also performed using acoustic test methods.`,
    imagePosition: "left",
    img : ultrasoundImg2
  },
  {
    heading: "Test Reporting",
    content: `Measurements and test reports include:
    • Measurement setup and test methods
    • Speed of sound
    • Acoustic attenuation
    • Material density
    • Acoustic impedance
    • Viscosity
    • pH
    • Conductivity`,
    imagePosition: "right",
    img : ultrasoundImg3
  },
];

const UltrasoundTestingSection = () => {
  return (
    <div className="bg-white py-16 px-[5vw] space-y-20">
      {data.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col-reverse ${
            item.imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-10`}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              {item.heading}
            </h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {item.content}
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={item.img}
              alt={item.heading}
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UltrasoundTestingSection;
