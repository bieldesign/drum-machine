//import { useState } from 'react'
import './App.css'
import { AudioClip } from './types'
import Drum from './Drum'

const audioClips:AudioClip [] =[
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    desc:"Heater 1",
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    desc: "Heater 2",
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    desc: "Heater 3",
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    desc: "Heater 4",
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    desc: "Clap",
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    desc: "808",
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    desc: "Kick'n Hat",
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    desc: "Kick",
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    desc: "808 Alt",
  }
]

function App() {
  //const [count, setCount] = useState(0)
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find((clip)=>clip.keyTrigger === e.key.toUpperCase());
    if(!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)?.play();
    document.getElementById("drum-"+ clip.keyTrigger)?.focus();
    document.getElementById("display")!.innerText = clip.desc;
}
  return (
    <div className='tudo'>
    <div id="drum-machine" className='container' onKeyDown={playAudio}>
      <h1>Drum Machine</h1>
      <div id='drum-pads'>
        {audioClips.map((clips)=> (
          <Drum audioClip={clips} key={clips.keyTrigger}/>
        ))}
      </div>
      <div id='display'></div>
    </div>
    </div>
  )
}

export default App
