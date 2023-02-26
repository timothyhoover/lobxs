import React from 'react'
import NavBarServer from '../components/NavBarServer'
import AcademySection from './AcademySection'
import HeroSection from './HeroSection'
import JoinSection from './JoinSection'
import TrailTechniqueSection from './TrailTechniqueSection'

const TrailAcademyPage = () => {
  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <NavBarServer />
      <HeroSection />
      <AcademySection />
      <TrailTechniqueSection />
      <JoinSection />
    </main>
  )
}

export default TrailAcademyPage
