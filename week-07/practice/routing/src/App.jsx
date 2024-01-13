import { Suspense, lazy } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Landing = lazy(() => import('./pages/Landing'))

function App() {
    return (
        <>
            <BrowserRouter>
                <Appbar />
                <Routes>
                    <Route
                        path="/dashboard"
                        element={
                            <Suspense fallback={'Loading...'}>
                                <Dashboard />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={'Loading...'}>
                                <Landing />
                            </Suspense>
                        }
                    />
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
