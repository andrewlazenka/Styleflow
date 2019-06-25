import React from 'react'
import CSSEditor, {
  ColorPicker,
  Dropdown,
  Option,
  SizeInput,
  Slider,
} from './index.js'
import { storiesOf } from '@storybook/react';

function App() {
  const [style, setStyle] = React.useState({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 18,
    width: 'auto',
    backgroundColor: '#685d86',
    borderRadius: 6
  })
  return (
    <div>
      <CSSEditor style={style} onChange={newStyle => setStyle(newStyle)}>
        <Dropdown property="position">
          <Option value="static" />
          <Option value="relative" />
          <Option value="absolute" />
          <Option value="fixed" />
          <Option value="sticky" />
        </Dropdown>
        <Dropdown property="display">
          <Option value="block" />
          <Option value="inline" />
          <Option value="flex" />
          <Option value="grid" />
          <Option value="none" />
        </Dropdown>
        <Dropdown property="flexDirection">
          <Option value="row" />
          <Option value="row-reverse" />
          <Option value="column" />
          <Option value="column-reverse" />
        </Dropdown>
        <Dropdown property="justifyContent">
          <Option value="center" />
          <Option value="start" />
          <Option value="end" />
          <Option value="flex-start" />
          <Option value="flex-end" />
          <Option value="left" />
          <Option value="right" />
          <Option value="normal" />
          <Option value="space-between" />
          <Option value="space-around" />
          <Option value="space-evenly" />
          <Option value="stretch" />
        </Dropdown>
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
        <ColorPicker property="backgroundColor" />
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

storiesOf('Editor', module)
  .add('CSS Editor', () => (
    <App />
  ));
