import React from 'react'
import NavBarServer from '../components/NavBarServer'
import AboutSection from './AboutSection'
import HeroSection from './HeroSection'
import JoinUsSection from './JoinUsSection'
import VideoSection from './VideoSection'

const AboutPage = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <NavBarServer />
      <main className="bg-neutral">
        <HeroSection />
        <AboutSection />
        <VideoSection />
        <JoinUsSection />
      </main>
    </>
  )
}

export default AboutPage
