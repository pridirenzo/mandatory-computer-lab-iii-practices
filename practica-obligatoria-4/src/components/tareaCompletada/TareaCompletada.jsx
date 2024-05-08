import { Button } from "react-bootstrap";
import PropTypes from "prop-types";


const TareaCompletada = ({ tareas, setTareas }) => {

  const finishedTaskHandler = () => {

    const completada = prompt("Ingresar tarea a marcar como completada: ");

    // si mi tarea ingresa coincide con la existente, la marco como completada (cambio estado a True)
    const completadas = tareas.map((tarea) =>{
        if(tarea.name == completada){
            console.log("TAREA ", "**",tarea.name,"**" + " COMPLETADA!"); // demostracion adicional en la consola
            console.log(tarea);
           return {...tarea, estado: true}; // devuelvo un nuevo objeto con todas las propiedades de mi Tarea original, reemplazando el valor de estado por True
        }
        
        return tarea;
    })

        // actualizo mi lista de tareas
      setTareas(completadas);
   
}

  return (
    <>
      <Button onClick={finishedTaskHandler}>Marcar tarea como completada</Button>
    </>
  )

};

export default TareaCompletada;

TareaCompletada.propTypes = {
  tareas: PropTypes.array,
  setTareas: PropTypes.func,
}


