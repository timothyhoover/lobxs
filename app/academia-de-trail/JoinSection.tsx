import React from 'react'
import Button from '../../components/Button'

const JoinSection = () => {
  return (
    <section className="bg-neutral">
      <div className="flex flex-col items-center py-20 space-y-10 px-10 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center">
          Recuerda que pasarás a formar parte de nuestra comunidad y podrás
          acceder a nuestras asesorías para resolver todas tus dudas. Entra ya
          para formarte con nosotras y seguir evolucionando en la montaña.
        </h3>
        <Button variant="secondary" size="lg">
          Entra Ya
        </Button>
      </div>
    </section>
  )
}

export default JoinSection
