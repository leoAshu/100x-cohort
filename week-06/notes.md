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

### useMemo

-   based on **memoization**, remembering some output given an input and not computing it again, similar to **caching**
-   allows to remember a value across re-renders
-   avoids the need to declare a variable as a state variable if it is entirely dependent on another state variable

```javascript
import { useMemo, useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState(1)

    let sum = useMemo(() => {
        let finalSum = 0
        for (let i = 0; i <= inputValue; i++) {
            finalSum += i
        }
        return finalSum
    }, [inputValue])

    return (
        <>
            <input type="number" placeholder="Find sum from 1 to n" onChange={(e) => setInputValue(e.target.value)} />
            <br />
            Sum of 1 to {inputValue} is {sum}
            <br />
            <br />
            <button onClick={() => setCount(count + 1)}>Counter ({count})</button>
        </>
    )
}

export default App
```

### useCallback

-   similar to `useMemo`
-   instead of values, used to memoize functions with an objective to optimize the performance of the application
-   especially in cases involving child components that rely on **reference equality** to prevent unnecessary renders

```javascript
import { memo, useCallback, useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    // function childFunction() {
    //     console.log('child clicked')
    // }
    const childFunction = useCallback(() => {
        console.log('child clicked')
    }, [])

    return (
        <div>
            <Child onClick={childFunction} />
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                Parent: Click me {count}
            </button>
        </div>
    )
}

// memo is used here to skip re-rendering this component if its props are unchanged
// is needed in conjunction with useCallback hook to make the example work
const Child = memo(({ childFunction }) => {
    console.log('child render')

    return (
        <div>
            <button onClick={childFunction}>Child: Button clicked</button>
        </div>
    )
})

export default App
```

### Custom Hooks

-   create a user-defined hook by combining the pre-defined hooks
-   starts with a `use` keyword
-   cannot use a pre-defined hook within any function, should be a functional component(starts with capital letter), or should be a custom hook (starts with `use` keyword)

```javascript
import { useEffect, useState } from 'react'
import axios from 'axios'

// custom hook
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
```
