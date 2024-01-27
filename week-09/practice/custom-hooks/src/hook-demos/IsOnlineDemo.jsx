import { memo } from 'react'
import useIsOnline from '../hooks/useIsOnline'

const IsOnlineDemo = memo(() => {
    const isOnline = useIsOnline()

    return <div>{isOnline ? 'You are online!' : 'You are offline!'}</div>
})

export default IsOnlineDemo
