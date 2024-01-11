import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodo() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        function fetchTodos() {
            axios.get('https://sum-server.100xdevs.com/todos').then((res) => {
                setTodos(res.data.todos)
            })
        }

        fetchTodos()
        setInterval(fetchTodos, 5000)
    }, [])

    return todos
}

function App() {
    const todos = useTodo()

    return (
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} title={todo.title} description={todo.description} />
            ))}
        </div>
    )
}

function Todo({ title, description }) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default App
