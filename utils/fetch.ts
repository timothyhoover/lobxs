const fetchProducts = async () => {
  try {
    const products = await fetch(
      'http://0.0.0.0:1337/api/products?populate=*',
      {
        method: 'GET',
        headers: {
          Authorization: `bearer ${process.env.NEXT_STRAPI_TOKEN}`
        }
      }
    )
    return await products.json()
  } catch (error) {
    return error
  }
}

const fetchProduct = async (id: number) => {
  try {
    const product = await fetch(
      `http://0.0.0.0:1337/api/products/${id}?populate=*`,
      {
        method: 'GET',
        headers: {
          Authorization: `bearer ${process.env.NEXT_STRAPI_TOKEN}`
        }
      }
    )
    return await product.json()
  } catch (error) {
    return error
  }
}

export { fetchProducts, fetchProduct }
