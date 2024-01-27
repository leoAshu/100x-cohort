import useFetchTodos from '../hooks/useFetchTodos'

const FetchTodosHookDemo = () => {
    const { todos, loading } = useFetchTodos()

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
}

function Track({ todo }) {
    return (
        <div>
            {todo.title}
            <br />
            {todo.description}
            <br />
            <br />
        </div>
    )
}

export default FetchTodosHookDemo
