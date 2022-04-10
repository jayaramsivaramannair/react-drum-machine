import React from 'react'
import Slider from './Slider'

interface controlProps {
  powerOn: boolean
  setPowerOn: React.Dispatch<React.SetStateAction<boolean>>
  bankOn: boolean
  setBankOn: React.Dispatch<React.SetStateAction<boolean>>
  displayValue: string
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>
  sliderValue: string
  setSliderValue: React.Dispatch<React.SetStateAction<string>>
}

const Controls: React.FC<controlProps> = ({
  powerOn,
  setPowerOn,
  bankOn,
  setBankOn,
  displayValue,
  setDisplayValue,
  sliderValue,
  setSliderValue
})  => {

  const togglePower = () => {
    setPowerOn(!powerOn)
  }

  const toggleBank = () => {
    if (powerOn) {
      setBankOn(!bankOn)
    if (!bankOn) {
      setDisplayValue('Smooth Piano Kit')
    } else {
      setDisplayValue('Heater Kit')
    }
    }
  }

  return (
    <div className="controls">
      <div className="toggle-switch">
          Power
          <div className="switch" onClick={togglePower}>
            <div className="switch-off" style={{backgroundColor: !powerOn ? 'blue' : 'black'}}></div>
            <div className="switch-on" style={{backgroundColor: powerOn ? 'blue' : 'black'}}></div>
          </div>
      </div>
      <div className="display"><p>{displayValue}</p></div>
      <Slider 
        displayValue={displayValue} 
        setDisplayValue={setDisplayValue} 
        powerOn={powerOn}
        sliderValue = {sliderValue}
        setSliderValue = {setSliderValue}
      />
      <div className="toggle-switch">
        Bank
        <div className="switch" onClick={toggleBank}>
            <div className="switch-off" style={{backgroundColor: !bankOn ? 'blue' : 'black'}}></div>
            <div className="switch-on" style={{backgroundColor: bankOn ? 'blue' : 'black'}}></div>
        </div>
      </div>
    </div>
  )
}

export default Controls
