import React, { useState } from 'react'

export default function Todo_Test_7() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const addTodo = (e) => {
    e.preventDefault();

    const trimmed = inputValue.trim();
    if(trimmed === "") return;

    const  newTodo = {
        id: Date.now + Math.random(),
        text: trimmed,
        completed: false,
    }
    setTodos([newTodo, ...todos])
    setInputValue('');
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id ))
  }

  const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id 
                ? {...todo, completed: !todo.completed}
                : todo
            )
        )
    }
  return (
    <>
        <div className='bg-white min-h-screen items-center justify-center'>
            <div className='flex flex-col gap-1 max-w-md w-full px-4 py-2 rounded-md shadow-md bg-gray-100' >
                <h1 className='text-black text-2xl px-4 py-2'>
                    Lorem, ipsum.
                </h1>
                <form onSubmit={addTodo} className='flex-row gap-1 flex w-full px-2'>
                    <input type="text" 
                    placeholder='Add Task...'
                    className='px-4 py-2 bg-gray-300 rounded-md shadow-md flex-1'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} 
                     />
                    <button className='px-4 py-2 bg-blue-400 hover:bg-blue-700 text-white rounded-md' >
                        Add
                    </button>
                </form>
                <ul className='p-2 space-y-2'>
                    {
                        todos.map((todo) => (
                            <li className='flex flex-col px-4 py-2 rounded-md shadow-md bg-gray-300' key={todo.id}>
                                {editingId === todo.id ? 
                                (
                                    <div className="flex flex-col gap-2">
                                          <input
                                            className="w-full bg-white border border-gray-300 px-3 py-2 rounded-md"
                                            value={editingText}
                                            onChange={(e) => setEditingText(e.target.value)}
                                            autoFocus
                                          />
                                          <div className="flex gap-2">
                                            <button
                                              className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-md"
                                              onClick={() => {
                                                const trimmed = editingText.trim();
                                                if (!trimmed) return;
                                                setTodos(
                                                  todos.map((t) =>
                                                    t.id === todo.id ? { ...t, text: trimmed } : t
                                                  )
                                                );
                                                setEditingId(null);
                                                setEditingText('');
                                              }}
                                            >
                                              Save
                                            </button>
                                            <button
                                              className="flex-1 px-4 py-2 bg-gray-400 hover:bg-gray-300 text-white rounded-md"
                                              onClick={() => {
                                                setEditingId(null);
                                                setEditingText('');
                                              }}
                                            >
                                              Cancel
                                            </button>
                                          </div>
                                        </div>
                                    )
                                    : 
                                    (
                                        <div className=''>
                                            <span className='flex-1 text-black bg-gray-100 px-4 py-2 rounded-md shadow-md'>
                                                {todo.text}
                                             </span>

                                            <button className='text-white bg-red-500 hover:bg-red-800 px-4 py-2 rounded-md shadow-md'
                                             onClick={() => deleteTodo(todo.id)}>
                                                 Delete
                                            </button>
                                            <button className={`px-2 py-1 ${todo.completed ? "bg-yellow-500 hover:bg-yellow-300" : "bg-green-500 hover:bg-green-300"}  text-white rounded-md mr-2`}>
                                            <span onClick={() => toggleComplete(todo.id)}>
                                                {todo.completed ? 'Undo' : 'Complete'} 
                                            </span>
                                             </button>
                                             <button className='text-white bg-orange-500 hover:bg-orange-800 px-4 py-2 rounded-md shadow-md'
                                             onClick={() => setEditingId(todo.id)}>

                                             </button>
                                        </div>
                                    )
                                
                                }
                                
                            </li>
                           
                        ))
                    }
                </ul>
            </div>
        </div>
    </>
  )
}
