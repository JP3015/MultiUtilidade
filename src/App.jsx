import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Conversor from './pages/Conversor/Conversor';
import Ip from './pages/Ip/Ip'
import Desenhar from './pages/Desenhar/Desenhar'


function App(){
  return(
      <Router>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/conversor" element={<Conversor />}/>
              <Route path="/ip" element={<Ip />}/>
              <Route path="/desenhar" element={<Desenhar />}/>
          </Routes>
      </Router>
    )
}


export default App