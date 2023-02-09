import React, { FC, ReactElement } from 'react'
import Button from './components/Button'
import ShoppingBag from './components/icons/ShoppingBag'
import Product from './components/Product'
import { map } from 'remeda'
import { ApiProductProduct } from '../schemas'

const FeaturedProducts = ({ products }: any) => {
  return (
    <section className="bg-neutral z-0 py-12">
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
          {map(products, (product: ApiProductProduct) => {
            const {
              images: { data: images },
              description,
              price,
              name,
              featured
            } = product.attributes
            return (
              featured && (
                <Product
                  {...product.attributes}
                  key={product.id}
                  description={description}
                  price={price?.toString()}
                  name={name}
                  images={images}
                />
              )
            )
          })}
        </div>
        <Button size="lg" variant="secondary">
          <div className="flex space-x-2">
            <p className="text-lobxs">Ir a la Tienda</p>
            <ShoppingBag className="w-5" />
          </div>
        </Button>
      </div>
    </section>
  )
}

export default FeaturedProducts
