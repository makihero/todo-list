// src/App.js
import { useState } from "react";
import Checkbox from "./components/CheckBox";
import Container from "./components/Container";
import FormTodo from "./components/FormTodo";
import TaskList from "./components/TaskList";

function App() {
  // Define el estado local para la casilla de verificación y la lista de tareas
  const [isChecked, setIsChecked] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Maneja el cambio en la casilla de verificación
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // Agrega una nueva tarea a la lista de tareas
  const addTask = (taskName) => {
    const newTask = { name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Cambia el estado de completado de una tarea en la lista
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Elimina una tarea de la lista
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <FormTodo onAddTask={addTask} /> {/* Renderiza un formulario para agregar tareas */}
      <h4>To do</h4>
      <TaskList
        tasks={tasks} // Pasa la lista de tareas al componente TaskList
        onToggleTask={toggleTask} // Pasa la función para cambiar el estado de completado de una tarea
        onDeleteTask={deleteTask} // Pasa la función para eliminar una tarea
      />
    </Container>
  );
}

export default App;
