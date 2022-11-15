import Image, { ImageProps } from 'next/image'
import React from 'react'

import Button from './Button'
import { Cart, Plus } from 'iconoir-react'

type ProductProps = {
  img?: string
}

const Product = ({ img = '' }: ProductProps) => {
  return (
    <div className="flex flex-col justify-between w-full shadow-md rounded-md">
      <div className="bg-neutral-200 h-full">
        <Image src={img} alt="shirt girls" width={300} height={500} />
      </div>
      <div className="flex flex-col p-app">
        <h3 className="text-xl font-medium">Shirt Girls</h3>
        <div className="flex justify-between mt-5">
          <div>
            <p className="text-sm text-neutral-contrast-light">Precio</p>
            <p className="text-xl">€29,00</p>
          </div>
          <div>
            <Button>
              <Cart className="text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
