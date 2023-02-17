import { getServerSession } from 'next-auth'
import FeaturedProducts from './FeaturedProductsSection'
import FeaturedVideoSection from './FeaturedVideoSection'
import HeroSection from './HeroSection'
import JoinUsSection from './JoinUsSection'
import NavBar from './NavBar'
import Providers from './Providers'
import TestimonialSection from './TestimonialSection'
import WelcomeSection from './WelcomeSection'

const getProducts = async () => {
  let products
  try {
    products = await fetch('http://0.0.0.0:1337/api/products?populate=*', {
      method: 'GET',
      headers: {
        Authorization: `bearer ${process.env.NEXT_STRAPI_TOKEN}`
      }
    })
  } catch (error) {
    return error
  }

  return await products.json()
}

const HomePage = async () => {
  const { data: products } = await getProducts()
  const session = await getServerSession()
  console.log(session)
  return (
    <main>
      <Providers session={session}>
        <NavBar />
      </Providers>
      <HeroSection />
      <WelcomeSection />
      <FeaturedVideoSection />
      <FeaturedProducts products={products} />
      <TestimonialSection />
      <JoinUsSection />
    </main>
  )
}

export default HomePage
