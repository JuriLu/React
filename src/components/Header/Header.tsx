import reactCoreConceptsImg from "../../assets/react-core-concepts.png";
import './Header.css'
import React from "react";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function getRandomInt(max:number) {
    return Math.floor(Math.random() * (max + 1));
}


export default function Header():React.JSX.Element {
    const description = reactDescriptions[getRandomInt(2)];
    return (
        <header>
            <img src={reactCoreConceptsImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}