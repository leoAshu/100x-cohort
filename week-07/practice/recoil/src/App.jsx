import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import countAtom from './store/atoms/count'

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
    return <div>{count}</div>
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

export default App
