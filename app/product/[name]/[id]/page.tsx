import React from 'react'
import { map } from 'remeda'
import { ApiProductProduct } from '../../../../schemas'
import { fetchProduct } from '../../../../utils/fetch'
import { formatCurrency } from '../../../../utils/util'
import Button from '../../../components/Button'
import ProductDetailImages from '../../../components/ProductDetailImages'
import NavBar from '../../../NavBar'

type VariationType = ApiProductProduct['attributes']['variations']

const ProductDetailsPage = async ({
  params: { id }
}: {
  params: { id: number }
}) => {
  const {
    data: {
      attributes: {
        name,
        description,
        price,
        inventory,
        images,
        category,
        subcategory,
        discount,
        variations
      }
    }
  } = await fetchProduct(id)
  return (
    <>
      <NavBar alternative={true} />
      <main className="pt-40 bg-neutral">
        <div className="flex space-x-10 max-w-screen-2xl mx-auto px-10 py-10">
          {/* images */}
          <div className="w-1/2 h-[600px]">
            <ProductDetailImages images={images} />
          </div>
          {/* product details */}
          <div className="flex flex-col">
            <div className="border-b border-b-neutral-300 pb-3">
              <h1 className="text-4xl mb-3">{name}</h1>
              <p className="text-3xl">{formatCurrency({ amount: price })}</p>
            </div>
            <div className="mt-3 space-y-5">
              <p>{description}</p>
              {/* variations */}
              {variations.data.length > 0 && (
                <div className="max-w-fit flex border border-lobxs rounded-md">
                  {map(
                    variations.data,
                    ({ id, attributes: { name } }: VariationType) => {
                      return (
                        <div
                          className="base-hover-state hover:bg-lobxs-lighter py-1 px-3 border-r border-r-lobxs last:border-none"
                          key={id}
                        >
                          <p>{name}</p>
                        </div>
                      )
                    }
                  )}
                </div>
              )}
              <div>
                <Button variant="secondary">Añadir al Carrito</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductDetailsPage
