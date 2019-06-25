import React from 'react'
import PropTypes from 'prop-types'

import { useProperty } from '../Editor'

export default function ColorPicker({
  containerClass = '',
  colorInputClass = '',
  textInputClass = '',
  labelClass = '',
  property,
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
        className={colorInputClass}
        id={propertyName}
        onChange={({ target: { value } }) => {
          setPropertyValue(value)
        }}
        type="color"
        value={propertyValue}
      />
      <input
        className={textInputClass}
        id={propertyName}
        onChange={({ target: { value } }) => {
          setPropertyValue(value)
        }}
        type="input"
        value={propertyValue}
      />
    </div>
  )
}

ColorPicker.propTypes = {
  containerClass: PropTypes.string,
  colorInputClass: PropTypes.string,
  textInputClass: PropTypes.string,
  labelClass: PropTypes.string,
  property: PropTypes.oneOf(['backgroundColor']).isRequired,
}
