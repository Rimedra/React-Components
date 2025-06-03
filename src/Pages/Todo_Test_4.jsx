import React, { useState } from 'react';

export default function Todo_Test_4() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);     // NEW
  const [editingText, setEditingText] = useState('');    // NEW

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-4 py-2 rounded-md shadow-md">
        <h1 className="text-xl bg-gray-300 text-black font-bold text-center px-4 py-2 rounded-md">
          React use test
        </h1>

        {/* Ekleme formu */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const trimmed = inputValue.trim();
            if (!trimmed) return;
            setTodos([{ id: Date.now() + Math.random(), text: trimmed, completed: false }, ...todos]);
            setInputValue('');
          }}
        >
          <input
            type="text"
            placeholder="Write Here!"
            className="w-full bg-gray-200 px-4 py-2 shadow-md rounded-md my-2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-300 text-white rounded-md shadow-md"
          >
            Add
          </button>
        </form>

        {/* Todo listesi */}
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="w-full bg-gray-100 px-4 py-2 rounded-md shadow-md my-2 flex flex-col"
            >
              {/* DÜZENLEME MODU  */}
              {editingId === todo.id ? (
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
              ) : (
                /* NORMAL GÖRÜNÜM */
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`flex-1 break-words text-gray-800 ${
                      todo.completed ? 'line-through' : ''
                    }`}
                  >
                    {todo.text}
                  </span>

                  {/* Aksiyon butonları */}
                  <div className="flex-shrink-0 space-x-2">
                    <button
                      className="px-3 py-1 bg-red-500 hover:bg-red-400 text-white rounded-md"
                      onClick={() =>
                        setTodos(todos.filter((t) => t.id !== todo.id))
                      }
                    >
                      Delete
                    </button>
                    <button
                      className="px-3 py-1 bg-green-500 hover:bg-green-400 text-white rounded-md"
                      onClick={() =>
                        setTodos(
                          todos.map((t) =>
                            t.id === todo.id
                              ? { ...t, completed: !t.completed }
                              : t
                          )
                        )
                      }
                    >
                      {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button
                      className="px-3 py-1 bg-yellow-500 hover:bg-yellow-400 text-white rounded-md"
                      onClick={() => {
                        setEditingId(todo.id);
                        setEditingText(todo.text);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
