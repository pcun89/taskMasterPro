import TaskCard from "./TaskCard";

export default function TaskList({ tasks, reload }) {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} reload={reload} />
            ))}
        </div>
    );
}
