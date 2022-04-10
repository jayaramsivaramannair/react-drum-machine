import React from 'react'

interface sliderProps {
  displayValue : string
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>
  powerOn: boolean
  sliderValue: string
  setSliderValue: React.Dispatch<React.SetStateAction<string>>
}

const  Slider : React.FC<sliderProps> = ({
  displayValue, 
  setDisplayValue, 
  powerOn,
  sliderValue,
  setSliderValue,
}) => {
  const updateSlider = (e: React.FormEvent<HTMLInputElement>) => {
    if (powerOn) {
      setSliderValue(e.currentTarget.value)
      setDisplayValue(`Volume: ${sliderValue}`)
    }
    
  }

  return (
    <div className="volume">
      <input className="slider" type="range" min="1" max="100" value= {sliderValue} onInput = {(e) => updateSlider(e)}/>
    </div>
  )
}

export default Slider
