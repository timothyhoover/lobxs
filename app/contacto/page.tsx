import React from 'react'
import NavBarServer from '../components/NavBarServer'
import ContactSection from './ContactSection'
import HeroSection from './HeroSection'

const ContactPage = () => {
  return (
    <main className="bg-neutral">
      {/* @ts-expect-error Server Component */}
      <NavBarServer alternative />
      <HeroSection />
      <ContactSection />
    </main>
  )
}

export default ContactPage
