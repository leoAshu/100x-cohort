import { useEffect } from 'react'

const useInterval = (callback, delay) => {
    useEffect(() => {
        const id = setInterval(callback, delay)
        return () => clearInterval(id)
    }, [callback, delay])
}

export default useInterval
