import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Conversor.css'

export default function Conversor(){
    const [inputTemperature, setInputTemperature] = useState();
    const [varTemperature, setVarTemperature] = useState();
    const [inputLenght, setInputLenght] = useState();
    const [varLenght, setVarLenght] = useState();
    const [temperature, setTemperature] = React.useState('kelvin');
    const [lenght, setLenght] = React.useState('polegadas');


    const countTemperature = () => {
        if(temperature == 'kelvin'){
            setVarTemperature((inputTemperature - 273) + "°C")
        }else{
            setVarTemperature(((inputTemperature - 32) * 5 / 9).toFixed(2) + "°C")
        }
    }
    const countLenght = () => {
        if(lenght == 'polegadas'){
            setVarLenght((inputLenght * 2.5).toFixed(2)  + " Centímetros")
        }else if(lenght == 'pes'){
            setVarLenght((inputLenght * 30.48).toFixed(2) + " Centímetros")
        }else if(lenght == 'jardas'){
            setVarLenght((inputLenght * 91.44).toFixed(2)  + " Centímetros")
        }else{
            setVarLenght((inputLenght / 10).toFixed(2)  + " Centímetros")
        }
    }

    return(
        <html>
            <Header />
            <body>
                <main className="container">
                    <div className="temperatura">
                        <p className="texto">Coloque a temperatura em
                            <select value={temperature} onChange={e => setTemperature(e.target.value)}>
                                <option value="kelvin">Kelvin</option>
                                <option value="fahrenheit">Fahrenheit</option>
                            </select> para transformar em Celcius:
                        </p>
                        <input type="number" value={inputTemperature} onInput={e => setInputTemperature(e.target.value)} />
                        <button onClick={countTemperature}>Clique aqui</button>
                        <span><b>Resultado: </b>{varTemperature}</span>
                    </div>
                    <div className="centimetros">
                        <p className="texto">Coloque o tamanho em
                            <select value={lenght} onChange={e => setLenght(e.target.value)}>
                                <option value="polegadas">Polegadas</option>
                                <option value="pes">Pés</option>
                                <option value="jardas">Jardas</option>
                                <option value="milimetros">Milímetros</option>
                            </select> para transformar em centímetros:</p>
                        <input type="number" value={inputLenght} onInput={e => setInputLenght(e.target.value)} />
                        <button onClick={countLenght}>Clique aqui</button>
                        <span><b>Resultado: </b>{varLenght}</span>
                    </div>
                </main>
            </body>
            <Footer />
        </html>
    )
}




