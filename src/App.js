import React, { useState, useEffect } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import ToDoItem from "./components/ToDoItem";

function App() {
    const [tasks, setTasks] = useState(() => {
        // Ensure tasks are always initialized from localStorage correctly
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    // Update localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Add a new task
    const addTask = (text) => {
        const newTasks = [...tasks, { id: Date.now(), text, completed: false }];
        setTasks(newTasks);
    };

    // Delete a task
    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    // Mark task as completed
    const completeTask = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <AddTaskForm onAdd={addTask} />
            <div className="task-list">
                {tasks.map((task) => (
                    <ToDoItem
                        key={task.id}
                        task={task}
                        onDelete={deleteTask}
                        onComplete={completeTask}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
