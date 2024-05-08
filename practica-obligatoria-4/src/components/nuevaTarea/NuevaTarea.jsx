import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

// componente que permite agregar una nueva tarea a la lista definida en App

// paso por props los parametros del estado de las tareas para trabajar el agregado aca
const NuevaTarea = ({ tareas, setTareas }) => {


  const newTaskHandler = (newTask) => {

  
    let task = prompt("Ingrese nueva tarea a agregar: "); // input del usuario

    // mi objeto nuevaTarea, que se agregará al array inicial de objetos TAREAS
    newTask = {
      name: task,
      id: tareas[tareas.length-1].id + 1, // el id de mi nueva tarea será el id de mi ultima tarea + 1
      estado: false
    };


    if(newTask.name === "" ||newTask.name === null){
        
        alert("Por favor, ingrese un texto!"); // validacion adicional para asegurarme de q la persona ingrese un TEXTO al agregar la tarea
    }
    else{
        setTareas([...tareas, newTask]);
    }
  }

return(
    <>
    <Button onClick={newTaskHandler} variant="success" style={{"margin": "20px"}}>Agregar nueva tarea</Button>
    </>
)
};

export default NuevaTarea;

NuevaTarea.propTypes ={
    tareas: PropTypes.array,
    setTareas: PropTypes.func,
}