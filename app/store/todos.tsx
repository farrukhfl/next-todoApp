'use client'


import { ReactNode, createContext, useContext, useState } from "react";

export type Todo = {
id: string;
task: string;
completed: boolean;
createdAt: Date;
}
export type TodosContext = {
  todos: Todo[];
  handleSubmit: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleTodoDelete: (id: string) => void;

}



export const todosContext = createContext<TodosContext | null>(null)
export const TodosProvider = ({children}:{children:ReactNode}) => {

const [todos, setTodos] = useState<Todo[]>(()=>{
  try{
  const newToDos = localStorage.getItem("todos") || "[]";
  return JSON.parse(newToDos) as Todo[]
}catch(e){
  return []
}
})

  const handleSubmit =(task: string) =>  {


          setTodos((prev)=>{
        const newToDos : Todo[] = [{
            id: Math.random().toString(),
            task,
            completed: false,
            createdAt: new Date(),
        },

        ...prev,

  ]
  localStorage.setItem("todos", JSON.stringify(newToDos))
  return newToDos
}
)
}

const toggleTodoAsCompleted = (id: string) => {
  setTodos((prev)=>{
const newTodos = prev.map((task)=>{
  if(task.id=== id){
    return {...task, completed: !task.completed}
  }
  return task
}) 
localStorage.setItem("todos", JSON.stringify(newTodos))

return newTodos
  })
}

const handleTodoDelete = (id: string) => {
  setTodos((prev)=>{
    const newTodos = prev.filter((task)=> task.id !== id)
    localStorage.setItem("todos", JSON.stringify(newTodos))

    return newTodos;
  })
}

return(
// @ts-ignore
  <todosContext.Provider value={{todos, handleSubmit, toggleTodoAsCompleted, handleTodoDelete}}>
    {children}
  </todosContext.Provider>
)

}

export function useTodos(){
  const todosContextValue = useContext(todosContext)
  if(!todosContextValue){
    throw new Error('UseTodos use outside of provider')

  }
  return todosContextValue
}