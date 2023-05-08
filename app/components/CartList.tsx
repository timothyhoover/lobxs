import Image from 'next/image'
import React from 'react'
import { sumBy } from 'remeda'
import { useCartContextState } from '../../context/CartContext'
import { formatCurrency, getStrapiMedia } from '../../utils/util'
import Button from './Button'
import Lock from './icons/Lock'
import Minus from './icons/Minus'
import Plus from './icons/Plus'
import Trash from './icons/Trash'

const CartList = () => {
  const { setCartProducts, cartProducts } = useCartContextState()

  const incrementQuantity = (productId: number, variationId?: number) => {
    setCartProducts(products =>
      products.map(prod => {
        if (
          (prod?.variation &&
            prod?.variation?.id === variationId &&
            prod?.productId === productId) ||
          (!prod?.variation && prod?.productId === productId)
        ) {
          const updatedProd = { ...prod }
          updatedProd.quantity++
          return updatedProd
        } else return prod
      })
    )
  }

  const decrementQuantity = (productId: number, variationId?: number) =>
    setCartProducts(products =>
      products.map(prod => {
        if (
          (prod?.variation &&
            prod?.variation?.id === variationId &&
            prod?.productId === productId) ||
          (!prod?.variation && prod?.productId === productId)
        ) {
          const updatedProd = { ...prod }
          updatedProd.quantity--
          return updatedProd
        } else return prod
      })
    )

  const toCheckout = () => {}

  const handleRemoveItem = (productId: number, variationId?: number) => {
    setCartProducts(products => {
      const removeProducts = products.filter(prod => {
        if (
          (prod?.variation && prod?.variation?.id !== variationId) ||
          (!prod?.variation && prod?.productId !== productId)
        ) {
          return prod
        }
      })
      if (!removeProducts.length) {
        localStorage.removeItem('cart')
      }
      return removeProducts
    })
  }

  return (
    <div className="flex flex-col justify-between h-full">
      {cartProducts.length ? (
        <ul className="flex flex-col w-full gap-y-2">
          {cartProducts.map(product => {
            const { url, alternativeText } =
              product?.attributes?.images.data[0].attributes
            return (
              <li
                className="space-y-2 border-b p-2"
                key={
                  product.variation
                    ? `${product.variation.id + product.productId}`
                    : product.productId
                }
              >
                <div className="flex items-center justify-between w-full text-xs space-x-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 rounded-full overflow-hidden w-8 h-8 border">
                      <Image
                        loader={() => getStrapiMedia(url)}
                        src={getStrapiMedia(url)}
                        alt={alternativeText || 'product image'}
                        width={75}
                        height={75}
                      />
                    </div>
                    <p className="line-clamp-1">
                      {product?.attributes?.name}
                      {product.variation?.attributes.name
                        ? ` (${product.variation?.attributes.name})`
                        : ''}
                    </p>
                  </div>
                  <p>
                    {formatCurrency({
                      amount: product?.attributes?.price * product.quantity
                    })}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <button
                        disabled={product.quantity === 1}
                        onClick={() =>
                          product?.productId &&
                          decrementQuantity(
                            product?.productId,
                            Number(product?.variation?.id)
                          )
                        }
                        className=""
                      >
                        <Minus
                          className={`w-5 h-5 ${
                            product.quantity === 1
                              ? 'text-neutral-contrast-disabled'
                              : ''
                          }`}
                        />
                      </button>
                      <p className="text-xs">{product?.quantity}</p>
                      <button
                        onClick={() =>
                          product?.productId &&
                          incrementQuantity(
                            product?.productId,
                            Number(product?.variation?.id)
                          )
                        }
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleRemoveItem(
                        product?.productId,
                        Number(product?.variation?.id)
                      )
                    }
                  >
                    <Trash className="w-4 h-4 text-alert" />
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>No tiene productos en el carrito</p>
      )}
      <div className="flex items-center space-x-2">
        <p className="flex items-center flex-shrink-0 w-4/12 space-x-1">
          <span className="text-sm text-neutral-contrast-light">Subtotal:</span>
          <span>
            {formatCurrency({
              amount: sumBy(
                cartProducts,
                prod => prod?.attributes.price * prod.quantity
              )
            })}
          </span>
        </p>
        <Button
          className="text-black space-x-1 flex items-center w-6/12"
          variant="tertiary"
        >
          <Lock className="w-5 h-5" />
          <p className="text-current">Checkout</p>
        </Button>
      </div>
    </div>
  )
}

export default CartList
