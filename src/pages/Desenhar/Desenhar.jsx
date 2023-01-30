import { useEffect, useRef, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import "./Desenhar.css";
  
function App() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);
  const [array, setArray] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth]);
  
  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
      e.nativeEvent.offsetX, 
      e.nativeEvent.offsetY
    );
    setIsDrawing(true)
    setArray((prevArray) => [
        ...prevArray,
        ctxRef.current.getImageData(0, 0, ctxRef.current.canvas.width, ctxRef.current.canvas.height),
    ])
    setIndex(index + 1)
  };
  
  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);

    console.log(array)
    console.log(index)
  };
  
  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(
      e.nativeEvent.offsetX, 
      e.nativeEvent.offsetY
    );
      
    ctxRef.current.stroke();
  };

  const clear = () => {
    ctxRef.current.clearRect(0, 0, ctxRef.current.canvas.width, ctxRef.current.canvas.height)
    setArray([])
    setIndex(-1)
  }

  const undo = () => {
    if(index <= 0){
        clear();
    }else{
        setArray(array.slice(0, -1))
        setIndex(index - 1)
        ctxRef.current.putImageData(array[index],0,0)
    }
  }
  
  return (
    <>
        <Header />
        <div className="draw-page">
            <h1 className="Title">Desenhar</h1>
            <div className="draw-area">
                <Menu
                setLineColor={setLineColor}
                setLineWidth={setLineWidth}
                setLineOpacity={setLineOpacity}
                />
                <canvas
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}
                ref={canvasRef}
                width={`1280px`}
                height={`720px`}
                />
            </div>
            <div>
                <button className="draw-button" onClick={undo}>Reverter</button>
                <button className="draw-button" onClick={clear}>Limpar</button>
            </div>
        </div>
        <Footer />
    </>
  );
}
  
export default App;