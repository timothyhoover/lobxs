import React from 'react'
import Button from '../../components/Button'

const JoinUsSection = () => {
  return (
    <div className="flex flex-col items-center py-20 space-y-10 px-10">
      <h3 className="text-6xl font-bold">
        Te ayudamos a perseguir tu instinto. Para que dejes huella.
      </h3>
      <Button variant="secondary" size="lg">
        Únete A Nosotrxs
      </Button>
    </div>
  )
}

export default JoinUsSection
