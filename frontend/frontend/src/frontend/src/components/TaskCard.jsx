export default function TaskCard({ task, reload }) {
    const deleteTask = async () => {
        await fetch(`http://localhost:5000/api/tasks/${task.id}`, {
            method: "DELETE",
        });
        reload();
    };

    return (
        <div className="card">
            <h3>{task.title}</h3>
            <p>Priority: {task.priority}</p>
            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            <button onClick={deleteTask}>Delete</button>
        </div>
    );
}
