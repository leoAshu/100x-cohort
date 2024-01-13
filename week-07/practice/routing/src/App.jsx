import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'

function App() {
    return (
        <>
            <BrowserRouter>
                <Appbar />
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

function Appbar() {
    const navigate = useNavigate()
    return (
        <div>
            <button
                onClick={() => {
                    // window.location.href = '/'
                    navigate('/')
                }}
            >
                Landing Page
            </button>
            <button
                onClick={() => {
                    // window.location.href = '/dashboard'
                    navigate('/dashboard')
                }}
            >
                Dashboard Page
            </button>
        </div>
    )
}

export default App
