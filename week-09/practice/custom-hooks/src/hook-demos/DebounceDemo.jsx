import { useState } from 'react'
import useDebounce from '../hooks/useDebounce'

const DebounceDemo = () => {
    const [inputValue, setInputValue] = useState('')
    const debouncedValue = useDebounce(inputValue, 1000)

    return (
        <input
            type="text"
            value={debouncedValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search..."
        />
    )
}

export default DebounceDemo
