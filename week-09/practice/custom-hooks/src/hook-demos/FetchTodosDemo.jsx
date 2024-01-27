import { memo } from 'react'
import useFetchTodos from '../hooks/useFetchTodos'

const FetchTodosDemo = memo(() => {
    const { todos, loading } = useFetchTodos(5)

    if (loading) {
        return <>Loading...</>
    }

    return (
        <>
            {todos.map((todo) => (
                <Track key={todo.title} todo={todo} />
            ))}
        </>
    )
})

const Track = memo(({ todo }) => {
    return (
        <div>
            {todo.title}
            <br />
            {todo.description}
            <br />
            <br />
        </div>
    )
})

export default FetchTodosDemo
