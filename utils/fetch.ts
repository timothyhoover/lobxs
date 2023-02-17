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

const launchOAuth = async () => {
  try {
    const res = await fetch(`http://localhost:1337/api/connect/google`, {
      method: 'GET'
    })
    console.log(res)
    return await res.json()
  } catch (error) {
    return error
  }
}

const authenticateSSO = async (searchParams: any) => {
  try {
    const user = await fetch(
      `http://0.0.0.0:1337/api/auth/google/callback?id_token=${searchParams.id_token}`
    )
    return await user.json()
  } catch (error) {
    return error
  }
}

export {
  fetchProducts,
  fetchProduct,
  fetchTrainingPlans,
  launchOAuth,
  authenticateSSO
}
