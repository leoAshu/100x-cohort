const Todos = ({ todos }) => {
    return (
        <>
            {todos.map((todo) => (
                <div key={todo.title}>
                    <h3 style={{ padding: 10, margin: 10 }}>{todo.title}</h3>
                    <h4 style={{ padding: 10, margin: 10 }}>{todo.description}</h4>
                    <button style={{ padding: 10, margin: 10 }}>
                        {todo.completed == true ? 'Done' : 'Mark as Done'}
                    </button>
                </div>
            ))}
        </>
    )
}

export default Todos
