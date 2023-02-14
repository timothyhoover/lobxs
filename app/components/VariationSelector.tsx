'use client'

import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { map } from 'remeda'
import { ApiProductProduct } from '../../schemas'

type VariationType = ApiProductProduct['attributes']['variations']

const VariationSelector = ({
  variations,
  handleSelection,
  selectedVariation
}: VariationType) => {
  const [active, setActive] = useState<VariationType>()
  const handleClick = (variation: VariationType) => {
    const {
      attributes: { name }
    } = variation
    handleSelection(variation)
    setActive(name)
  }
  useEffect(() => {
    const {
      attributes: { name }
    } = selectedVariation || {}
    setActive(name)
  }, [])
  return (
    <div className="max-w-fit flex border border-lobxs rounded-md">
      {map(variations, (variation: VariationType) => {
        const {
          id,
          attributes: { name }
        } = variation
        return (
          <div
            onClick={() => handleClick(variation)}
            className={classNames(
              'py-1 px-3 border-r border-r-lobxs last:border-none base-hover-state',
              active === name
                ? 'bg-lobxs text-white'
                : 'text-neutral-contrast hover:bg-lobxs-lighter hover:bg-opacity-25 '
            )}
            key={id}
          >
            <p className="text-current">{name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default VariationSelector
