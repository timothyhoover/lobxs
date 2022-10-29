import React from 'react'
import Product from './Product'

const FeaturedProducts = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-neutral -z-1">
      <div>
        <h3 className="text-6xl lg:text-8xl font-bold text-black -mb-6 lg:-mb-9">
          Nuestra
        </h3>
        <h3 className="text-6xl lg:text-8xl font-bold text-lobxs ml-10">
          Equipación
        </h3>
      </div>
      <div className="flex justify-evenly w-full mt-10">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  )
}

export default FeaturedProducts
