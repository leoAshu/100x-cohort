import useMousePointer from '../hooks/useMousePointer'

const MousePointerDemo = () => {
    const position = useMousePointer()

    return <div>{`Your mouse position is \nx: ${position.x} \ny: ${position.y}`}</div>
}

export default MousePointerDemo
