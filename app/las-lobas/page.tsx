import React from 'react'
import AboutSection from './AboutSection'
import HeroSection from './HeroSection'
import JoinUsSection from './JoinUsSection'
import VideoSection from './VideoSection'

const AboutPage = () => {
  return (
    <main className="bg-neutral">
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <JoinUsSection />
    </main>
  )
}

export default AboutPage
