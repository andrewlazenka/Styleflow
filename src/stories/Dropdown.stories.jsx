import React from 'react'
import { storiesOf } from '@storybook/react'

import Dropdown from '../components/base/Dropdown'
import CSSEditor from '../components/Editor'
import Option from '../components/base/Option'

function DropdownDemo() {
  const [style, setStyle] = React.useState({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  })
  return (
    <div>
      <CSSEditor style={style} onChange={newStyle => setStyle(newStyle)}>
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

storiesOf('Base Components', module).add('Dropdown with Options', () => (
  <DropdownDemo />
))
