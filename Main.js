import React from "react"

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="main--title">{props.fact}</h1>
            <ul className="main--facts">
                <li>{props.year}</li>
                <li>{props.created}</li>
                <li>{props.gitHub}</li>
                <li>{props.faceBook}</li>
                <li>{props.others}</li>
            </ul>
        </main>
    )
}