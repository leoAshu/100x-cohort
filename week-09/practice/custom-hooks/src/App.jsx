import DebounceDemo from './hook-demos/DebounceDemo'
import FetchTodosDemo from './hook-demos/FetchTodosDemo'
import IntervalDemo from './hook-demos/IntervalDemo'
import IsOnlineDemo from './hook-demos/IsOnlineDemo'
import MousePointerDemo from './hook-demos/MousePointerDemo'

function App() {
    return (
        <>
            <FetchTodosDemo />
            <br />
            <IsOnlineDemo />
            <br />
            <MousePointerDemo />
            <br />
            <IntervalDemo />
            <br />
            <DebounceDemo />
        </>
    )
}

export default App
