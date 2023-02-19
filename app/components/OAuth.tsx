'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { add } from 'date-fns'

const OAuth = () => {
  const [text, setText] = useState('Loading...')
  const router = useRouter()
  const searchParams = useSearchParams()
  const [, setCookie] = useCookies(['jwt'])
  const oneMonthDelay = () => add(new Date(), { months: 1 })

  useEffect(() => {
    fetch(`http://localhost:1337/api/auth/google/callback?${searchParams}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`)
        }
        return res
      })
      .then(res => res.json())
      .then(res => {
        setCookie('jwt', res.jwt, {
          path: '/',
          domain: window.location.hostname,
          secure: true,
          expires: oneMonthDelay()
        })
        setText('¡Éxito! Estará redirigido en unos segundos...')
        setTimeout(() => router.push('/'), 3000) // Redirect to homepage after 3 sec
      })
      .catch(err => {
        console.log(err)
        setText('An error occurred, please see the developer console.')
      })
  }, [router, searchParams])

  return <p>{text}</p>
}

export default OAuth
