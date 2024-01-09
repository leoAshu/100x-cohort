import { useState, useEffect } from 'react'

function App() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://sum-server.100xdevs.com/todos')
            const data = await response.json()
            console.log(data)
            setTodos(data.todos)
        }

        getData()

        setInterval(() => {
            getData()
        }, 10000)
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
        <div style={{ padding: 4 }}>
            <h4>{title}</h4>
            <h5>{description}</h5>
        </div>
    )
}

export default App
