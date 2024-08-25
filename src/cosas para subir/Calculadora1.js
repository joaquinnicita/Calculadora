import React, { useState, useEffect } from 'react';
import './Calculator.css';


function Calculadora1() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  useEffect(() => {
    calculate();
  }, [value1, value2, operation]);

  const calculate = () => { //hace una variable y depende que sea la operacion mete un switch y lo mete en result
    let res;
    switch (operation) {
      case 'add':
        res = value1 + value2;
        break;
      case 'subtract':
        res = value1 - value2;
        break;
      case 'multiply':
        res = value1 * value2;
        break;
      case 'divide':
        res = value2 !== 0 ? value1 / value2 : 'Error: División por cero';
        break;
      default:
        res = 'Operación no válida';
    }
    setResult(res);
  };

  //mete 2 inputs, una lista con la operacion a realizar, un boton de calcular y un coso con el resultado
  // setea los dos inputs respectivamente y cuando se apreta el boton de calcular, llama a calculare y lo mete en resultado
  return (
    <div className="calculator">
      <input
        type="number"
        value={value1}
        onChange={(e) => setValue1(parseFloat(e.target.value))}
        placeholder="Valor 1"
      />
      <input
        type="number"
        value={value2}
        onChange={(e) => setValue2(parseFloat(e.target.value))}
        placeholder="Valor 2"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Suma</option>
        <option value="subtract">Resta</option>
        <option value="multiply">Multiplicación</option>
        <option value="divide">División</option>
      </select>
      <div id="result">Resultado: {result}</div>
    </div>
  );
}

export default Calculadora1;