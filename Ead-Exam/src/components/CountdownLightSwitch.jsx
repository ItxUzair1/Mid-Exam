import "./CountdownLightSwitch.css"
import { useState } from "react"


export default function CountdownLightSwitch(){
    const [isclick,setClick]=useState(false)

    const handleChange=(e)=>{
        console.log("Hello")
        setClick(!isclick)
    }
return (
<body className={isclick ? "bg-white" : "bg-black-500"}>
    {console.log(isclick)}
  <div className={isclick ? "container bg-white" : "container bg-black"}>
    <div className="header">
      <h1>Countdown & Light Switch</h1>
      <div className="toggle-container">
        <label className="toggle-switch">
          <input type="checkbox" id="themeToggle" name="togglebutton" onChange={handleChange}/>
          <span className="slider"></span>
        </label>
        <span>Light Mode</span>
      </div>
    </div>

    <div className="timer-section">
      <div className="progress-bar">
        <div className="progress" id="progress"></div>
      </div>
      <div className="timer" id="timerDisplay">30s</div>
      <div className="btn-group">
        <button id="startButton">Start Timer</button>
        <button id="resetButton">Reset Timer</button>
      </div>
      <div className="message" id="messageArea"></div>
    </div>
    {console.log(isclick)}
  </div>

  
</body>
    )
}