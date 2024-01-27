import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchTodos = () => {
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('https://sum-server.100xdevs.com/todos').then((res) => {
            setTodos(res.data.todos)
            setLoading(false)
        })
    }, [])

    return { todos, loading }
}

export default useFetchTodos
