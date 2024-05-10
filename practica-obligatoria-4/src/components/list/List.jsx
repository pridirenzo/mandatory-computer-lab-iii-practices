import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import DeletedTask from "../deletedTask/DeletedTask";
import FinishedTask from "../finishedTask/FinishedTask";


// componente Lista. utilicé el componente predeterminado de React Bootstrap (ListGroup) para practicar la integracion de los mismos y facilitar la customizacion, pero tambien pude haberlo hecho solo con las etiquetas clasicas de HTML.

const List = ( {tasks, setTasks}) => {


  return (
    <>
      <ListGroup style={{ "padding": "5px", "display": "flex", "flexDirection": "column"}} as="ol" numbered></ListGroup>
      
        <>
        { tasks.map((task, id) =>(
          
         <ListGroup.Item key={id} style={{"padding": "10px", "border": "2px solid black"}} as="li">
          
          <b>Tarea:</b> {task.name}
          <br></br>
          <b>ID:</b> {task.id} 
          <br></br>
          <b>Estado:</b> {task.status ? <span style={{ textDecoration: "line-through", backgroundColor: "yellow" }}>Completada!</span> : "No completada!"}
          <br/>
          <DeletedTask deletedTaskId={task.id} tasks={tasks} setTasks={setTasks}></DeletedTask>
          <FinishedTask finishedTaskId={task.id} tasks={tasks} setTasks={setTasks}></FinishedTask>
         </ListGroup.Item>

        ))
        }
       <ListGroup/>
        </>
    </>
    )
};

List.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func
}

export default List;
