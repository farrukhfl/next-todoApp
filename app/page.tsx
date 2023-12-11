import Navbar from "./components/Navbar"
import AddTodo from "./components/addTodo"
import Todos from "./components/todos"

function page() {
  return (
    <main>
    <h2>TODO App with TypeSript </h2>
    <Navbar />
    <AddTodo/>
    <Todos/>
    </main>
  )
}

export default page
