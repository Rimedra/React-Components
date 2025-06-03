import React, { useState } from 'react'

export default function Todo_test_2() {
    const [todos, setTodos] = useState([]);
    const [inputValue,setInputValue] = useState("");

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id 
                ? {...todo, completed: !todo.completed}
                : todo
            )
        )
    }
    const deleteTodo = (id) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }

const addTodo = (e) => {
    e.preventDefault();

    const trimmed = inputValue.trim();
    if (trimmed === "") return;

    const newTodo = {
        id: Date.now() + Math.random(),
        text: trimmed,
        completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
}
  return (

    <>
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
        <div className='w-full max-w-md rounded-md shadow-md px-4 py-2'>
            <h1 className='text-xl font-bold text-black text-center px-4 py-2'>
                Todo Test 2
            </h1>
            <div className='bg-white rounded-md shadow-md p-4'>
                <form onSubmit={addTodo}>
                <input type="text" placeholder='Add Task'
                className='w-full px-4 py-2 border border-gray-300 rounded-md mb-4'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button type='submit' className='px-4 py-2 bg-blue-500 hover:bg-blue-300 text-white rounded-md shadow-md w-full'>
                    Add Task
                </button>
                </form>

               <span className='text-gray-800'>Sample Task 1</span>
                <ul className='mt-4 space-y-2'>
                    <li className='flex items-center justify-between bg-gray-200 px-4 py-2 rounded-md'>
                       {
                        todos.map((todo) => (
                            <div className='flex items-center justify-between w-full' key={todo.id}>
                                <span className={`text-gray-800 ${todo.completed ? 'line-through' : ''}`}>
                                    {todo.text}
                                </span>
                                <button className='px-2 py-1 bg-green-500 hover:bg-green-300 text-white rounded-md mr-2'>
                                    <span onClick={() => toggleComplete(todo.id)}>
                                        {todo.completed ? 'Undo' : 'Complete'} 
                                    </span>
                                </button>
                                <button className='px-2 py-1 bg-red-500 hover:bg-red-300 text-white rounded-md'
                                    onClick={() => deleteTodo(todo.id)}>
                                    Delete
                                </button>


                            </div>
                        ))
                       }
                       
                       
                        
                    </li>
                 

                </ul>
            </div>
        </div>
    </div>
    </>
)
}
