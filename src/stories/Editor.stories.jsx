import React from 'react'
import CSSEditor, { useProperty } from '../components/Editor'
import { storiesOf } from '@storybook/react';

function CustomPropertyField() {
  const {
    friendlyPropertyName,
    propertyName,
    propertyValue,
    setPropertyValue,
  } = useProperty('marginTop')
  return (
    <div>
      <label htmlFor={propertyName}>
        {friendlyPropertyName}
      </label>
      <select
        id={propertyName}
        onChange={({ target: { value } }) => {
          setPropertyValue(Number(value))
        }}
        value={propertyValue}
      >
        <option value={5}>5px</option>
        <option value={10}>10px</option>
        <option value={25}>25px</option>
        <option value={50}>50px</option>
      </select>
    </div>
  )
}

function App() {
  const [style, setStyle] = React.useState({
    marginTop: 10
  })
  return (
    <div>
      <CSSEditor style={style} onChange={newStyle => setStyle(newStyle)}>
        <CustomPropertyField />
      </CSSEditor>
      <div style={style}>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
      </div>
    </div>
  )
}

storiesOf('Editor', module)
  .add('useProperty, custom property field', () => (
    <App />
  ));
