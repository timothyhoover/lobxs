import React from 'react'

const Pin = ({ ...props }) => {
  return (
    <svg
      {...props}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
    >
      <path
        d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 11a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Pin
