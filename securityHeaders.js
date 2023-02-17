const formatCPS = cps => cps.replace(/\s{2,}/g, ' ').trim()
const setUnsafeEvalLocalOnly = !process.env.NEXT_PUBLIC_STRAPI_URL
  ? "'unsafe-eval'"
  : '' // Next.js (webpack) uses eval() for source mapping during dev mode for faster performance

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' http://0.0.0.0:1337 http://localhost:1337 https://accounts.google.com;
  connect-src 'self' http://0.0.0.0:1337 http://localhost:1337 https://accounts.google.com;
  style-src 'self' 'unsafe-inline' fonts.googleapis.com https://use.typekit.net/zsn3rma.css;
  font-src 'self' fonts.gstatic.com;
  img-src 'self' http://localhost:1337 data:;
  frame-src 'self' https://player.vimeo.com/;
`
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'Content-Security-Policy',
    value: formatCPS(ContentSecurityPolicy)
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
]

module.exports = securityHeaders
