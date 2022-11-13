import FeaturedProducts from './FeaturedProductsSection'
import FeaturedVideoSection from './FeaturedVideoSection'
import HeroSection from './HeroSection'
import JoinUsSection from './JoinUsSection'
import TestimonialSection from './TestimonialSection'
import WelcomeSection from './WelcomeSection'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <FeaturedVideoSection />
      <FeaturedProducts />
      <TestimonialSection />
      <JoinUsSection />
    </>
  )
}

export default HomePage
