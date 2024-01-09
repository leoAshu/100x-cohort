import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('https://sum-server.100xdevs.com/todos').then(function (response) {
            setTodos(response.data.todos)
        })
    }, [])

    return (
        <>
            {todos.map((todo) => (
                <Todo key={todo.id} title={todo.title} description={todo.description} />
            ))}
        </>
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
