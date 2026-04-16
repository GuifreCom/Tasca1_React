import { useState } from "react";
import TaskItem from "./TaskItem";

function Tasques() {
    const [tasks, setTasks] = useState([
    { taskName: "Estudiar React", completed: false },
    { taskName: "Jugar al LoL", completed: true }
]);
    const canviTasca = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };
    return (
        <div>
            <h1>Llista de Tasques</h1>
            {tasks.map((task, index) => (
            <TaskItem
                key={index}
                taskName={task.taskName}
                completed={task.completed}
                canviTasca={() => canviTasca(index)}

            />
        ))}
        </div>
    );
}

export default Tasques

