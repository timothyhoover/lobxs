import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { ApiProductProduct } from '../schemas'

type CartProductType = {
  productId: number
  attributes: ApiProductProduct['attributes']
  variation?: {
    id: number
    attributes: ApiProductProduct['attributes']['variations']
  }
  quantity: number
}

type CartType = {
  products: CartProductType[]
} | null

type ContextTypes = {
  cart: CartType
  cartProducts: CartProductType[]
  removeCart: () => void
  addToCart: (product: CartProductType) => void
  setCartProducts: Dispatch<SetStateAction<CartProductType[]>>
}

const CartContext = createContext<ContextTypes>({
  cart: null,
  cartProducts: [],
  removeCart: () => {},
  addToCart: () => {},
  setCartProducts: () => {}
})

const useCartContextState = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCartContextState was used outside of its Provider')
  }
  return context
}

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartType>(null)
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([])
  const isMounted = useRef(false)

  const removeCart = useCallback(() => {
    setCartProducts([])
    setCart(null)
    localStorage.removeItem('cart')
  }, [])

  useEffect(() => {
    const json = localStorage.getItem('cart')
    const cart = json ? JSON.parse(json) : []
    if (cart.products?.length) {
      setCartProducts(cart.products)
      setCart({ products: cart.products })
    }
  }, [])

  useEffect(() => {
    if (cartProducts.length) {
      localStorage.setItem('cart', JSON.stringify({ products: cartProducts }))
    }
  }, [cartProducts])

  const addToCart = (product: CartProductType) => {
    const alreadyHasProductInCart = cartProducts.some(prod => {
      if (prod?.variation)
        return (
          prod?.productId === product?.productId &&
          prod?.variation?.id === product?.variation?.id
        )
      else return prod?.productId === product?.productId
    })

    if (alreadyHasProductInCart) {
      setCartProducts(products =>
        products.map(prod => {
          if (
            prod?.variation &&
            prod?.variation?.id === product?.variation?.id &&
            prod?.productId === product?.productId
          ) {
            return { ...prod, quantity: prod.quantity + product.quantity }
          } else if (
            prod &&
            !prod?.variation &&
            prod?.productId === product?.productId
          ) {
            return { ...prod, quantity: prod.quantity + product.quantity }
          } else return prod
        })
      )
    } else if (cartProducts.length) {
      setCartProducts([...cartProducts, product])
    } else {
      setCartProducts([product])
    }
  }

  const contextValue = useMemo<ContextTypes>(
    () => ({
      cart,
      cartProducts,
      removeCart,
      addToCart,
      setCartProducts
    }),
    [cart, cartProducts, removeCart, addToCart, setCartProducts]
  )
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export { CartContextProvider, useCartContextState }
