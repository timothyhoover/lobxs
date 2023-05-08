export function getStrapiURL(path = '') {
  return `${'http://localhost:1337'}${path}`
}

export function getStrapiMedia(url: string) {
  // const { url } = media.data.attributes
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
  return imageUrl
}

const formatCurrency = ({
  amount = 0,
  locale = 'es-ES',
  currency = 'EUR',
  ...rest
}) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    ...rest
  }).format(amount)

const toKebabCase = (str: string) =>
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map(x => x.toLowerCase())
    .join('-')

export { formatCurrency, toKebabCase }
