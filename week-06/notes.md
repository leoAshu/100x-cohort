# Week 6

## Side Effects

-   operations done in the component that reach outside the functional scope of a React component
-   any function calls apart from responsible for rendering that component is a side effect
-   examples:
    -   `setInterval`
    -   `setTimeout`
    -   `fetch`
    -   `document.getElementById("").innerHTML = ""`
-   these are operations that can't be done during rendering

## React Hooks

-   introduced in React 16.8
-   hooks are special functions that start with `use` keyword
-   hooks allow **functional** components to actually hook onto or access stateful logic and lifecycle features
-   before hooks, only **class** based components had access to these state and lifecycle features
-   some common hooks are:
    -   `useState`
    -   `useEffect`
    -   `useCallback`
    -   `useMemo`
    -   `useRef`
    -   `useContext`

### useState

-   helps to describe the state of the app
-   whenever state updates, it triggers a re-render which finally results in a DOM update
-   `useState` is the only hook required by a React component as long as it has no side-effects

```javascript
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click Me: {count}</button>
        </div>
    )
}

export default App
```

### useEffect

-   allows to perform side-effects in functional components
-   this hook serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React class components, but unified into a single API

```javascript
import { useState, useEffect } from 'react'

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
```
