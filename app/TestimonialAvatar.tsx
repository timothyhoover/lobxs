import { ImageProps } from 'next/image'
import Avatar from './components/Avatar'

type props = ImageProps & {
  name: string
  job?: string
}

const TestimonialAvatar = ({ name, job, ...imgProps }: props) => {
  return (
    <div className="flex flex-col items-center">
      <Avatar {...imgProps} />
      <p className="text-white">{name}</p>
      <p className="text-white">{job}</p>
    </div>
  )
}

export default TestimonialAvatar
