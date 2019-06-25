import React from 'react'
import PropTypes from 'prop-types'

import { convertProperty } from '../../util'

export default function Option({
  convertName = true,
  optionClass = '',
  value,
}) {
  return (
    <option className={optionClass} value={value}>
      {convertName ? convertProperty(value) : value}
    </option>
  )
}

Option.propTypes = {
  convertName: PropTypes.bool,
  optionClass: PropTypes.string,
  value: PropTypes.string.isRequired
}
