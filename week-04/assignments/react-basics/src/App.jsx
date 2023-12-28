import { useState } from 'react'

let globalId = 0

function App() {
    const [formData, setFormData] = useState({
        id: 0,
        title: '',
        description: ''
    })
    const [todoList, setTodoList] = useState([])

    function onChange(e) {
        const key = e.target.name
        const newData = e.target.value
        setFormData({ ...formData, [key]: newData })
    }

    function addTodo() {
        if (formData.title && formData.description) {
            globalId++
            const newTodo = {
                ...formData,
                id: globalId
            }
            setTodoList((prevList) => [...prevList, newTodo])
        }
    }

    function markAsDone(id) {
        console.log(id)
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id === id) {
                setTodoList((prevList) => {
                    const updatedList = prevList.slice()
                    updatedList[i] = { ...updatedList[i], complete: true }

                    return updatedList
                })
            }
        }
    }

    return (
        <>
            <div>
                <div>
                    <input
                        type="text"
                        placeholder="Todo Title"
                        name="title"
                        value={formData.title}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        value={formData.description}
                        onChange={onChange}
                    />
                </div>
                <button onClick={addTodo}>Add</button>
            </div>
            <br />
            <div>
                {todoList.map((todo) => (
                    <div key={todo.id}>
                        <div>
                            <div>{todo.title}</div>
                            <div>{todo.description}</div>
                            <button onClick={() => markAsDone(todo.id)}>
                                {todo.complete ? 'Done' : 'Mark as done'}
                            </button>
                        </div>
                        <br />
                    </div>
                ))}
            </div>
        </>
    )
}

export default App
