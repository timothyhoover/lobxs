import FeaturedProducts from '../components/FeaturedProducts'
import FeaturedVideoSection from '../components/FeaturedVideoSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import JoinUsSection from '../components/JoinUsSection'
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
      <JoinUsSection />
      <Footer />
    </>
  )
}

export default Page
