import { useContext, useState } from 'react'
import CountContext from './CountContext'

function App() {
    const [count, setCount] = useState(0)

    return (
        <CountContext.Provider value={count}>
            <Count setCount={setCount} />
        </CountContext.Provider>
    )
}

function Count({ setCount }) {
    return (
        <>
            <CountRenderer />
            <Buttons setCount={setCount} />
        </>
    )
}

function CountRenderer() {
    const count = useContext(CountContext)
    return <div>{count}</div>
}

function Buttons({ setCount }) {
    const count = useContext(CountContext)
    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                Increment
            </button>

            <button
                onClick={() => {
                    setCount(count - 1)
                }}
            >
                Decrement
            </button>
        </div>
    )
}

export default App
