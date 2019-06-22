import React from 'react'

import { CaseEnum, DropdownEnum } from '../types'
import { useProperty } from './Editor'
import { devError } from '../util'

export default function Dropdown({ children, property }) {
  const {
    friendlyPropertyName,
    propertyName,
    propertyValue,
    setPropertyValue,
  } = useProperty(property)
  return (
    <div>
      <label htmlFor={propertyName}>{friendlyPropertyName}</label>
      <select
        id={propertyName}
        onChange={({ target: { value } }) => {
          setPropertyValue(value)
        }}
        value={propertyValue}
      >
        <option value="" />
        {React.Children.map(children, child => {
          if (child.type.name !== 'Option') {
            devError('Dropdown can only render the `Option` component.')
            return null
          }
          return child
        })}
      </select>
    </div>
  )
}

Dropdown.propTypes = {
  casing: CaseEnum,
  property: DropdownEnum.isRequired,
}
