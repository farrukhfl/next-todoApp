'use client'
import React from 'react'
import { Todo, useTodos } from '../store/todos'
import { useSearchParams } from 'next/navigation'

const Todos = () => {
const {todos, toggleTodoAsCompleted,handleTodoDelete } = useTodos()
const searchParams = useSearchParams()
const todosFilter = searchParams.get('todos')

let filterTodos = todos;

if(todosFilter === "active"){
  filterTodos = todos.filter((todo)=> !todo.completed)
}else if (todosFilter === "completed"){
  filterTodos = todos.filter((todo)=> todo.completed)

}


return(
  <ul className="main-task">
{
  filterTodos.map((todo)=>{
    return <li key={todo.id}>

      
        <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=> toggleTodoAsCompleted(todo.id)} />

<label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

{
  todo.completed && (
    <button type='button' onClick={()=> handleTodoDelete(todo.id)}>Delete </button>
  )
}
      }
    </li>
  })
}

  </ul>

)


}

export default Todos