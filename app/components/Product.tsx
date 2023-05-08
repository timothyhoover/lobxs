'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { first } from 'remeda'
import { ApiProductProduct } from '../../schemas'
import { formatCurrency, getStrapiMedia, toKebabCase } from '../../utils/util'

type ProductType = {
  id: number
  attributes: ApiProductProduct['attributes']
}

const Product = ({
  attributes: { images, description, price, name },
  id
}: ProductType) => {
  const {
    attributes: { url, alternativeText }
  }: ApiProductProduct['attributes']['images'] = first(images.data)
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md flex flex-col justify-between">
      <Link
        href={`/producto/${toKebabCase(name)}/${id}`}
        className="flex justify-center"
      >
        <Image
          loader={() => getStrapiMedia(url)}
          src={getStrapiMedia(url)}
          alt={alternativeText || 'product image'}
          width={300}
          height={400}
        />
      </Link>
      <div className="px-5 pb-5 mt-3">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 line-clamp-1">
          {name}
        </h5>
        <p className="line-clamp-2 text-xs font-serif mt-1 mb-3">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 w-full">
            {formatCurrency({ amount: price })}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Product
