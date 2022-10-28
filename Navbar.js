import React from "react"

export default function Navbar(props) {
   
    
    return (
         <nav 
            className={props.darkMode ? "dark": ""}
        >
            <img 
                className="nav--logo_icon"
                src={props.imgText}
            />
            <h3 className="nav--logo_text">{props.logoText}</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">{props.light}</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">{props.dark}</p>
            </div>
        </nav>
    )
}