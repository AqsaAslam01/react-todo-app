import React from 'react';

export default function Todo({ todo, toggleTodo, deleteTodo, startEdit, saveEdit, editText, setEditText }) {
  return (
    <div className='todo-item'>
      {todo.isEditing ? (
        <>
          <input 
            type='text' 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)} 
            className='edit-input'
          />
          <button onClick={() => saveEdit(todo.id)} className='save-btn'>Save</button>
        </>
      ) : (
        <>
          <input 
            type='checkbox' 
            checked={todo.complete} 
            onChange={() => toggleTodo(todo.id)}
            className='checkbox'
          />
          <span className='todo-text'>{todo.name}</span>
          <div className='todo-buttons'>
            <button onClick={() => startEdit(todo.id, todo.name)} className='edit-btn'>Edit</button>
            <button onClick={() => deleteTodo(todo.id)} className='delete-btn'>Delete</button>
          </div>
        </>
      )}
    </div>
  )
}
