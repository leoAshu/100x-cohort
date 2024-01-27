import { useEffect, useState } from 'react'

const useIsOnline = () => {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine)

    const onLineHandler = () => {
        console.log('online')
        setIsOnline(true)
    }

    const offLineHandler = () => {
        console.log('offline')
        setIsOnline(false)
    }

    useEffect(() => {
        window.addEventListener('online', onLineHandler)
        window.addEventListener('offline', offLineHandler)

        return () => {
            window.removeEventListener('online', onLineHandler)
            window.removeEventListener('offline', offLineHandler)
        }
    }, [])

    return isOnline
}

export default useIsOnline
