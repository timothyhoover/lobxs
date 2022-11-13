'use-client'

import React from 'react'
import { motion } from 'framer-motion'

const Overlay = () => {
  return (
    <motion.div
      className="fixed z-30 inset-0 flex items-center justify-center bg-backdrop backdrop-filter backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    ></motion.div>
  )
}

export default Overlay
