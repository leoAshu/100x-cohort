import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import countAtom from './store/atoms/count'
import evenCountSelector from './store/selectors/eventCount'

function App() {
    return (
        <RecoilRoot>
            <Count />
        </RecoilRoot>
    )
}

function Count() {
    console.log('count render')
    return (
        <>
            <CountRenderer />
            <Buttons />
        </>
    )
}

function CountRenderer() {
    const count = useRecoilValue(countAtom)
    return (
        <div>
            {count}
            <br />
            <EvenCountRenderer />
        </div>
    )
}

function Buttons() {
    console.log('buttons render')
    const setCount = useSetRecoilState(countAtom)
    return (
        <div>
            <button
                onClick={() => {
                    setCount((count) => count + 1)
                }}
            >
                Increment
            </button>

            <button
                onClick={() => {
                    setCount((count) => count - 1)
                }}
            >
                Decrement
            </button>
        </div>
    )
}

function EvenCountRenderer() {
    const isEven = useRecoilValue(evenCountSelector)

    return <>{isEven ? <>It is even</> : null}</>
}

export default App
