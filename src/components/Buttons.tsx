import React, {useState} from 'react'

interface buttonProps {
  powerOn: boolean
  setPowerOn: React.Dispatch<React.SetStateAction<boolean>>
  play: boolean
  setPlay: React.Dispatch<React.SetStateAction<boolean>>
  bankOn: boolean
  setBankOn: React.Dispatch<React.SetStateAction<boolean>>
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>
  sliderValue: string
  setSliderValue: React.Dispatch<React.SetStateAction<string>>
}

interface IAudioClip {
  [key: string] : string;
}

const Buttons: React.FC<buttonProps> = ({
  powerOn,
  setPowerOn,
  play, 
  setPlay,
  bankOn,
  setBankOn,
  setDisplayValue,
  sliderValue,
  setSliderValue
}) => {

  const drumPads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  const heaterAudio : IAudioClip = {
    'Q': 'Heater-1',
    'W': 'Heater-2',
    'E': 'Heater-3',
    'A': 'Heater-4',
    'S': 'Clap',
    'D': 'Open-HH-Heater',
    'Z': 'Kick-N-Hat',
    'X': 'Kick',
    'C': 'Closed-HH-Heater'
  }

  const pianoAudio : IAudioClip = {
    'Q': 'Chord-1',
    'W': 'Chord-2',
    'E': 'Chord-3',
    'A': 'Shaker',
    'S': 'Open-HH',
    'D': 'Closed-HH',
    'Z': 'Punchy-Kick',
    'X': 'Side-Stick',
    'C': 'Snare',
  }

  const AudioClip :  IAudioClip = {
    'Chord-1' : '/audio/Chord_1.mp3',
    'Chord-2' : '/audio/Chord_2.mp3',
    'Chord-3' : '/audio/Chord_3.mp3',
    'Shaker' : '/audio/Shaker.mp3',
    'Open-HH' : '/audio/Open HH.mp3',
    'Closed-HH': '/audio/Closed HH.mp3',
    'Punchy-Kick': '/audio/Punchy Kick.mp3',
    'Side-Stick': '/audio/Side Stick.mp3',
    'Snare' : '/audio/Snare.mp3',
    'Heater-1': '/audio/Heater 1.mp3',
    'Heater-2': '/audio/Heater 2.mp3',
    'Heater-3': '/audio/Heater 3.mp3',
    'Heater-4': '/audio/Heater 4.mp3',
    'Clap' : '/audio/Clap.mp3',
    'Open-HH-Heater': '/audio/Open HH-Heater.mp3', 
    'Kick-N-Hat': '/audio/Kick N Hat.mp3',
    'Kick': '/audio/Kick.mp3',
    'Closed-HH-Heater' : '/audio/Closed HH-Heater.mp3',
  }

  const selectAudio = (bankMode : boolean, keyValue : string) => {
    let audioClip = ''
    if (bankMode) {
      let audioKey = pianoAudio[keyValue]
      audioClip = AudioClip[audioKey]
    } else {
      let audioKey = heaterAudio[keyValue]
      audioClip = AudioClip[audioKey]
    }

    return audioClip
  }
  
  //let myAudio : HTMLAudioElement = new Audio();

  const playClip = (audioFile : string) => {
    let myAudio : HTMLAudioElement = new Audio(audioFile)
    if (powerOn) {
      myAudio.play();
    }
    myAudio.volume = parseInt(sliderValue) / 100
  }

  const selectDisplayValue = (bankOn: boolean, keyValue: string) => {
    if (bankOn) {
      return pianoAudio[keyValue].replaceAll('-', ' ')
    } else {
      return heaterAudio[keyValue].replaceAll('-', ' ')
    }
  }

  const clickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const selectedAudio = selectAudio(bankOn, event.currentTarget.innerText)
      if (powerOn) {
        setDisplayValue(selectDisplayValue(bankOn, event.currentTarget.innerText))
      }
      playClip(selectedAudio)
  }
  return (
    <div className="buttons">
      {
        drumPads.map((pad, index) => {
          return <div key={index} className="drum-pad" 
                    onClick = {(e) => clickHandler(e)}
                  >
                    {pad}
                  </div>
        })
      }
    </div>
  )
}

export default Buttons
