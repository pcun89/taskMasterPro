import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css";

export default function App() {
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const res = await fetch("http://localhost:5000/api/tasks");
        const data = await res.json();
        setTasks(data);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <div className="container">
            <h1>TaskMaster Pro</h1>
            <TaskForm reload={loadTasks} />
            <TaskList tasks={tasks} reload={loadTasks} />
        </div>
    );
}
