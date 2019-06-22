import React from 'react'
import PropTypes from 'prop-types'

import { useProperty } from './Editor'

export default function ColorPicker({ property }) {
  const {
    friendlyPropertyName,
    propertyName,
    propertyValue,
    setPropertyValue,
  } = useProperty(property)
  return (
    <div>
      <label htmlFor={propertyName}>{friendlyPropertyName}</label>
      <input
        id={propertyName}
        type="color"
        onChange={({ target: { value } }) => {
          setPropertyValue(value)
        }}
        value={propertyValue}
      />
    </div>
  )
}

ColorPicker.propTypes = {
  property: PropTypes.oneOf(['backgroundColor']).isRequired,
}
