import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchTodos = (seconds) => {
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState([])

    const fetchData = () => {
        axios.get('https://sum-server.100xdevs.com/todos').then((res) => {
            setTodos(res.data.todos)
            setLoading(false)
        })
    }

    useEffect(() => {
        setInterval(() => {
            setLoading(true)
            fetchData()
        }, seconds * 1000)
        fetchData()
    }, [])

    return { todos, loading }
}

export default useFetchTodos
