import React from 'react'
import './Header.css'

export default function Header(){
    return(
        <header>
            <h1 class="textoHeader"><b>Multi-Utilidade</b></h1>
            <div class="rotas">
                <p class="rotasTexto">Conversor</p>
                <p class="rotasTexto">IP</p>
                <p class="rotasTexto">Desenhar</p>
                <p class="rotasTexto">Sobre</p>
            </div>
        </header>
    )
}


