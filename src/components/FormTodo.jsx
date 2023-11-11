// src/components/FormTodo.js
import React, { useState } from "react";

//Definición del componente FormTodo
const FormTodo = ({ onAddTask }) => {
  //Estado local para el nombre de la tarea
  const [taskName, setTaskName] = useState("");
  //Funcion poara manejar cambios en el nombre de la tarea
  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  // Función para manejar el envío del formulario
  const HandleSubmit = (e) => {
    e.preventDefault(); //Previene la recarga de la página al enviar el formulario
    if (taskName.trim() !== "") {
      onAddTask(taskName); //Llama a la funcion onAddTask pasando el nombre de la tarea como argumento
      setTaskName(""); // Limpia el campo de entrada (taskName) después de agregar la tarea
    }
  };

  // Renderiza un formulario con un campo de entrada y un botón para agregar una tarea
  return (
    <form onSubmit={HandleSubmit}>
      <input
        type="text"
        placeholder="Add Item"
        value={taskName}
        onChange={handleTaskNameChange}
      />
      <button className="agregar" type="submit">+</button>
    </form>
  );
};

export default FormTodo;
