'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast'
import { options } from '../../../lib/toastOptions'

const Toast = () => {
  return <Toaster {...options} />
}

export default Toast
