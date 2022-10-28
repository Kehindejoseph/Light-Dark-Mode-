import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
     
    const[darkMode, setDarkMode] = React.useState(true)
    function toggleDarkMode() {
        setDarkMode (prevMode => ! prevMode)
    }
    
    return (
        <div className="container">
            <Navbar 
            imgText ="./images/react-icon-small.png"
            logoText ="ReactFacts"
            light ="Light"
            dark="Dark"
            toggleDarkMode ={toggleDarkMode}
            darkMode = {darkMode}
            />
            <Main 
            fact = "Fun facts about React"
            year = "Was first released in 2013"
            created = "Was originally created by Jordan Walke"
            gitHub = "Has well over 100K stars on GitHub"
            faceBook= "Is maintained by Facebook"
            others = "Powers thousands of enterprise apps, including mobile apps"
            darkMode = {darkMode}
            />
        </div>
    )
}