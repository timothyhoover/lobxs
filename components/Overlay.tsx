'use-client'

import React, { MouseEventHandler } from 'react'
import { motion } from 'framer-motion'

type OverlayProps = {
  onClick?: MouseEventHandler<HTMLDivElement>
}

const Overlay = ({ onClick }: OverlayProps) => {
  return (
    <div
      className="fixed z-30 inset-0 flex items-center justify-center bg-backdrop backdrop-filter backdrop-blur-sm"
      onClick={onClick}
    >
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>
    </div>
  )
}

export default Overlay
