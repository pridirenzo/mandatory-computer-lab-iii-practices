import { useState } from "react";
import Lista from "./components/lista/Lista";
import NuevaTarea from "./components/nuevaTarea/NuevaTarea";
import "bootstrap/dist/css/bootstrap.min.css";
import TareaEliminada from "./components/tareaEliminada/TareaEliminada";
import TareaCompletada from "./components/tareaCompletada/TareaCompletada";
// import mappedTasks from "./components/lista/Lista";

function App() {

  // arreglo inicial de tareas.
  // declaro un estado para tener un seguimiento de mi lista de tareas y poder agregar, eliminar, etc.

  const [tareas, setTareas] = useState([
    { name: "hacer compras", id: 1, estado: false },
    { name: "estudiar lab 3", id: 2, estado: false },
    { name: "darle de comer a la gata", id: 3, estado: false },
    { name: "bañarme", id: 4, estado: false },
    { name: "hacer tarea", id: 5, estado: false },
  ]);

   
  
  return (
    <>
      <h1 style={{ padding: "10px" }}>Priscilita's to-do list</h1>
      <Lista tareas={tareas}></Lista>
      <NuevaTarea tareas={tareas} setTareas={setTareas}></NuevaTarea>
      <TareaEliminada tareas={tareas} setTareas={setTareas}></TareaEliminada>
      <TareaCompletada tareas={tareas} setTareas={setTareas}></TareaCompletada>
    </>
  );
}

export default App;
