import React, {useState} from 'react'

const  Slider = () => {

  const [sliderValue, setSliderValue] = useState("0")
  const updateSlider = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    setSliderValue(e.currentTarget.value)
  }

  return (
    <div className="volume">
      <input className="slider" type="range" min="1" max="100" value= {sliderValue} onInput = {(e) => updateSlider(e)}/>
    </div>
  )
}

export default Slider
