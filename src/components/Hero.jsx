import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import ecg from "../assets/Images/ECG.jpg";
import patentMonitor from "../assets/Images/Patient_Monitors.jpg";
import catheters from "../assets/Images/Ultrasound_Catheters.jpg";
import ultrasound from "../assets/Images/UltraSound.jpg";

const slides = [
  {
    title: "Diagnostic ECG",
    subtitle: "High-quality ECG devices for accurate cardiac diagnosis.",
    btn: "Explore ECG Products",
    image: ecg,
  },
  {
    title: "Patient Monitors",
    subtitle: "Advanced monitoring solutions for comprehensive patient care.",
    btn: "View Monitor Range",
    image: patentMonitor,
  },
  {
    title: "Endoscope Testing",
    subtitle: "Reliable and precise testing for endoscopes and accessories.",
    btn: "Learn About Testing Services",
    image: ultrasound,
  },
  {
    title: "Ultrasound",
    subtitle: "Cutting-edge ultrasound systems for various clinical applications.",
    btn: "Discover Ultrasound Machines",
    image: ultrasound,
  },
  {
    title: "Ultrasound Catheters",
    subtitle: "Specialized ultrasound catheters for interventional procedures.",
    btn: "See Ultrasound Catheters",
    image: catheters,
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-max">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[30rem] md:h-screen bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 w-full h-full flex items-center justify-start px-6 md:px-24">
                {/* Key is used to trigger re-mount + animation */}
                <div className="max-w-2xl" key={activeIndex === index ? `${index}-active` : index}>
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white text-sm md:text-lg mb-4"
                  >
                    Product Testing
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-bold text-white leading-tight"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="text-2xl md:text-3xl font-normal text-white leading-tight mt-2"
                  >
                    {slide.subtitle}
                  </motion.h2>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-8 px-6 py-3 bg-[#B49C6A] text-white font-semibold hover:bg-white hover:text-[#B49C6A] transition duration-300 relative group"
                  >
                    <span className="relative z-10">{slide.btn}</span>
                    <span className="absolute group-hover:-left-18 bottom-6/12 -left-12 w-16 h-[2px] bg-white group-hover:bg-[#B49C6A] transition-all duration-300"></span>
                  </motion.button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
