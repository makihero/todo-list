// src/components/Checkbox.js
import React from "react";

// Definición del componente Checkbox
const Checkbox = ({ isChecked, onChange }) => {
  // Retorna un elemento de entrada de tipo 'checkbox'
  return (
    <input
      type="checkbox" // Define el tipo de entrada como una casilla de verificación
      checked={isChecked} // Establece si la casilla de verificación está marcada o desmarcada
      onChange={onChange} // Asigna una función que se llama cuando cambia el estado de la casilla
    />
  );
};
export default Checkbox;
