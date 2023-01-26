import React from 'react'
import './Header.css'

export default function Header(){
    return(
        <header>
            <h1 class="textoHeader"><b>Multi-Utilidade</b></h1>
            <div class="rotas">
                <ul>
                    <li>
                        <a class="pages" href="#">
                            <i>Conversor</i>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a class="pages" href="#">
                            <i>IP</i>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a class="pages" href="#">
                            <i>Desenhar</i>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a class="pages" href="#">
                            <i>Sobre</i>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}


