// make test

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

const fetchTrainingPlans = async () => {
  try {
    const trainingPlan = await fetch(
      'http://0.0.0.0:1337/api/training-plans?populate=*',
      {
        method: 'GET',
        headers: {
          Authorization: `bearer ${process.env.NEXT_STRAPI_TOKEN}`
        }
      }
    )
    return await trainingPlan.json()
  } catch (error) {
    return error
  }
}

const fetchUser = async (jwt: string | undefined) => {
  try {
    const response = await fetch('http://0.0.0.0:1337/api/users/me', {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwt}`
      }
    })
    return await response.json()
  } catch (error) {
    return error
  }
}

export { fetchProducts, fetchProduct, fetchTrainingPlans, fetchUser }
