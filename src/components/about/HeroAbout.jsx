import React from 'react'

const HeroAbout = ({ title, subtitle, backgroundImage }) => {
    return (
        <div
            className="relative h-[50vh] md:h-[80vh] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center pl-[5vw]">
                <div>
                    <h1 className="text-white font-bold text-[5.5vh] leading-tight md:text-[5vw]">
                        {title}
                    </h1>
                    <p className="text-gray-300 text-[2vw] md:text-[1.6vw] mt-2">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroAbout
