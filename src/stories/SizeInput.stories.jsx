import React from 'react'
import { storiesOf } from '@storybook/react';

import CSSEditor from '../components/Editor'
import Option from '../components/base/Option'
import SizeInput from '../components/base/SizeInput'

function SizeInputDemo() {
  const [style, setStyle] = React.useState({
    backgroundColor: 'pink',
    fontSize: 18,
    width: 200,
  })
  return (
    <div>
      <CSSEditor style={style} onChange={newStyle => setStyle(newStyle)}>
        <SizeInput property="fontSize">
          <Option value="px" />
          <Option value="%" />
          <Option value="em" />
          <Option value="rem" />
        </SizeInput>
        <SizeInput property="width">
          <Option value="px" />
          <Option value="%" />
          <Option value="em" />
          <Option value="auto" />
        </SizeInput>
      </CSSEditor>
      <div style={style}>
        <span>One</span>
        <span>Two</span>
        <span>Three</span>
        <span>Four</span>
        <span>Five</span>
      </div>
    </div>
  )
}

storiesOf('Base Components', module)
  .add('Size Input with Options', () => (
    <SizeInputDemo />
  ));
