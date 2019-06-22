import React from 'react'
import PropTypes from 'prop-types'

import { useProperty } from './Editor'

export default function Slider({ property }) {
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
        type="range"
        min="0"
        max="100"
        id={propertyName}
        onChange={({ target: { value } }) => {
          setPropertyValue(Number(value) / 100)
        }}
        value={Number(propertyValue) * 100}
      />
    </div>
  )
}

Slider.propTypes = {
  property: PropTypes.oneOf(['opacity']).isRequired,
}
