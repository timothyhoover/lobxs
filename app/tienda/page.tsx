import React from 'react'
import { map } from 'remeda'
import { ApiProductProduct } from '../../schemas'
import { fetchProducts } from '../../utils/fetch'
import Product from '../components/Product'
import NavBarServer from '../components/NavBarServer'

const StorePage = async () => {
  const { data: products } = await fetchProducts()

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <NavBarServer alternative />
      <main className="pt-40 bg-neutral">
        <div className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto px-10">
          <div>
            <h1 className="text-6xl lg:text-8xl font-bold text-black -mb-6 lg:-mb-9">
              Nuestra
            </h1>
            <h1 className="text-6xl lg:text-8xl font-bold text-lobxs ml-10">
              Equipación
            </h1>
          </div>
          {/* Products */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-content-center gap-8 mt-10 mb-12">
            {map(products, ({ attributes, id }: ApiProductProduct) => (
              <Product attributes={attributes} key={id} id={id} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default StorePage
