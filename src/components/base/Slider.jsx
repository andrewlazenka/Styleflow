import React from 'react'
import PropTypes from 'prop-types'

import { useProperty } from '../Editor'

export default function Slider({
  containerClass = '',
  inputClass = '',
  labelClass = '',
  property,
  min = 0,
  max = 100,
  valueModifier,
}) {
  const {
    friendlyPropertyName,
    propertyName,
    propertyValue,
    setPropertyValue,
  } = useProperty(property)
  return (
    <div className={containerClass}>
      <label className={labelClass} htmlFor={propertyName}>
        {friendlyPropertyName}
      </label>
      <input
        className={inputClass}
        type="range"
        min={min}
        max={max}
        id={propertyName}
        onChange={({ target: { value } }) => {
          if (valueModifier) {
            setPropertyValue(Number(value) / valueModifier)
          } else {
            setPropertyValue(Number(value))
          }
        }}
        value={
          valueModifier
            ? Number(propertyValue) * valueModifier
            : Number(propertyValue)
        }
      />
    </div>
  )
}

Slider.propTypes = {
  containerClass: PropTypes.string,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
  property: PropTypes.oneOf(['borderRadius', 'opacity']).isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
}
