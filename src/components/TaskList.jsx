// src/components/TaskList.js
import React from "react";

// Definición del componente TaskList
const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  // Renderiza una lista no ordenada (ul) de tareas
  return (
    <ul>
      {tasks.map((tasks, index) => ( // Itera sobre las tareas y muestra cada una
        <li key={index}> {/*Cada tarea tiene un índice único como clave*/}
          <input
            className="check"
            type="checkbox"
            checked={tasks.completed} // Marca la casilla si la tarea está completada
            onChange={() => onToggleTask(index)} // Maneja el cambio en la casilla de verificación
          />
          <span
            style={{
              textDecoration: tasks.completed ? "line-through" : "none", // Aplica un estilo de tachado si la tarea está completada
            }}
          >
            {tasks.name} {/* Muestra el nombre de la tarea */}
          </span>
          <button onClick={() => onDeleteTask(index)}>Borrar</button> {/* Botón para eliminar la tarea */}
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
