import React, { useState } from 'react'

export default function Todo_Test_3() {
  const [todos, setTodos] =useState([]);
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

  return (
    <>
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='w-full max-w-md bg-orange-400 items-center justify-center rounded-md shadow-lg p-6'>
                <h1 className='text-2xl font-bold text-white text-center mb-4'>
                    Tasks Today!
                </h1>
                <form onSubmit={addTodo} className='space-y-4'
                >
                    <input type="text" 
                    placeholder='Add Tasks...'
                    className='w-full bg-gray-200 px-4 py-2 shadow-md rounded-md'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />

                    <button type='submit' className='w-full bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded shadow-md mt-4'>
                        Add Task
                    </button>

                </form>
                <ul className='mt-4 space-y-2'>
                    {
                        todos.map((todo) => (
                            <li
  key={todo.id}
  className="flex items-center justify-between bg-white px-4 py-2 rounded-md shadow-sm"
>
  <span className="text-gray-800">{todo.text}</span>

  <div className="flex space-x-2">
    {/* SILME BUTONU (inline) */}
    <button
      className="text-red-500 hover:text-red-700"
      onClick={() =>
        setTodos(prev => prev.filter(t => t.id !== todo.id))
      }
    >
      Delete
    </button>

    {/* TAMAMLAMA BUTONU (inline örnek) */}
    <button
      className="text-green-500 hover:text-green-700"
      onClick={() =>
        setTodos(prev =>
          prev.map(t =>
            t.id === todo.id ? { ...t, completed: !t.completed } : t
          )
        )
      }
    >
      {todo.completed ? "Undo" : "Complete"}
    </button>
  </div>
</li>

                        ))
                    }
                
                </ul>
            </div>

        </div>
    </>
  )
}
