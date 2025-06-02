import React from 'react'
import HeroAbout from '../components/about/HeroAbout'
import HeroImage from '../assets/Images/electricalherosection.webp'
import ElectricalTestingSection from '../components/electricalTesting/ElectricalTestingSection'

const ElectricalTesting = () => {
    return (
        <>
            <HeroAbout
                title="Electrical Safety"
                subtitle="Home / Electrical Testing"
                backgroundImage={HeroImage}
            />
            <ElectricalTestingSection />
        </>
    )
}

export default ElectricalTesting
