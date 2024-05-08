import PropTypes from "prop-types";
import { Button } from "react-bootstrap";


// paso por props los parametros del estado de las tareas para trabajar la eliminacion aca
const TareaEliminada = ({tareas, setTareas}) => {

    const deletedTaskHandler = (deletedTask) =>{

        deletedTask = prompt("Ingrese tarea a eliminar: ");
        

        if(deletedTask === "" || deletedTask === null){ // si el usuario no ingresa nada salta el alert
            alert("Por favor, ingrese un texto");
        }
        else{
            // hago un trabajito de filtrado, sacando la tarea eliminada.
            let filteredTasks = tareas.filter((tarea)=> tarea.name !== deletedTask);
            setTareas(filteredTasks); // actualizo el estado de mis tareas, seteando el arreglo con todas menos la eliminada
      }
 
}  

return(
    <>
         <Button onClick={deletedTaskHandler} variant="danger" style={{"margin": "20px"}}>Eliminar tarea</Button>
    </>
   ) 

}

export default TareaEliminada;

TareaEliminada.propTypes = { 
    tareas: PropTypes.array,
    setTareas: PropTypes.func
}