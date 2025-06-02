import React from 'react'
import { FaComments, FaUserAlt, FaBrain, FaClock, FaHandsHelping, FaRegSmile } from 'react-icons/fa'
import Image from "../../assets/Images/aboutUsImagejpg.jpg"

const cardData = [
    {
        icon: <FaComments className="text-blue-600 text-[4vw] md:text-[5vh]" />,
        title: "Clear and Effective Communication",
        description: "We value fast and efficient communication, knowing it’s essential for the success of any project."
    },
    {
        icon: <FaUserAlt className="text-green-600 text-[4vw] md:text-[5vh]" />,
        title: "Knowledge and Experience",
        description: "Our team of experts brings more than 100 years of combined experience in medical devices, regulatory affairs, and quality management systems."
    },
    {
        icon: <FaBrain className="text-yellow-600 text-[4vw] md:text-[5vh]" />,
        title: "Quality and Excellence",
        description: "Quality is at the core of what we do. We aim to provide a service that not only meets but exceeds expectations."
    },
    {
        icon: <FaClock className="text-red-600 text-[4vw] md:text-[5vh]" />,
        title: "Time and Opportunities",
        description: "We understand the importance of time in project development. That’s why we offer precise time estimates and stick to deadlines rigorously."
    },
    {
        icon: <FaHandsHelping className="text-purple-600 text-[4vw] md:text-[5vh]" />,
        title: "Customer Satisfaction",
        description: "Our mission is to ensure customer satisfaction. We excel in meeting deadlines, managing project costs, offering outstanding customer service, and delivering effective results."
    },
    {
        icon: <FaRegSmile className="text-orange-600 text-[4vw] md:text-[5vh]" />,
        title: "Customer Service",
        description: "We are committed to providing exceptional customer service, ensuring a seamless experience throughout every phase of the project."
    }
]

const AreaOfPractice = () => {
    return (
        <div
            className="relative w-full py-20 px-[5vw] bg-cover bg-center"
            style={{ backgroundImage: `url(${Image})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Content */}
            <div className="relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-white text-[5vw] md:text-[3.5vh] font-semibold uppercase tracking-wider"></h2>

                    <p className="text-white text-[5vw] md:text-[4.5vh] font-bold mt-2">
                        Our <span className="text-blue-400"> Core Values</span>
                    </p>

                    <div className="mt-2 w-16 md:w-24 h-[2px] bg-blue-400 mx-auto rounded-full opacity-80" />
                </div>


                <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                {card.icon}
                            </div>
                            <h3 className="text-center text-white text-[4vw] md:text-[3.5vh] font-bold">{card.title}</h3>
                            <p className="text-center text-gray-200 text-[3.5vw] md:text-[2.5vh]">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AreaOfPractice
