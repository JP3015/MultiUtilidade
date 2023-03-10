import React from 'react'
import './Header.css'

export default function Header(){
    return(
        <header>
            <h1 className="textHeader"><b>Multi-Utilidade</b></h1>
            <div className="routes">
                <ul className="ulRoutes">
                    <li className="liRoutes">
                        <a className="button-page" href="conversor">
                            <i>Conversor</i>
                        </a>
                    </li>
                </ul>
                <ul className="ulRoutes">
                    <li className="liRoutes">
                        <a className="button-page" href="ip">
                            <i>IP</i>
                        </a>
                    </li>
                </ul>
                <ul className="ulRoutes">
                    <li className="liRoutes">
                        <a className="button-page" href="desenhar">
                            <i>Desenhar</i>
                        </a>
                    </li>
                </ul>
                <ul className="ulRoutes">
                    <li className="liRoutes">
                        <a className="button-page" href="sobre">
                            <i>Sobre</i>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}


