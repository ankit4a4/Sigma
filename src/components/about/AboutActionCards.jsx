import React from 'react'
import { FaClock, FaCogs } from 'react-icons/fa'

const cardData = [
  {
    icon: <FaClock className="text-blue-600 text-[6vw] md:text-[5vh]" />, // Updated icon for "Experience and Reliability"
    lines: ["Experience and Reliability", "In a highly regulated environment, Sigma Scientific provides the support you need to succeed. Our experience and commitment to quality allow us to adapt to the specific needs of each client."]
  },
  {
    icon: <FaCogs className="text-green-600 text-[6vw] md:text-[5vh]" />, // Updated icon for "Tailored Solutions"
    lines: ["Tailored Solutions", "We pride ourselves on offering services tailored to each project, whether by adhering to recognized standards or developing custom testing protocols to ensure maximum performance and safety for your medical devices."]
  }
]

const AboutActionCards = () => {
  return (
    <div className="w-full py-10 px-[5vw] bg-white grid gap-6 md:grid-cols-2 justify-center">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          <div className="mb-4">{card.icon}</div>
          <h2 className="font-bold text-black text-[5vw] md:text-[4vh] leading-tight">
            {card.lines[0]}
          </h2>
          <p className="text-gray-600 text-[4vw] md:text-[2.5vh] mt-1">
            {card.lines[1]}
          </p>
        </div>
      ))}
    </div>
  )
}

export default AboutActionCards
