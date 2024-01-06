import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header title={'Header 1'} />
            <Header title={'Header 2'} />
        </>
    )
}

function Header({ title }) {
    return <div>{title}</div>
}

export default App
