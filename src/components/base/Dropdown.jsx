import React from 'react'
import PropTypes from 'prop-types'

import { CaseEnum, DropdownEnum } from '../../types'
import { useProperty } from '../Editor'
import { devError } from '../../util'

export default function Dropdown({
  children,
  containerClass = '',
  labelClass = '',
  property,
  optionClass = '',
  selectClass = '',
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
      <select
        className={selectClass}
        id={propertyName}
        onChange={({ target: { value } }) => {
          setPropertyValue(value)
        }}
        value={propertyValue}
      >
        <option className={optionClass} value="" />
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
  containerClass: PropTypes.string,
  labelClass: PropTypes.string,
  optionClass: PropTypes.string,
  property: DropdownEnum.isRequired,
  optionClass: PropTypes.string,
  selectClass: PropTypes.string,
}
