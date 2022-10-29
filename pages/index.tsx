import type { NextPage } from 'next'
import FeaturedProducts from '../components/FeaturedProducts'
import FeaturedVideoSection from '../components/FeaturedVideoSection'
import HeroSection from '../components/HeroSection'
import WelcomeSection from '../components/WelcomeSection'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <FeaturedVideoSection />
      <FeaturedProducts />
    </>
  )
}

export default Home
