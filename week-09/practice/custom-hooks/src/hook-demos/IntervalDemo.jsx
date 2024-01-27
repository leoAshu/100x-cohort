import { useState } from 'react'
import useInterval from '../hooks/useInterval'

const IntervalDemo = () => {
    const [count, setCount] = useState(0)

    useInterval(() => {
        setCount((c) => c + 1)
    }, 1000)

    return <>Timer is at {count}</>
}

export default IntervalDemo
