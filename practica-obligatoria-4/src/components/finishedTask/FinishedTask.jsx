import { Button } from "react-bootstrap";
import PropTypes from "prop-types";


const FinishedTask = ({ tasks, setTasks, finishedTaskId }) => {

  const finishedTaskHandler = () => {

    const finishedTasks = tasks.map((task) => task.id == finishedTaskId ?{...task, status: true} : task);
    setTasks(finishedTasks);
    }

  

  return (
    <>
      <Button onClick={finishedTaskHandler}>Marcar tarea como completada</Button>
    </>
  )

};

export default FinishedTask;

FinishedTask.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  finishedTaskId: PropTypes.number
}


