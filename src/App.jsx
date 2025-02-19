import { useState, useRef, useEffect } from 'react'
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [editText, setEditText] = useState('');
  const TodoRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = TodoRef.current.value;
    if(name === '') return;
    setTodos(preTodos => {
      return [...preTodos, {id: uuidv4(), name: name, complete: false, isEditing: false}]
    })

    TodoRef.current.value = null;
  }

  function handleClearsTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }
  
  function deleteTodo(id) {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos);
  }

  function startEdit(id, currentName) {
    setEditText(currentName);
    const updatedTodos = todos.map(todo => todo.id === id ? {...todo, isEditing: true} : todo)
    setTodos(updatedTodos)
  }

  function saveEdit(id) {
    const updatedTodos = todos.map(todo => todo.id === id ? {...todo, name: editText, isEditing: false} : todo)
    setTodos(updatedTodos)
    setEditText('');
  }

  return (
    <>
    <div className='container'>
      <h1>TODO LIST</h1>
      <input ref={TodoRef} type='text' className='input'></input>
      <button onClick={handleAddTodo} className='add-btn'>Add Task</button>
      <button onClick={handleClearsTodos} className='remove-btn'>Clear Complete</button>
      <div className='todo-count'>{todos.filter(todo => !todo.complete).length} left todos</div>
      <div className='todo-list'>
      <TodoList 
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        startEdit={startEdit}
        saveEdit={saveEdit}
        editText={editText}
        setEditText={setEditText}
        />
      </div>
      </div>
    </>
  )
}

export default App
