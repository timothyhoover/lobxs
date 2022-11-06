import FeaturedProducts from '../components/FeaturedProducts'
import FeaturedVideoSection from '../components/FeaturedVideoSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import TestimonialSection from '../components/TestimonialSection'
import WelcomeSection from '../components/WelcomeSection'

const Page = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <FeaturedVideoSection />
      <FeaturedProducts />
      <TestimonialSection />
      <Footer />
    </>
  )
}

export default Page
