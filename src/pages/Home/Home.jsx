import React from 'react'
import './Home.css'

export default function Home(){
    return(
        <body className="home">
            <div className="homeRoutes">
                <ul className="ulHome">
                    <li className="liHome">
                        <a class="url" href="conversor">
                            <i>Conversor</i>
                        </a>
                    </li>
                </ul>
                <ul className="ulHome">
                    <li className="liHome">
                        <a class="url" href="ip">
                            <i>IP</i>
                        </a>
                    </li>
                </ul>
                <ul className="ulHome">
                    <li className="liHome">
                        <a class="url" href="#">
                            <i>Desenhar</i>
                        </a>
                    </li>
                </ul>
                <ul className="ulHome">
                    <li className="liHome">
                        <a class="url" href="#">
                            <i>Sobre</i>
                        </a>
                    </li>
                </ul>
            </div>
        </body>
    )
}


