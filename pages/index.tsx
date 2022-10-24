import type { NextPage } from 'next'
import FeaturedVideoSection from '../components/FeaturedVideoSection'
import HeroSection from '../components/HeroSection'
import WelcomeSection from '../components/WelcomeSection'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <FeaturedVideoSection />
    </>
  )
}

export default Home
