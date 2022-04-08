import React, {useState} from 'react'
import Buttons from './Buttons';
import Controls from './Controls';

function Shell() {
  const [powerOn, setPowerOn] = useState(false)
  const [bankOn, setBankOn] = useState(false)
  return (
    <div>
      JSN DRUM MACHINE
      <div id="drum-machine">
        <Buttons />
        <Controls 
          powerOn = {powerOn}
          setPowerOn = {setPowerOn}
          bankOn = {bankOn}
          setBankOn = {setBankOn}
        />
      </div>
    </div>
  )
}

export default Shell
