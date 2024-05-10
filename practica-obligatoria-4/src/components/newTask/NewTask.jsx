import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

// componente que permite agregar una nueva tarea a la lista definida en App.

const NewTask = ({ tasks, setTasks, setTaskName, taskName }) => {

[taskName, setTaskName] = useState("");

  // controla el input de la tarea.
  const taskNameHandler = (event) =>{
    setTaskName(event.target.value);
  };

  // controla el evento de agregar una nueva tarea.
  const addTaskHandler = () => {
    event.preventDefault();
    if(taskName != ""){
      setTasks([...tasks, {name: taskName, id: tasks[tasks.length-1].id + 1, status: false}]);
      console.log("Tarea agregada: ", taskName);
    }
    else{
      alert("Por favor, ingrese un texto.");
    }
    

   };
   
  return (
    <>
      <Form className="m-5">
        <Form.Group>
          <Form.Label>¿Qué tarea deseas agregar?</Form.Label>
          <Form.Control 
            type="string"
            placeholder="Ingresá tu tarea"
            value={taskName}
            onChange={taskNameHandler}
          />
        </Form.Group>
        <Button onClick={addTaskHandler} variant="success" type="submit" className="mt-5">
          Agregar nueva tarea
        </Button>
      </Form>
    </>
  );
};

export default NewTask;

NewTask.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  setTaskName: PropTypes.func,
  taskName: PropTypes.string
};
