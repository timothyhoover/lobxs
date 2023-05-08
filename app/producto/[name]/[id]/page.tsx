import React from 'react'
import { fetchProduct } from '../../../../utils/fetch'
import { formatCurrency } from '../../../../utils/util'
import AddToCart from '../../../components/AddToCart'
import ProductDetailImages from '../../../components/ProductDetailImages'
import NavBarServer from '../../../components/NavBarServer'

export const dynamic = 'force-dynamic'

const ProductDetailsPage = async ({
  params: { id }
}: {
  params: { id: number }
}) => {
  const {
    data: { attributes }
  } = await fetchProduct(id)
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <NavBarServer alternative />
      <main className="pt-40 bg-neutral">
        <div className="flex space-x-10 max-w-screen-2xl mx-auto px-10 py-10">
          <div className="w-1/2 h-[600px]">
            <ProductDetailImages images={attributes.images} />
          </div>
          <div className="flex flex-col">
            <div className="border-b border-b-neutral-300 pb-3">
              <h1 className="text-4xl mb-3">{attributes.name}</h1>
              <p className="text-3xl">
                {formatCurrency({ amount: attributes.price })}
              </p>
            </div>
            <div className="mt-3 space-y-5">
              <p>{attributes.description}</p>
              <AddToCart attributes={attributes} id={id} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductDetailsPage
