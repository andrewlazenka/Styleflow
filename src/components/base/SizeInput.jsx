import React from 'react'
import PropTypes from 'prop-types'

import { useProperty } from '../Editor'
import { transformSizeInput, devError } from '../../util'

export default function SizeInput({
  children,
  containerClass = '',
  inputClass = '',
  labelClass = '',
  property,
}) {
  const {
    friendlyPropertyName,
    propertyName,
    propertyValue,
    setPropertyValue,
  } = useProperty(property)
  const [sizeValue, sizeUnit] = transformSizeInput(propertyValue)

  function updateSizeValue({ value = sizeValue, unit = sizeUnit }) {
    if (unit === 'auto') {
      setPropertyValue('auto')
    } else {
      setPropertyValue(`${Number(value)}${unit}`)
    }
  }

  function handleUnitChange({ target: { value: unit } }) {
    if (unit === 'auto') {
      updateSizeValue({ value: '', unit })
    } else {
      updateSizeValue({ unit })
    }
  }

  function handleInputChange({ target: { value } }) {
    if (Number(value) >= 0) {
      if (sizeUnit === 'auto') {
        updateSizeValue({ value, unit: 'px' })
      } else {
        updateSizeValue({ value })
      }
    }
  }

  return (
    <div className={containerClass}>
      <label className={labelClass} htmlFor={propertyName}>
        {friendlyPropertyName}
      </label>
      <input
        className={inputClass}
        id={propertyName}
        onChange={handleInputChange}
        type="number"
        value={sizeUnit !== 'auto' ? sizeValue : ''}
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
  containerClass: PropTypes.string,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
  property: PropTypes.oneOf(['fontSize', 'width', 'height']).isRequired,
}
