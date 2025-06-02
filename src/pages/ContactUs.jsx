import React from 'react'
import ContactSection from '../components/contact/ContactSection'
import HeroAbout from '../components/about/HeroAbout'
import heroImage from "../assets/Images/contacthero.webp"

const ContactUs = () => {
    return (
        <>
            <HeroAbout
                title="Contact Us"
                subtitle="Home / Contact Us"
                backgroundImage={heroImage}
            />
            <ContactSection />
        </>
    )
}

export default ContactUs
