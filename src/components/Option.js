import React from 'react'

import { convertProperty } from '../util'

export default function Option({ convertName = true, value }) {
  return (
    <option value={value}>
      {convertName ? convertProperty(value) : value}
    </option>
  )
}
