import React from 'react'
import { storiesOf } from '@storybook/react';

import CSSEditor from '../components/Editor'
import Slider from '../components/base/Slider'

function SliderDemo() {
  const [style, setStyle] = React.useState({
    backgroundColor: '#685d86',
    borderRadius: 6,
    opacity: 0.75
  })
  return (
    <div>
      <CSSEditor style={style} onChange={newStyle => setStyle(newStyle)}>
        <Slider property="opacity" valueModifier={100} />
        <Slider property="borderRadius" max={50} />
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

storiesOf('Base Components', module)
  .add('Slider', () => (
    <SliderDemo />
  ));
