import React, {useState} from 'react'
import Buttons from './Buttons';
import Controls from './Controls';

function Shell() {
  const [powerOn, setPowerOn] = useState(false)
  const [bankOn, setBankOn] = useState(false)
  const [displayValue, setDisplayValue] = useState('')
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
          setDisplayValue={setDisplayValue}
        />
        <Controls 
          powerOn = {powerOn}
          setPowerOn = {setPowerOn}
          bankOn = {bankOn}
          setBankOn = {setBankOn}
          displayValue = {displayValue}
          setDisplayValue={setDisplayValue}
        />
      </div>
    </div>
  )
}

export default Shell
