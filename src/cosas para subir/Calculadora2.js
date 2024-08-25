import React, { useState } from 'react';
import './Calculator.css';

const Calculadora2 = () => {  //estructura basica de la calculadora
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

 

  const handleClear = () => { //esta limpia el input si se presiona c 
    setInput('');
  };



  return ( //lo que hace return es devolver el html que se va a mostrar en pantalla 
    //en el div keyboar los numeros llaman a la funcion handleclick y le pasan el numero
    // el operador igual llama a calculate y el clear a handleclear
    <div className="calculator">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
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
        <button onClick={() => handleClick('(')} className="operator">(</button>
        <button onClick={() => handleClick(')')} className="operator">)</button>
      </div>
    </div>
  );
  
  
  
};

export default Calculadora2; //esto hace que se puede exportar para usar como componente en el App.js 
