import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const DeletedTask = ({ tasks, setTasks, deletedTaskId }) => {

    // controla el evento de eliminar una tarea.
    const deleteTaskHandler = () => {
        const deletedTasks = tasks.filter((task) => task.id !== deletedTaskId);
        setTasks(deletedTasks);
    };

    return (
        <Button onClick={deleteTaskHandler} className="m-3" variant="danger">
            Eliminar tarea
        </Button>
    );
};

DeletedTask.propTypes = {
    tasks: PropTypes.array,
    setTasks: PropTypes.func,
    deletedTaskId: PropTypes.number
};

export default DeletedTask;
