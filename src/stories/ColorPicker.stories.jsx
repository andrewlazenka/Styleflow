import React from 'react'
import { storiesOf } from '@storybook/react'

import ColorPicker from '../components/base/ColorPicker'
import CSSEditor from '../components/Editor'

function ColorPickerDemo() {
  const [style, setStyle] = React.useState({
    backgroundColor: '#685d86',
  })
  return (
    <div>
      <CSSEditor style={style} onChange={newStyle => setStyle(newStyle)}>
        <ColorPicker property="backgroundColor" />
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

storiesOf('Base Components', module).add('Color Picker', () => (
  <ColorPickerDemo />
))
