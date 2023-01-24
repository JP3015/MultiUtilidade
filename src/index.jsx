import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Conversor from './components/Conversor/Conversor';
import Footer from './components/Footer/Footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Conversor />
    <Footer />
  </React.StrictMode>
);


