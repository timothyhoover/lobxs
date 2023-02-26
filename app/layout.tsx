import '../styles/globals.css'
import React, { ReactNode } from 'react'
import Footer from './components/Footer'
import Toast from './components/loading/Toast'

type Props = {
  children?: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="overflow-x-hidden">
        {children}
        <Toast />
        <Footer />
      </body>
    </html>
  )
}
