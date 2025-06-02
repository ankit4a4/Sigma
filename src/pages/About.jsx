import React from 'react'
import HeroAbout from '../components/about/HeroAbout'
import AboutActionCards from '../components/about/AboutActionCards'
import AboutVideoSection from '../components/about/AboutVideoSection'
import AreaOfPractice from '../components/about/AreaOfPractice'
import ClientTestimonial from '../components/about/ClientTestimonial'
import HeroImage from '../assets/Images/aboutusHero.avif'

const About = () => {
    return (
        <div>
            <HeroAbout
                title="About Us"
                subtitle="Home / About Us"
                backgroundImage={HeroImage}
            />
            <AboutVideoSection />
            <AreaOfPractice />
            <AboutActionCards />
            <ClientTestimonial />
        </div>
    )
}

export default About
