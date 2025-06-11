import React, { useState } from "react";

export default function Todo_Test_6() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    const trimmed = inputValue.trim();
    const newTodo = {
      id: Date.now() + Math.random(),
      text: trimmed,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div className="flex bg-gray-100 items-center justify-center min-h-screen">
        <div className="w-full max-w-lg px-4 py-2 shadow-md rounded-md">
          <h1 className="text-center text-2xl text-black font-bold px-4 py-2">
            Do These Right Now!
          </h1>
          <form onSubmit={addTodo}>
            <input
              type="text"
              placeholder="Write Your Task Here!!!"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-600 px-4 py-2 text-white"
            >
              Add Task
            </button>
          </form>
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex row items-center justify-center gap-1 p-2 bg-gray-300 text-black rounded-sm"
              >
                {editingId === todo.id ? (
                    <div className="flex flex-col gap-2">
                        <input type="text" className="px-4 py-2 bg-gray-100 text-black text-2xl rounded-md"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)} />
                        <button className="text-green-500 hover:text-green-700 bg-green-100 p-2"
                        onClick={() => 
                        {
                            const trimmed  = editingText.trim();
                            if(trimmed === "") return;

                            setTodos(todos.map((t) => 
                            t.id === todo.id ? {...t, text:trimmed} : t
                            ))
                            setEditingId(null);
                            setEditingText("");
                        }
                        }
                        >
                            
                            Save
                        </button>
                        <button className="text-red-500 hover:text-red-700 bg-red-100 p-2"
                        onClick={() => {
                            setEditingId(null);
                            setEditingText("");
                        }}
                        >
                            Discard
                        </button>
                </div>
                )
                :
                ( 
                   <>
                    <div className={`text-gray-800 w-6/12 bg-gray-100 rounded-md p-2 ${todo.completed ? "line-through" : ""}`}>
                    {todo.text}
                </div>
                <button className="w-2/12 bg-yellow-100 rounded-md p-2"
                onClick={() => setEditingId(todo.id)}>Edit</button>
                <button
                  className="text-red-500 hover:text-red-700 bg-red-100 w-2/12 p-2"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="text-green-500 hover:text-green-700 bg-green-100 w-2/12 p-2"
                  onClick={() => completeTodo(todo.id)}
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
