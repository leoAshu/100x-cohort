import { useState, memo, Fragment } from 'react'

function App() {
    const [title, setTitle] = useState('My name is Ashutosh')

    function changeTitle() {
        setTitle(`My name is ${Math.random()}`)
    }

    return (
        <div>
            <button onClick={changeTitle}>Click here to update the title</button>
            <Header title={title} />
            <br />
            <Header title="Header 2" />
            <Header title="Header 3" />
            <Header title="Header 4" />
            <Header title="Header 5" />
        </div>
    )
}

const Header = memo(function ({ title }) {
    return <div>{title}</div>
})

export default App
