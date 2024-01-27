import { useState } from 'react'
import useInterval from '../hooks/useInterval'

const IntervalDemo = () => {
    const [count, setCount] = useState(0)

    useInterval(() => {
        setCount((c) => c + 1)
    }, 1000)

    return <div>Timer is at {count}</div>
}

export default IntervalDemo
