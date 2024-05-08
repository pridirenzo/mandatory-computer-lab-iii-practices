import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";


// componente Lista. utilicé el componente predeterminado de React Bootstrap (ListGroup) para practicar la integracion de los mismos y facilitar la customizacion, pero tambien pude haberlo hecho solo con las etiquetas clasicas de HTML.

const Lista = ({ tareas }) => {


  return (
    <>
      <ListGroup style={{ "padding": "5px", "display": "flex", "flexDirection": "column"}} as="ol" numbered></ListGroup>
      
        <>
        { tareas.map((tarea, id) =>(
          
         <ListGroup.Item key={id} style={{"padding": "10px", "border": "2px solid black"}} as="li">
          
          <b>Tarea:</b> {tarea.name}
          <br></br>
          <b>ID:</b> {tarea.id} 
          <br></br>
          <b>Estado:</b> {tarea.estado ? <span style={{ textDecoration: "line-through", backgroundColor: "yellow" }}>Completada!</span> : "No completada!"}

         
         </ListGroup.Item>

        ))
        }
       <ListGroup/>
        </>
    </>
    )
};

Lista.propTypes = {
  tareas: PropTypes.array,
}

export default Lista;
