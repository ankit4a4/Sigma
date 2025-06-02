import React from 'react'
import HeroAbout from "../components/about/HeroAbout"
import heroImage from "../assets/Images/materialsHeroSection.jpg"
import UltrasoundTestingSection from '../components/materialsTesting/UltrasoundTestingSection'

const MaterialsTesting = () => {
    return (
        <>
            <HeroAbout
                title="Materials Testing"
                subtitle="Home / Materials Testing"
                backgroundImage={heroImage}
            />
            <UltrasoundTestingSection />
        </>
    )
}

export default MaterialsTesting
