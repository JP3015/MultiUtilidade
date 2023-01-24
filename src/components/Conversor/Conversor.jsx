import React, {useState} from 'react'
import './Conversor.css'

export default function Conversor(){
    const [inputTemperature, setInputTemperature] = useState();
    const [varTemperature, setVarTemperature] = useState();
    const [inputLenght, setInputLenght] = useState();
    const [varLenght, setVarLenght] = useState();


    return(
        <body>
            <main>
                <div>
                    <p>Coloque a temperatura em Kelvin para transformar em Celcius:</p>
                    <input type="number" value = {inputTemperature} onInput={e => setInputTemperature(e.target.value)}/>
                    <span>{varTemperature}</span>
                    <button onClick={() => {setVarTemperature(inputTemperature - 273 + "°C")}}>Clique aqui</button>
                </div>
                <div>
                    <p>Coloque o tamanho em polegadas para transformar em centímetros:</p>
                    <input type="number" value = {inputLenght} onInput={e => setInputLenght(e.target.value)}/>
                    <span>{varLenght}</span>
                    <button onClick={() => {setVarLenght(inputTemperature - 273 + "°C")}}>Clique aqui</button>
                </div>
            </main>
        </body>
    )
}






