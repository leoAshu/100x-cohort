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
