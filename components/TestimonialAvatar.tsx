import Image, { ImageProps } from 'next/image'
import Avatar from './Avatar'

type props = ImageProps & {
  name: string
  position?: string
}

const TestimonialAvatar = ({ name, position, ...imgProps }: props) => {
  return (
    <div className="flex flex-col items-center">
      <Avatar {...imgProps} />
      <p className="text-white">{name}</p>
      <p className="text-white">{position}</p>
    </div>
  )
}

export default TestimonialAvatar
