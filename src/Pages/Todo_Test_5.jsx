import React from 'react'
import { useState } from 'react';

export default function Todo_Test_5() {
const [todos, setTodos] = useState([]);
const [inputValue, setInputValue] = useState("");

const addTodo = (e) => {
    e.preventDefault();

    const trimmed = inputValue.trim();
    if (trimmed === "") return;

    const newTodo = {
        id: Date.now() + Math.random(),
        text: trimmed,
        completed: false,
    }

    setTodos([newTodo, ...todos]);
    setInputValue("");
}

const deleteTodo = (id) => {
    setTodos(
            todos.filter((todo) => todo.id !== id)
        )
}
const toggleComplete = (id) => {
    setTodos(
        todos.map((todo) =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        )
    )
}
  return (
    <>
        <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
            <div className='w-full max-w-md rounded-md shadow-md px-4 py-2'>
                <h1>
                    Your Tasks Below!!!!
                </h1>
                <div className='bg-gray-200 rounded-lg shadow-lg p-3'>
                    <form onSubmit={addTodo}>
                        <input type="text" placeholder='Enter Your Task Here...' value={inputValue} onChange={() => setInputValue()} />
                        <button type='submit' className='px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-300 text-white shadow-md w-full mt-2'>
                            Add Task
                        </button>
                    </form>
                </div>
                <ul className='mt-4 space-y-2'>
                    {todos.map((todo) => (
                        <li key={todo.id} className='flex items-center justify-between bg-white px-4 py-2 rounded-md shadow-sm'>
                            <span className={`text-gray-800 ${todo.completed ? 'line-through' : ''}`}>
                                {todo.text}
                            </span>
                        </li>

                    ))}

                    <button className='px-4 py-2 bg-green-500 hover:bg-green-300 text-white rounded-md shadow-md w-full mt-2'
                    onClick={() => toggleComplete(todos.id)}>
                        Toggle Complete

                    </button>
                    <button className='px-4 py-2 bg-red-500 hover:bg-red-300 text-white rounded-md shadow-md w-full mt-2' 
                    onClick={() => deleteTodo(todos.id)}>
                        Delete Task

                    </button>
                </ul>
            </div>

        </div>
    </>
)
}
