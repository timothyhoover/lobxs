import Link from 'next/link'
import Button from './Button'
import Google from './icons/Google'

const GoogleButton = ({ ...props }) => (
  <Link href={`http://localhost:1337/api/connect/google`}>
    <Button
      {...props}
      variant="tertiary"
      className="w-full bg-white border-neutral-400 text-neutral-contrast hover:bg-opacity-30"
      size="sm"
    >
      <div className="flex items-center space-x-2 text-current">
        <Google className="w-5 h-5" />
        <p className="text-current">Google</p>
      </div>
    </Button>
  </Link>
)

export default GoogleButton
