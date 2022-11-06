import Image, { ImageProps } from 'next/image'
import React, { CSSProperties } from 'react'

const style = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  inset: '0px',
  objectFit: 'cover'
} as CSSProperties

const Avatar = ({ ...rest }: ImageProps) => {
  return (
    <div className="relative rounded-full overflow-hidden w-24 h-24">
      <Image style={style} {...rest} />
    </div>
  )
}

export default Avatar
