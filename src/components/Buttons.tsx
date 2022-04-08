import React from 'react'

function Buttons() {

  const drumPressed = false

  const drumPads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  return (
    <div className="buttons">
      {
        drumPads.map((pad) => {
          return <div className="drum-pad" 
                  >
                    {pad}
                  </div>
        })
      }
      
    </div>
  )
}

export default Buttons
