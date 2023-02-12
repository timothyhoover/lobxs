'use client'

import Image, { ImageLoaderProps } from 'next/image'
import React, { useState } from 'react'
import { first, map } from 'remeda'
import { ApiProductProduct } from '../../schemas'
import { getStrapiMedia } from '../../utils/util'

type ImageType = ApiProductProduct['attributes']['images']

const ProductDetailImages = ({ images: { data } }: ImageType) => {
  const [mainImg, setMainImg] = useState<ImageType>(first(data))

  const { url, alternativeText }: ImageType = mainImg?.attributes

  const imgLoader = ({ src, width, quality }: ImageLoaderProps) =>
    `${getStrapiMedia(src)}?w=${width}&q=${quality || 75}`

  const handleImgChange = (img: ImageType) => setMainImg(img)

  return (
    <div className="space-y-4">
      <div className="bg-white shadow rounded-md flex justify-center">
        <Image
          loader={imgLoader}
          src={getStrapiMedia(url)}
          alt={alternativeText || 'product image'}
          width={300}
          height={300}
        />
      </div>
      <div className="grid grid-cols-5 gap-3">
        {map(data, img => {
          const {
            attributes: { url, alternativeText }
          }: ImageType = img
          return (
            <div className="bg-white shadow rounded-md flex justify-center overflow-hidden base-hover-state hover:outline hover:outline-alert">
              <Image
                onClick={() => handleImgChange(img)}
                className="w-full"
                loader={imgLoader}
                src={getStrapiMedia(url)}
                alt={alternativeText || 'product image'}
                width={200}
                height={200}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductDetailImages
