'use client'

import React, { useEffect, useState } from 'react'
import { first } from 'remeda'
import { ApiProductProduct } from '../../schemas'
import Button from './Button'
import VariationSelector from './VariationSelector'

type VariationType = ApiProductProduct['attributes']['variations']

const AddToCart = ({ variations }: VariationType) => {
  const [disableButton, setDisableButton] = useState(true)
  const [variation, setVariation] = useState<VariationType>(first(variations))
  const handleSelection = (selectedVariation: VariationType) => {
    setDisableButton(false)
    setVariation(selectedVariation)
  }
  useEffect(() => {
    if (variation) {
      setDisableButton(false)
    }
  }, [])

  return (
    <>
      {variations.length > 0 && (
        <VariationSelector
          handleSelection={handleSelection}
          selectedVariation={variation || {}}
          variations={variations}
        />
      )}
      <div>
        <Button disabled={disableButton} variant="secondary">
          Añadir al Carrito
        </Button>
      </div>
    </>
  )
}

export default AddToCart
