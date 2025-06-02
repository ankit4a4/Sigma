import React, { useState } from "react";
import Hero from "../components/Hero";
import digonstic from "../assets/Images/diagnostig.png";
import patientM from "../assets/Images/patientMoni.png";
import endoscope from "../assets/Images/Endoscope.png";
import ultrasound from "../assets/Images/ultrasound.jpeg";
import materials from "../assets/Images/materials.png";
import physiotherapy from "../assets/Images/physiotherapy.png";
import aboutImage from "../assets/Images/about-man.jpg";
import scientist from "../assets/Images/science.jpg";
import client from "../assets/Images/client.jpg";
import { motion } from "framer-motion";
import {
  Microscope,
  HeartPulse,
  ClipboardList,
  FlaskConical,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import { MdScience } from "react-icons/md";
import TeamCarousel from "../components/TeamCarousel";
const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const infoItems = [
    {
      icon: digonstic,
      title: "Diagnostic ECG",
      subtitle: "Book Your",
    },
    {
      icon: patientM,
      title: "Patient Monitors",
      subtitle: "Get Free",
    },
    {
      icon: endoscope,
      title: "Endoscope Testing",
      subtitle: "You Can Easily",
    },
    {
      icon: ultrasound,
      title: "Ultrasound",
      subtitle: "You Can Easily",
    },
    {
      icon: materials,
      title: "Materials",
      subtitle: "You Can Easily",
    },
    {
      icon: physiotherapy,
      title: "Physiotherapy",
      subtitle: "You Can Easily",
    },
  ];
  const services = [
    {
      title: "Medical Device Testing",
      icon: Microscope,
      description:
        "Comprehensive testing for electrical safety, EMC, and performance to ensure compliance with FDA and international regulations.",
    },
    {
      title: "Biocompatibility Assessment",
      icon: HeartPulse,
      description:
        "Material evaluations for biological safety per ISO 10993 to support global medical device submissions.",
    },
    {
      title: "Regulatory Consulting",
      icon: ClipboardList,
      description:
        "Expert FDA and CE compliance guidance from concept through clearance.",
    },
    {
      title: "Custom Test Protocols",
      icon: FlaskConical,
      description:
        "Tailored testing solutions for unique device requirements and innovation-driven projects.",
    },
    {
      title: "Performance Validation",
      icon: Gauge,
      description:
        "Simulated use and stress testing to verify device function in critical conditions.",
    },
    {
      title: "Quality & Compliance Audits",
      icon: ShieldCheck,
      description:
        "Systematic audits to ensure ISO/IEC 17025, FDA ASCA, and regulatory alignment.",
    },
  ];

  return (
    <div>
      <Hero />
      <div className="bg-[#f6f4ed] py-5 md:py-20 px-4">
        <div className="max-w-screen-xl mx-auto place-content-center grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoItems.map((item, index) => (
            <div key={index} className="flex bg-white shadow-md">
              <img className=" w-20  h-20  object-cover" src={item.icon}></img>
              <div className="p-4 flex flex-col justify-center">
                <span className="text-sm text-[#857b57]">{item.subtitle}</span>
                <h4 className="text-lg md:text-xl font-PlayfairB tracking-wide text-gray-800">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* about */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image with offset border */}
          <div className="relative w-full h-full">
            <div className="absolute -left-6 -top-6 w-full h-full bg-[#c5b690] z-0 hidden md:block"></div>
            <img
              src={aboutImage}
              alt="About us"
              className="relative z-10 w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-PlayfairM text-gray-800">
              About Us
            </h2>
            <p className=" leading-relaxed text-gray-600 ">
              Sigma Scientific Services is a medical device safety and
              performance testing laboratory. Sigma is accredited by A2LA under
              the ISO/IEC 17025 quality management standard and is accredited by
              the FDA under the ASCA program as a medical device safety testing
              laboratory.
            </p>
            {expanded && (
              <div className="mt-4 text-gray-600 space-y-4">
                <p>
                  With decades of combined experience in biomedical engineering
                  and compliance testing, our expert team ensures precise,
                  reliable, and timely evaluations of medical devices to help
                  manufacturers meet global regulatory standards.
                </p>
                <p>
                  Our state-of-the-art lab is equipped to conduct a wide range
                  of electrical safety, EMC, and performance tests in accordance
                  with the latest ANSI, AAMI, IEC, and ISO standards. We are
                  committed to helping companies streamline their path to FDA,
                  CE, and international market approvals.
                </p>
                <p>
                  At Sigma, we believe in transparency, quality, and long-term
                  partnerships with our clients to bring safe and effective
                  medical devices to the world.
                </p>
              </div>
            )}

            <button
              className="bg-[#c5b690] text-white font-semibold px-6 py-3 hover:bg-[#b2a278] transition"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show Less" : "More About Us.."}
            </button>
            {/* <div>
            <img
              src={signature}
              alt="Signature"
              className="mt-4 w-40"
            />
          </div> */}
          </div>
        </div>
      </div>

      <section className="py-20 bg-[#f6f4ed] px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#c5b690] font-medium uppercase tracking-wider">
            Our Services
          </p>
          <h2 className="text-4xl font-PlayfairM text-gray-800 mb-12">
            How Can We Help You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 text-left hover:shadow-md transition"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 flex items-center justify-center border border-[#c5b690] rounded-full mb-4">
                    <Icon className="text-[#c5b690] w-6 h-6" />
                  </div>
                  <h3 className="text-lg tracking-wide font-PlayfairR text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-10">
          <img
            src={scientist}
            alt="Scientist"
            className="w-full h-auto object-cover rounded-xl"
          />
          <div>
            <p className="text-[#c5b690] text-sm uppercase mb-2 tracking-wide">
              What Clients Say
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Client Testimonial
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              “Sigma Scientific played a pivotal role in helping us meet
              stringent FDA requirements with their precise and fast testing
              services. Their team was knowledgeable, responsive, and always
              professional.”
            </p>
            <div className="flex items-center gap-4">
              <img
                src={client}
                alt="Client"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">
                  Dr. Michelle Carter
                </p>
                <span className="text-sm text-gray-500">
                  Regulatory Affairs, MedTech Corp
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1c1e2f] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <p className="text-[#c5b690] uppercase text-sm tracking-wide mb-2">
              For Our Medical Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Free Consultation
            </h2>
            <p className="mb-3 text-gray-300">
              Call us 24/7 at{" "}
              <span className="text-[#c5b690] font-medium">(800) 555-TEST</span>{" "}
              or fill out the form below.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Whether you’re launching a new device or need guidance through FDA
              or CE submission, Sigma's team offers free preliminary assessments
              and consultation to get you started the right way.
            </p>
          </div>

          {/* Right Side - Form */}
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#2c2e3e] text-white px-4 py-3 rounded outline-none w-full"
              />
              <input
                type="text"
                placeholder="Phone"
                className="bg-[#2c2e3e] text-white px-4 py-3 rounded outline-none w-full"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#2c2e3e] text-white px-4 py-3 rounded outline-none w-full"
              />
              <select className="bg-[#2c2e3e] text-white px-4 py-3 rounded outline-none w-full">
                <option>Select Service</option>
                <option>Device Safety Testing</option>
                <option>Performance Evaluation</option>
                <option>Biocompatibility</option>
                <option>Regulatory Help</option>
              </select>
            </div>
            <textarea
              placeholder="Tell us more about your project..."
              rows={5}
              className="bg-[#2c2e3e] text-white px-4 py-3 rounded w-full outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#c5b690] text-black font-semibold px-6 py-3 rounded hover:bg-[#b2a278] transition"
            >
              Book Consultation
            </button>
          </form>
        </div>
      </section>
      <div>
        <TeamCarousel />
      </div>
    </div>
  );
};

export default Home;
