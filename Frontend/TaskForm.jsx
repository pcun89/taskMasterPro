import { useState } from "react";

export default function TaskForm({ reload }) {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState(1);
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("http://localhost:5000/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, priority, dueDate }),
        });

        reload();
        setTitle("");
        setDueDate("");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                placeholder="Task title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value={1}>High</option>
                <option value={2}>Medium</option>
                <option value={3}>Low</option>
            </select>
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
            />
            <button>Add Task</button>
        </form>
    );
}
