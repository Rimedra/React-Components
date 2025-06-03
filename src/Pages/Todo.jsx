import React from 'react'
import { useState } from "react";

export default function Todo() {
   // 1) State: Todo listesini ve input değerini tutacak.
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 2) Yeni bir todo ekleme işlemi
  const addTodo = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed === "") return;

    // Her bir todo için uniq id (timestamp + random)
    const newTodo = {
      id: Date.now() + Math.random(),
      text: trimmed,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  // 3) Todo’yu silme işlemi
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 4) Tamamlandı / tamamlanmadı toggling
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md shadow-lg rounded-lg p-6">
        {/* Başlık */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          React + Tailwind Todo App
        </h1>

        {/* 1. Todo Ekleme Formu */}
        <form onSubmit={addTodo} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Yeni görev ekle..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Ekle
          </button>
        </form>

        {/* 2. Todo Listesi */}
        <ul className="space-y-3">
          {todos.length === 0 && (
            <li className="text-center text-gray-500">Henüz eklenmiş görev yok.</li>
          )}

          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between bg-gray-50 px-4 py-2 border border-gray-200 rounded-lg
                ${todo.completed ? "opacity-60 line-through text-gray-500" : "text-gray-800"}
              `}
            >
              {/* Görev Metni, tamamlandıysa çizginin altı çizili */}
              <span
                className="cursor-pointer flex-1"
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.text}
              </span>

              <div className="flex items-center gap-2">
                {/* Tamamlandı / Tamamlanmadı Butonu */}
                <button
                  onClick={() => toggleComplete(todo.id)}
                  className={`p-1 rounded-full ${
                    todo.completed
                      ? "bg-green-100 text-green-600 hover:bg-green-200"
                      : "bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                  } transition-colors`}
                  title={todo.completed ? "Geri al" : "Tamamla"}
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
                  ) : (
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
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  )}
                </button>

                {/* Silme Butonu */}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                  title="Sil"
                >
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
          ))}
        </ul>
      </div>
    </div>
  );
}
