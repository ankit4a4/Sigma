import React from 'react'
import HeroAbout from '../components/about/HeroAbout'
import heroImage from "../assets/Images/endoscopeHeroSection.jpg"
import EndoscopeTestingSection from '../components/endoscopeTesting/EndoscopeTestingSection'

const EndoscopeTesting = () => {
    return (
        <>
            <HeroAbout
                title="Endoscope Testing"
                subtitle="Home / Endoscope Testing"
                backgroundImage={heroImage}
            />
            <EndoscopeTestingSection />
        </>
    )
}

export default EndoscopeTesting
