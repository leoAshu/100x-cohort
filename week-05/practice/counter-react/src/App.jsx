import React, { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Button count={count} setCount={setCount}></Button>
        </div>
    )
}

function Button(props) {
    function onButtonClick() {
        props.setCount(props.count + 1)
    }

    // return React.createElement('button', { onClick: onButtonClick }, `Counter ${props.count}`)

    // syntactic sugar for code above
    return <button onClick={onButtonClick}>Counter {props.count}</button>
}

export default App
