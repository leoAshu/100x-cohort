import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil'
import { todosAtom, todosAtomFamily } from './atoms'
import { useEffect } from 'react'
import { useMemo } from 'react'

function App() {
    return (
        <RecoilRoot>
            <TodoAtom id={1} />
            <TodoAtom id={2} />

            <TodoAtomFamily id={1} />
            <TodoAtomFamily id={2} />
        </RecoilRoot>
    )
}

// uses single atom for all todos
// causes re-render for all components when only one Todo changes
function TodoAtom({ id }) {
    const [todos, setTodos] = useRecoilState(todosAtom)
    console.log('TodoAtom renders id:', id)

    const todo = useMemo(() => {
        return todos.find((t) => t.id == id)
    }, [id, todos])

    useEffect(() => {
        setTimeout(() => {
            if (id === 2) {
                console.log('TodoAtom updates id:', id)
                let newTodos = [...todos]
                const idx = todos.findIndex((t) => t.id == id)
                newTodos[idx] = { ...todo, title: 'Eat food' }
                setTodos(newTodos)
            }
        }, 2000)
    }, [])

    return (
        <>
            {todo.title}
            <br />
            {todo.description}
            <br />
            <br />
        </>
    )
}

// uses atomFamily for all todos
// re-renders only the component whose todo is changed
function TodoAtomFamily({ id }) {
    const [todo, setTodo] = useRecoilState(todosAtomFamily(id))
    console.log('TodoAtomFamily renders id:', id)

    useEffect(() => {
        setTimeout(() => {
            if (id === 2) {
                console.log('TodoAtomFamily updates id:', id)
                setTodo({ ...todo, title: 'Go eat food' })
            }
        }, 2000)
    }, [])

    return (
        <>
            {todo.title}
            <br />
            {todo.description}
            <br />
            <br />
        </>
    )
}

export default App
