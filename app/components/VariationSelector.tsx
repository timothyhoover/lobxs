'use client'

import classNames from 'classnames'
import React, { useState } from 'react'
import { map } from 'remeda'
import { ApiProductProduct } from '../../schemas'

type VariationType = ApiProductProduct['attributes']['variations']

const VariationSelector = ({ variations }: VariationType) => {
  const [active, setActive] = useState<VariationType>()

  return (
    <div className="max-w-fit flex border border-lobxs rounded-md">
      {map(variations, ({ id, attributes: { name } }: VariationType) => {
        return (
          <div
            onClick={() => setActive(name)}
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
