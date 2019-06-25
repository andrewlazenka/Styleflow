import React from 'react'
import PropTypes from 'prop-types'

import { CaseEnum } from '../types'
import { convertProperty, propertyCasing, devLog } from '../util'

function styleReducer(state, { property, value }) {
  let newState = { ...state }
  if (property) {
    newState[property] = value
    devLog('Style Update', newState)
  } else {
    devLog('Property not given, no state update')
  }
  return newState
}

export const EditorContext = React.createContext()
export default function Editor({
  casing = 'camel',
  children,
  onChange = () => {},
  style: initialStyle = {},
}) {
  const [style, dispatchStyle] = React.useReducer(styleReducer, initialStyle)

  React.useEffect(() => {
    onChange(style)
  }, [style, onChange])

  return (
    <EditorContext.Provider value={{ casing, style, dispatchStyle }}>
      {children}
    </EditorContext.Provider>
  )
}

Editor.propTypes = {
  casing: CaseEnum,
  children: PropTypes.node,
  onChange: PropTypes.func,
  style: PropTypes.object,
}

function propertyValueFallback(propertyValue) {
  if (typeof propertyValue === 'number') {
    return 0
  }
  return undefined
}

export function useProperty(property) {
  const { casing, style, dispatchStyle } = React.useContext(EditorContext)
  const propertyName = propertyCasing(property, casing)
  const friendlyPropertyName = convertProperty(propertyName)
  const propertyValue =
    style[property] || propertyValueFallback(style[property])
  const setPropertyValue = value => dispatchStyle({ property, value })

  return {
    friendlyPropertyName,
    propertyName,
    propertyValue,
    setPropertyValue,
  }
}
