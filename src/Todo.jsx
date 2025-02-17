import React from 'react'
import './App.css'

export default function Todo({todo, toggleTodo}) {

function handleToggleTodo() {
  toggleTodo(todo.id);
}

  return (
    <div>
        <label>
            <input 
              type='checkbox'
              checked={todo.complete}
              onChange={handleToggleTodo}
              className='checkbox'>                
            </input>
            {todo.name}
        </label>
    </div>
  )
}
