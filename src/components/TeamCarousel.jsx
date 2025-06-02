import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const TeamCarousel = () => {
  const teamMembers = [
    {
      name: "Dr. Liana Carter",
      title: "Biomedical Scientist",
      image:
        "https://images.unsplash.com/photo-1583912268183-a34d41fe464a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Expert in clinical diagnostics and lab automation. Leading Sigma’s innovation in biomaterial safety.",
    },
    {
      name: "Prof. David Reynolds",
      title: "Regulatory Expert (FDA)",
      image:
        "https://images.unsplash.com/photo-1576089388754-68c54a863b60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Over 20 years of FDA regulatory experience. Ensures product compliance and clinical approval processes.",
    },
    {
      name: "Dr. Anika Mehra",
      title: "Sterilization Specialist",
      image:
        "https://images.unsplash.com/photo-1583912268183-a34d41fe464a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Leads the sterilization protocols for medical device safety and cleanroom processes.",
    },
    {
      name: "Dr. Erik Thompson",
      title: "Biocompatibility Analyst",
      image:
        "https://images.unsplash.com/photo-1583912267856-1fcdf6e0a1f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Analyzes chemical and biological interactions. Ensures every Sigma product passes ISO 10993 standards.",
    },
  ];
  return (
    <section className="bg-white py-16 px-4">
      <div className="text-center mb-12">
        <p className="text-[#b2a77c] font-medium">Meet Our Experts</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1c1e2f] mt-2">
          Qualified Scientists
        </h2>
        <div className="w-16 h-[2px] bg-[#b2a77c] mx-auto mt-4"></div>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation]}
        className="max-w-6xl mx-auto"
      >
        {teamMembers.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/50 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-[#b2a77c]">{member.title}</p>
                <p className="text-sm mt-2">{member.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <button className="custom-prev border absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#b2a77c] text-white p-2 rounded-full shadow-lg z-[999px] hover:bg-[#a89a6a] transition">
    ❮
  </button>

  {/* Custom Next Button */}
  <button className="custom-next absolute top-1/2 -right-6 transform -translate-y-1/2 bg-[#b2a77c] text-white p-2 rounded-full shadow-lg z-50 hover:bg-[#a89a6a] transition">
    ❯
  </button>
      </Swiper>
    </section>
  );
};

export default TeamCarousel;
