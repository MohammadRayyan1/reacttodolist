import React, { useState } from "react";
import "./AddTaskForm.css"; // Styling for this component

function AddTaskForm({ onAdd }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAdd(task);
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input
                type="text"
                placeholder="Enter a task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button id="btnadd" type="submit">Add</button>
        </form>
    );
}

export default AddTaskForm;
