'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { first } from 'remeda'
import { ApiProductProduct } from '../../schemas'
import { formatCurrency, getStrapiMedia, toKebabCase } from '../../utils/util'

import Button from './Button'
import Cart from './icons/Cart'
import Spinner from './loading/Spinner'

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
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      <Link
        href={`/product/${toKebabCase(name)}/${id}`}
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
          <span className="text-3xl font-bold text-gray-900 w-full">
            {formatCurrency({ amount: price })}
          </span>
          <Button>
            <Cart className="text-white text-sm w-7" />
            {/* <Spinner className="text-white fill-blue text-sm w-7" /> */}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Product
