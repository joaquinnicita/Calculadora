import React, { useState } from 'react';
import Calculadora1 from './Calculadora1.js';
import Calculadora2 from './Calculadora2.js';
import Calculadora3 from './Calculadora3.js';
import './App.css';

function MiComponente() {
  const [componenteActual, setComponenteActual] = useState(null);

  const mostrarComponente = (componente) => {
    switch(componente) {
      case 'Calculadora1':
        return <Calculadora1 />;
      case 'Calculadora2':
        return <Calculadora2 />;
      case 'Calculadora3':
        return <Calculadora3 />;
      default:
        return null;
    }
  }

  return (
    <div>
      <button className="boton" onClick={() => setComponenteActual('Calculadora1')}>C1</button>
      <button className="boton" onClick={() => setComponenteActual('Calculadora2')}>C2</button>
      <button className="boton" onClick={() => setComponenteActual('Calculadora3')}>C3</button>
      {mostrarComponente(componenteActual)}
    </div>
  );
}

export default MiComponente;