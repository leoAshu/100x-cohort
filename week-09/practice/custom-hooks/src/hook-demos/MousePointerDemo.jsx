import useMousePointer from '../hooks/useMousePointer'

const MousePointerDemo = () => {
    const position = useMousePointer()

    return <>{`Your mouse position is \nx: ${position.x} \ny: ${position.y}`}</>
}

export default MousePointerDemo
