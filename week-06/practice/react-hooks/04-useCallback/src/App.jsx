import { memo, useCallback, useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    // function onClick() {
    //     console.log('child clicked')
    // }
    const onClick = useCallback(() => {
        console.log('child clicked')
    }, [])

    return (
        <div>
            <Child onClick={onClick} />
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
const Child = memo(({ onClick }) => {
    console.log('child render')

    return (
        <div>
            <button onClick={onClick}>Child: Button clicked</button>
        </div>
    )
})

export default App
