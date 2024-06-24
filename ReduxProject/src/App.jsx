import { useState } from 'react'
import './App.css'
import AddTodo from './component/AddTodo'
import Todo from './component/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-gray-100 font-bold text-4xl font-sans'>To-Do Project using Redux-Toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
