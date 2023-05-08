'use client'

import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { first } from 'remeda'
import {
  CartContextProvider,
  useCartContextState
} from '../../context/CartContext'
import { ApiProductProduct } from '../../schemas'
import Button from './Button'
import Minus from './icons/Minus'
import Plus from './icons/Plus'
import VariationSelector from './VariationSelector'

type Product = {
  productId: number
  variation: ApiProductProduct['attributes']['variations']['attributes']
}

type AddToCartTypes = {
  attributes: ApiProductProduct['attributes']
  id: number
}

const AddToCartBase = ({ attributes, id }: AddToCartTypes) => {
  const variations = attributes.variations.data
  const [variation, setVariation] = useState<
    ApiProductProduct['attributes']['variations']
  >(first(variations))
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCartContextState()

  const handleSelection = (selectedVariation: AddToCartTypes) => {
    setVariation(selectedVariation)
    setQuantity(1)
  }

  const handleAddToCart = () => {
    const product = {
      productId: id,
      attributes,
      ...(variation ? { variation } : {}),
      quantity
    }
    addToCart(product)
    toast.success('¡Añadido al carrito!')
  }

  const incrementQuantity = () => setQuantity(quantity + 1)
  const decrementQuantity = () => setQuantity(quantity - 1)

  return (
    <>
      {variations.length > 0 && (
        <VariationSelector
          handleSelection={handleSelection}
          selectedVariation={variation || {}}
          variations={variations}
        />
      )}
      <div>
        <Button onClick={handleAddToCart} variant="secondary">
          Añadir al Carrito
        </Button>
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <button disabled={quantity === 1} onClick={decrementQuantity}>
            <Minus
              className={`w-5 h-5 ${
                quantity === 1 ? 'text-neutral-contrast-disabled' : 'text-black'
              }`}
            />
          </button>
          <p className="text-xs">{quantity}</p>
          <button onClick={incrementQuantity}>
            <Plus className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </>
  )
}

const AddToCart = ({ attributes, id }: AddToCartTypes) => {
  return (
    <CartContextProvider>
      <AddToCartBase attributes={attributes} id={id}></AddToCartBase>
    </CartContextProvider>
  )
}

export default AddToCart
