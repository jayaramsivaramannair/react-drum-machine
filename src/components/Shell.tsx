import React from 'react'
import Buttons from './Buttons';
import Controls from './Controls';

function Shell() {
  return (
    <div>
      JSN DRUM MACHINE
      <div id="drum-machine">
        <Buttons />
        <Controls />
      </div>
    </div>
  )
}

export default Shell
