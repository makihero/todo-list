/// src/components/Container.js
import React from "react";

// Definición del componente Container
const Container = ({ children }) => {
    // Retorna un elemento <div> con la clase CSS "container"
  return <div className="container">
    {children} {/* Renderiza los elementos hijos dentro del container */}
    </div>;
};
export default Container;
