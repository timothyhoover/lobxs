'use client'

import { ShoppingBag } from 'iconoir-react'
import React from 'react'
import Button from '../components/Button'
import Product from '../components/Product'

const FeaturedProducts = () => {
  return (
    <section className="bg-white z-0 py-12">
      <div className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto px-10">
        <div>
          <h3 className="text-6xl lg:text-8xl font-bold text-black -mb-6 lg:-mb-9">
            Nuestra
          </h3>
          <h3 className="text-6xl lg:text-8xl font-bold text-lobxs ml-10">
            Equipación
          </h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-content-center gap-8 mt-10 mb-12">
          <Product img="https://lobxs.com/wp-content/uploads/2021/01/Untitled-design-2021-01-19T003139.430.png" />
          <Product img="https://lobxs.com/wp-content/uploads/2021/02/admin-ajax.png" />
          <Product img="https://lobxs.com/wp-content/uploads/2021/02/Tienda-headbands-lobxs2021-min.png" />
          <Product img="https://lobxs.com/wp-content/uploads/2021/02/admin-ajax-1.png" />
        </div>
        <Button size="lg" variant="secondary">
          <div className="flex space-x-2">
            <p className="text-lobxs">Ir a la Tienda</p>
            <ShoppingBag />
          </div>
        </Button>
      </div>
    </section>
  )
}

export default FeaturedProducts
