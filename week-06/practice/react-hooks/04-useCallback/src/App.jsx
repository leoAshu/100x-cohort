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

const Child = memo(({ onClick }) => {
    console.log('child render')

    return (
        <div>
            <button onClick={onClick}>Child: Button clicked</button>
        </div>
    )
})

export default App
