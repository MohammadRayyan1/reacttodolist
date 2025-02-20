import React from "react";
import "./ToDoItem.css"; // Styling for this component

function ToDoItem({ task, onDelete, onComplete }) {
    return (
        <div className={`todo-item ${task.completed ? "completed" : ""}`}>
            <span>{task.text}</span>
            <div>
                <button className="complete-btn" onClick={() => onComplete(task.id)}>
                    ✅
                </button>
                <button className="delete-btn" onClick={() => onDelete(task.id)}>
                    ❌
                </button>
            </div>
        </div>
    );
}

export default ToDoItem;
