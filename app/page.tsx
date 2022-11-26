import FeaturedProducts from './FeaturedProductsSection'
import FeaturedVideoSection from './FeaturedVideoSection'
import HeroSection from './HeroSection'
import JoinUsSection from './JoinUsSection'
import NavBar from './NavBar'
import TestimonialSection from './TestimonialSection'
import WelcomeSection from './WelcomeSection'

const HomePage = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <WelcomeSection />
      <FeaturedVideoSection />
      <FeaturedProducts />
      <TestimonialSection />
      <JoinUsSection />
    </main>
  )
}

export default HomePage
