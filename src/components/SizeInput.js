import React from 'react'
import PropTypes from 'prop-types'

import { useProperty } from './Editor'
import { transformSizeInput, devError } from '../util'

function calculateValue(key, value) {
  if (key === 'ArrowUp' || key === 'ArrowDown') {
    if (!isNaN(Number(value))) {
      if (key === 'ArrowUp') {
        return Number(value) + 1
      } else if (key === 'ArrowDown') {
        return Number(value) - 1
      }
    }
  }
  return null
}

export default function SizeInput({ children, property }) {
  const {
    friendlyPropertyName,
    propertyName,
    propertyValue,
    setPropertyValue,
  } = useProperty(property)
  const [sizeValue, sizeUnit] = transformSizeInput(propertyValue)

  function updateSizeValue({ value = sizeValue, unit = sizeUnit }) {
    setPropertyValue(`${Number(value)}${unit}`)
  }

  function handleUnitChange({ target: { value: unit } }) {
    updateSizeValue({ unit })
  }

  function handleArrowInput({ target: { value }, key }) {
    const newValue = calculateValue(key, value)
    if (newValue) {
      updateSizeValue({ value: newValue })
    }
  }

  return (
    <div>
      <label htmlFor={propertyName}>{friendlyPropertyName}</label>
      <input
        value={sizeValue}
        id={propertyName}
        onChange={() => {}}
        onKeyDown={handleArrowInput}
        type="number"
      />
      <select id={propertyName} onChange={handleUnitChange} value={sizeUnit}>
        {React.Children.map(children, child => {
          if (child.type.name !== 'Option') {
            devError('SizeInput can only render the `Option` component.')
            return null
          }
          return React.cloneElement(child, { convertName: false })
        })}
      </select>
    </div>
  )
}

SizeInput.propTypes = {
  property: PropTypes.oneOf(['fontSize', 'width', 'height']).isRequired,
}
