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
