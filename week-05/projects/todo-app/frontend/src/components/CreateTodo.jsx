import { useState } from 'react'

const CreateTodo = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <div>
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                    const value = e.target.value
                    setTitle(value)
                }}
            />
            <br />

            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => {
                    const value = e.target.value
                    setDescription(value)
                }}
            />
            <br />

            <button
                style={{ padding: 10, margin: 10 }}
                onClick={() => {
                    fetch('http://localhost:3000/todo', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ title, description })
                    }).then(async (res) => {
                        const json = await res.json()
                        alert('Todo added')
                        props.setTodos((prev) => [...prev, { title, description }])
                    })
                }}
            >
                Add a todo
            </button>
        </div>
    )
}

export default CreateTodo
