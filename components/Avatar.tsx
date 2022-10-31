import Image, { ImageProps } from 'next/image'
import React from 'react'

const Avatar = ({ width = '100%', height = '100%', ...rest }: ImageProps) => {
  return (
    <div className="rounded-full overflow-hidden w-24 h-24 bg-alert">
      <Image objectFit="cover" width={width} height={height} {...rest} />
    </div>
  )
}

export default Avatar
