import React from 'react'
import HeroAbout from '../components/about/HeroAbout'
import heroImage from "../assets/Images/AcounsticHeroSection.png"
import UltrasoundSafetySection from '../components/acousticTesting/UltrasoundSafetySection'
import AccreditationHighlightsSection from '../components/acousticTesting/AccreditationHighlightsSection'
import AcousticOutputTestingSection from '../components/acousticTesting/AcousticOutputTestingSection'
import AcousticAdvancedSection from '../components/acousticTesting/AcousticAdvancedSection'
import AcousticImageGallery from '../components/acousticTesting/AcousticImageGallery'

const AcousticTesting = () => {
    return (
        <>
            <HeroAbout
                title="Acoustic Testing"
                subtitle="Home / Acoustic Testing"
                backgroundImage={heroImage}
            />
            <AcousticImageGallery />
            <UltrasoundSafetySection />
            <AccreditationHighlightsSection />
            <AcousticOutputTestingSection />
            <AcousticAdvancedSection />
        </>
    )
}

export default AcousticTesting
