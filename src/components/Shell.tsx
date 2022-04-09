import React, {useState} from 'react'
import Buttons from './Buttons';
import Controls from './Controls';

function Shell() {
  const [powerOn, setPowerOn] = useState(false)
  const [bankOn, setBankOn] = useState(false)
  const [play, setPlay] = useState(true)
  return (
    <div>
      JSN DRUM MACHINE
      <div id="drum-machine">
        <Buttons 
          powerOn = {powerOn}
          setPowerOn = {setPowerOn}
          play = {play}
          setPlay = {setPlay}
          bankOn = {bankOn}
          setBankOn = {setBankOn}
        />
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
