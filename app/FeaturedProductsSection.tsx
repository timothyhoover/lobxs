'use client'

import { ShoppingBag } from 'iconoir-react'
import React from 'react'
import Button from '../components/Button'
import Product from '../components/Product'
import ShirtGirls from '../public/img/shirt-girls.png'
import ShirtBoys from '../public/img/shirt-boys.png'
import CoffeeCup from '../public/img/coffee-cup.png'
import HeadBand from '../public/img/headband.png'

const FeaturedProducts = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white z-0 py-12">
      <div>
        <h3 className="text-6xl lg:text-8xl font-bold text-black -mb-6 lg:-mb-9">
          Nuestra
        </h3>
        <h3 className="text-6xl lg:text-8xl font-bold text-lobxs ml-10">
          Equipación
        </h3>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-content-center gap-8 mt-10 mb-12">
        <Product img={ShirtGirls} />
        <Product img={ShirtBoys} />
        <Product img={CoffeeCup} />
        <Product img={HeadBand} />
      </div>
      <Button size="lg" variant="secondary">
        <div className="flex space-x-2">
          <p className="text-lobxs">Ir a la Tienda</p>
          <ShoppingBag />
        </div>
      </Button>
    </section>
  )
}

export default FeaturedProducts
