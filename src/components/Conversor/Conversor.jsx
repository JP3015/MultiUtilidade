import React, {useState} from 'react'
import './Conversor.css'

export default function Conversor(){
    const [inputTemperature, setInputTemperature] = useState();
    const [varTemperature, setVarTemperature] = useState();
    const [inputLenght, setInputLenght] = useState();
    const [varLenght, setVarLenght] = useState();


    return(
        <body class="container">
            <main>
                <div class="temperatura">
                    <p class="texto">Coloque a temperatura em Kelvin para transformar em Celcius:</p>
                    <input class="input" type="number" value = {inputTemperature} onInput={e => setInputTemperature(e.target.value)}/>
                    <button onClick={() => {setVarTemperature(inputTemperature - 273 + "°C")}}>Clique aqui</button>
                    <span>{varTemperature}</span>
                </div>
                <div class="centimetros">
                    <p class="texto">Coloque o tamanho em polegadas para transformar em centímetros:</p>
                    <input class="input" type="number" value = {inputLenght} onInput={e => setInputLenght(e.target.value)}/>
                    <button onClick={() => {setVarLenght(inputTemperature - 273 + " Centímetros")}}>Clique aqui</button>
                    <span>{varLenght}</span>
                </div>
            </main>
        </body>
    )
}






