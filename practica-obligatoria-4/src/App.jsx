import { useState } from "react";
import List from "./components/list/List";
import NewTask from "./components/newTask/NewTask";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  // arreglo inicial de tareas.
  // declaro un estado para tener un seguimiento de mi lista de tareas y poder agregar, eliminar, etc.

  const [tasks, setTasks] = useState([
    { name: "hacer compras", id: 1, status: false },
    { name: "estudiar lab 3", id: 2, status: false },
    { name: "darle de comer a la gata", id: 3, status: false },
    { name: "bañarme", id: 4, status: false },
    { name: "hacer tarea", id: 5, status: false },
  ]);

  
  return (
    <>
      <h1 style={{ paddingTop: "100px", display: "flex", justifyContent: "center"}}>Priscilita's to-do list</h1>
      <NewTask tasks={tasks} setTasks={setTasks}></NewTask>
      <List tasks={tasks} setTasks={setTasks}></List>
    </>
  );
}

export default App;
