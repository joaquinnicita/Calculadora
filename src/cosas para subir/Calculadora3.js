import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {  //estructura basica de la calculadora
  const [input, setInput] = useState(''); //useState es para que se actualice la variable
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const handleClick = (value) => { 
    setInput(input + value);
  };

  const handleCalculate = () => { //esto calcula, mete el resultado en el input y se lo pasa al historial
    try {
      const result = eval(input).toString();
      setInput(result);
      setHistory([...history.slice(-9), input + ' = ' + result]); // Guardamos las últimas 10 operaciones
      setHistoryIndex(-1); // Reiniciamos el índice del historial
    } catch {
      setInput('Error');
    }
  };

  const handleKeyPress = (event) => { //esto es para el input desde el teclado
    const allowedKeys = '0123456789+-*/.=';
    if (allowedKeys.includes(event.key)) {
      event.preventDefault();
      setInput((prevInput) => prevInput + event.key);
    }
    if (event.key === 'Enter') { //esto llama a calculate si se presiona enter
      event.preventDefault();
      handleCalculate();
    }
  };

  const handleArrowKeyPress = (event) => { //esta va a navegar el historial si se presionan las flechas
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (historyIndex < history.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setInput(history[history.length - 1 - historyIndex - 1]);
      }
    }
    if (event.key === 'ArrowDown') { //esta va a navegar el historial si se presionan las flechas
      event.preventDefault();
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setInput(history[history.length - 1 - historyIndex + 1]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const handleClear = () => { //esta limpia el input si se presiona c 
    setInput('');
  };

  const handleArrowClick = (direction) => { //esta navega el historial si se presionan flechas del teclado en pantalla
    if (direction === 'up') {
      if (historyIndex < history.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setInput(history[history.length - 1 - historyIndex - 1]);
      }
    } else if (direction === 'down') {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setInput(history[history.length - 1 - historyIndex + 1]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return ( //lo que hace return es devolver el html que se va a mostrar en pantalla 
    //en el div keyboar los numeros llaman a la funcion handleclick y le pasan el numero
    // el operador igual llama a calculate y el clear a handleclear
    <div className="calculator">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress} // esto es para el input del teclado fisico
        onKeyUp={handleArrowKeyPress} //esto es para el input de las flechas fisicas
        id="display"
      />
      <div className="keyboard"> 
        <button onClick={() => handleClick('7')} className="number">7</button> 
        <button onClick={() => handleClick('8')} className="number">8</button>
        <button onClick={() => handleClick('9')} className="number">9</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')} className="number">4</button>
        <button onClick={() => handleClick('5')} className="number">5</button>
        <button onClick={() => handleClick('6')} className="number">6</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')} className="number">1</button>
        <button onClick={() => handleClick('2')} className="number">2</button>
        <button onClick={() => handleClick('3')} className="number">3</button>
        <button className="operator" onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')} className="number">0</button>
        <button onClick={() => handleClick('.')} className="number">.</button>
        <button className="operator" onClick={() => handleClick('/')}>/</button>
        <button onClick={handleCalculate} className="operator">=</button> 
        <button onClick={handleClear} className="operator">C</button>
        <button onClick={() => handleArrowClick('up')} className="operator">↑</button>
        <button onClick={() => handleArrowClick('down')} className="operator">↓</button>
      </div>
    </div>
  );
  
  
  
};

export default Calculator; //esto hace que se puede exportar para usar como componente en el App.js 
