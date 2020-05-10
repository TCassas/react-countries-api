import React from "react"
import "../index.css"

function Navbar(props) {
  return(
    <header>
      <div className="shadow" style={props.lightMode ? {backgroundColor: "white"} : {backgroundColor: "hsl(209, 23%, 22%)"}}>
        <div className="pre-nav container">
          <h1 style={props.lightMode ? {color: "black"} : {color: "white"}}>Where in the world?</h1>
          <button onClick={props.handleClick} style={props.lightMode ? {color: "black"} : {color: "white"}}>
            <ion-icon name="moon-outline" style={props.lightMode ? {color: "black"} : {color: "white"}}></ion-icon>
            Dark Mode
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
