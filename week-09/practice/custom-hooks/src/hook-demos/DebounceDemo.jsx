import { useState } from 'react'
import useDebounce from '../hooks/useDebounce'

const DebounceDemo = () => {
    const [inputValue, setInputValue] = useState('')
    const debouncedValue = useDebounce(inputValue, 1000)

    return (
        <>
            Debounced value is {debouncedValue}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search..."
            />
        </>
    )
}

export default DebounceDemo
