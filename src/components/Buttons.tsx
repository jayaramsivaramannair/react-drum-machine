import React from 'react'

interface buttonProps {
  powerOn: boolean
  setPowerOn: React.Dispatch<React.SetStateAction<boolean>>
  play: boolean
  setPlay: React.Dispatch<React.SetStateAction<boolean>>
  bankOn: boolean
  setBankOn: React.Dispatch<React.SetStateAction<boolean>>
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
}) => {

  const drumPads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  const heaterAudio : IAudioClip = {
    'Q': 'Heater1',
    'W': 'Heater2',
    'E': 'Heater3',
    'A': 'Heater4',
    'S': 'Clap',
    'D': 'OpenHHH',
    'Z': 'KickNHat',
    'X': 'Kick',
    'C': 'ClosedHHH'
  }

  const pianoAudio : IAudioClip = {
    'Q': 'Chord1',
    'W': 'Chord2',
    'E': 'Chord3',
    'A': 'Shaker',
    'S': 'OpenHH',
    'D': 'ClosedHH',
    'Z': 'PunchyKick',
    'X': 'SideStick',
    'C': 'Snare',
  }

  const AudioClip :  IAudioClip = {
    'Chord1' : '/audio/Chord_1.mp3',
    'Chord2' : '/audio/Chord_2.mp3',
    'Chord3' : '/audio/Chord_3.mp3',
    'Shaker' : '/audio/Shaker.mp3',
    'OpenHH' : '/audio/Open HH.mp3',
    'ClosedHH': '/audio/Closed HH.mp3',
    'PunchyKick': '/audio/Punchy Kick.mp3',
    'SideStick': '/audio/Side Stick.mp3',
    'Snare' : '/audio/Snare.mp3',
    'Heater1': '/audio/Heater 1.mp3',
    'Heater2': '/audio/Heater 2.mp3',
    'Heater3': '/audio/Heater 3.mp3',
    'Heater4': '/audio/Heater 4.mp3',
    'Clap' : '/audio/Clap.mp3',
    'OpenHHH': '/audio/Open HH-Heater.mp3', 
    'KickNHat': '/audio/Kick N Hat.mp3',
    'Kick': '/audio/Kick.mp3',
    'ClosedHHH' : '/audio/Closed HH-Heater.mp3',
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
    myAudio.volume = 0.75
  }

  const clickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const selectedAudio = selectAudio(bankOn, event.currentTarget.innerText)
      console.log(selectedAudio)
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
