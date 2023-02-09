import Image from 'next/image'
import TedX from '../../public/img/tedx.png'
import Rtve from '../../public/img/rtve.png'
import CadenaCope from '../../public/img/cadena-cope.png'
import EuropaPress from '../../public/img/europa-press.png'
import RadioMarca from '../../public/img/radio-marca.png'

const TestimonialsSection = () => (
  <section className="flex flex-col items-center py-12 bg-neutral">
    <h3 className="text-4xl font-bold">NOS HAS VISTO EN…</h3>
    <div className="relative flex justify-center overflow-x-hidden w-3/6">
      <div className="flex py-12 animate-marquee whitespace-nowrap">
        <Image className="mx-4" src={TedX} alt="tedx logo" />
        <Image className="mx-4" src={Rtve} alt="rtve logo" />
        <Image className="mx-4" src={CadenaCope} alt="cadena cope logo" />
        <Image className="mx-4" src={EuropaPress} alt="europa press logo" />
        <Image className="mx-4" src={RadioMarca} alt="radio marca logo" />
      </div>

      <div className="flex absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <Image className="mx-4" src={TedX} alt="" />
        <Image className="mx-4" src={Rtve} alt="" />
        <Image className="mx-4" src={CadenaCope} alt="" />
        <Image className="mx-4" src={EuropaPress} alt="" />
        <Image className="mx-4" src={RadioMarca} alt="" />
      </div>
    </div>
  </section>
)

export default TestimonialsSection
