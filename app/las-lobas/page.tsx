import React from 'react'
import NavBar from '../components/NavBar'
import AboutSection from './AboutSection'
import HeroSection from './HeroSection'
import JoinUsSection from './JoinUsSection'
import VideoSection from './VideoSection'

const AboutPage = () => {
  return (
    <>
      <NavBar />
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
