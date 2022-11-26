import Image, { ImageProps } from 'next/image'
import React from 'react'

import Button from './Button'
import { Cart, Plus } from 'iconoir-react'

type ProductProps = {
  img?: string
}

const Product = ({ img = '' }: ProductProps) => {
  return (
    <>
      {/* <div className="flex flex-col justify-between w-full shadow-md rounded-md">
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
      </div> */}

      <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
        <a href="#" className="flex justify-center">
          <Image src={img} alt="shirt girls" width={300} height={400} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 w-full">
              €29,00
            </span>
            <Button>
              <Cart className="text-white text-sm" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
