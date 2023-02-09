export function getStrapiURL(path = '') {
  return `${'http://localhost:1337'}${path}`
}

export function getStrapiMedia(url: string) {
  // const { url } = media.data.attributes
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
  return imageUrl
}
