import React from 'react'

interface controlProps {
  powerOn: boolean
  setPowerOn: React.Dispatch<React.SetStateAction<boolean>>
  bankOn: boolean
  setBankOn: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<controlProps> = ({
  powerOn,
  setPowerOn,
  bankOn,
  setBankOn,
})  => {

  const togglePower = () => {
    setPowerOn(!powerOn)
  }

  const toggleBank = () => {
    setBankOn(!bankOn)
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
      <div className="display">

      </div>
      <div className="volume">

      </div>
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
