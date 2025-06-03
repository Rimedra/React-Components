import React, { useState } from 'react'

export default function Todo_Test() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    const trimmed = inputValue.trim();
    if(trimmed === "") return;

    const newTodo = {
      id: Date.now() + Math.random(),
      text: trimmed,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
      todo.id === id 
    ? {...todo, completed:!todo.completed}
  : todo)
    
    )
  } 

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    )
  }
  return (
    <>
    <div className='min-h-screen flex items-center justify-center'>
      <div className="bg-white w-full max-w-md shadow-lg rounded-lg p-6">
        <h1 className='text-2xl font-bold'> 
          The things you need to do TODAY!
        </h1>

        <form onSubmit={addTodo} className=' '>
          <input type="text"
          placeholder='Add Tasks'
          className='bg-gray-400 flex-1 px-4 py-2 border border-gray-600 rounded-md' 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}

/>
          <button type='submit'
          className='px-4 py-2 bg-blue-500 hover:bg-blue-300 rounded-md shadow-md text-white'>
            Add
          </button>
        </form>

        <ul className='space-y-3'>
        {todos.length === 0 && (
          <li className='text-center text-gray-500'>
            There is no task yet!
          </li>
        )}
        {
          todos.map((todo) => (
            <li
            key={todo.id}
className={`flex items-center justify-between bg-gray-50 px-4 py-2 border border-gray-200 rounded-lg
                ${todo.completed ? "opacity-60 line-through text-gray-500" : "text-gray-800"}
              `}>
                <span 
                className='cursor-pointer flex-1'
                onClick={() => toggleComplete(todo.id)}>
 {todo.text}
                </span>
               <div className='flex items-center gap-2'>
                <button
                onClick={() => toggleComplete(todo.id)}
                className={`p-1 rounded-full ${
                  todo.completed ? "bg-green-100 text-green-600 "
                  : "bg-yellow-100 text-yellow-600"
                }`} title = {todo.completed ? "Take it back" : "Finish!"}
                >
                  {todo.completed ? (
                   <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                  ): (<svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>)
                  }
                </button>
                <button
                onClick={() => deleteTodo(todo.id)}
                className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                  title="Sil">
 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
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
