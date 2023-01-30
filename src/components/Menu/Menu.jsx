import React from "react";
import "../../pages/Desenhar/Desenhar.css";
  
const Menu = ({ setLineColor, setLineWidth, setLineOpacity }) => {
    return (
        <div className="Menu">
        <label><b>Cor do pincel</b></label>
        <input
            type="color"
            onChange={(e) => {
            setLineColor(e.target.value);
            }}
        />
        <label><b>Largura do pincel</b></label>
        <input
            type="range"
            min="3"
            max="20"
            onChange={(e) => {
            setLineWidth(e.target.value);
            }}
        />
        <label><b>Opacidade do pincel</b></label>
        <input
            type="range"
            min="1"
            max="100"
            onChange={(e) => {
            setLineOpacity(e.target.value / 100);
            }}
        />
        </div>
    );
};
  
export default Menu;