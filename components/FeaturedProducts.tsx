import { ShoppingBag } from 'iconoir-react'
import React from 'react'
import { Button } from './Button'
import Product from './Product'

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
      <div className="flex justify-evenly w-full mt-10 mb-12">
        <Product />
        <Product />
        <Product />
        <Product />
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
