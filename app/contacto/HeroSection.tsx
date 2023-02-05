import Image from 'next/image'
import ContactHero from '../../public/img/lobxs-contact.jpeg'

const HeroSection = () => {
  return (
    <section className="pt-40">
      <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-20">
        <div className="order-2 lg:order-1 w-4/6 md:w-3/6 lg:w-2/6">
          <Image src={ContactHero} alt="lobas hero" />
        </div>
        <div className="order-1 lg:order-2">
          <h1 className="text-center lg:text-left text-5xl lg:text-7xl font-bold">
            <span className="block">Contacta</span>
            <span className="block">con</span>
            <span className="block">Nosotras</span>
          </h1>
          <p className="text-xl lg:text-2xl mt-2 mb-10 lg:mb-0">
            Aquí estamos para ayudarte. ¡Cuéntanos Más!
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
