const fetchProducts = async () => {
  let products
  try {
    products = await fetch('http://0.0.0.0:1337/api/products?populate=*', {
      method: 'GET',
      headers: {
        Authorization: `bearer ${process.env.NEXT_STRAPI_TOKEN}`
      }
    })
  } catch (error) {
    return error
  }

  return await products.json()
}

export { fetchProducts }
