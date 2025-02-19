import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo, deleteTodo, startEdit, saveEdit, editText, setEditText}) {
  return (
    todos.map((todo) => {
      return <Todo 
                key={todo.id} 
                toggleTodo={toggleTodo}
                todo = {todo}
                deleteTodo={deleteTodo}
                startEdit={startEdit}
                saveEdit={saveEdit}
                editText={editText}
                setEditText={setEditText}
              />
    })
  )
}
