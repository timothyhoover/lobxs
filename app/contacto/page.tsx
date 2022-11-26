import React from 'react'
import NavBar from '../NavBar'
import ContactSection from './ContactSection'
import HeroSection from './HeroSection'

const ContactPage = () => {
  return (
    <main className="bg-neutral">
      <NavBar alternative={true} />
      <HeroSection />
      <ContactSection />
    </main>
  )
}

export default ContactPage
