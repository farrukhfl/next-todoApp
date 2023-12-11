'use client'
import { ChangeEvent, FormEvent, useState } from "react"
import { useTodos } from "../store/todos"



const AddTodo = () => {
const [todo, setTodo] = useState("")

const {handleSubmit} = useTodos()

const handleFormSubmit = (e:FormEvent<HTMLFormElement>) =>{
e.preventDefault()
handleSubmit(todo)
setTodo("")

}

  return (
<form onSubmit={handleFormSubmit}>
<input type="text" placeholder="Write your TODO" name="" value={todo} onChange={(event) => setTodo(event.target.value)}/>
<button type="submit">
Add
</button>

</form>  

)
}

export default AddTodo