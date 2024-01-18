# Week 7

## Single Page Applications

-   React creates single page applications
-   where, client-side routing is done
    -   all the routes are present in the single bundle
    -   server is not hit more than once for routing

## Lazy Loading

-   provides only the bundle required to render the route
-   bundles for other routes will not be included
-   optimizes the web app

## Prop Drilling

-   repeated unnecessary passing down of state via props to child components
-   state manages by a parent component is required by a child component deep down in the component tree
-   needs unncessarily passing down the state via props through all the components in the path until the specific child component

#### Context API

-   helps avoid prop drilling by teleporting the state directly to the child components that require i
-   involves three steps
    -   create the context for the state `createContext()`
    -   wrap the components (just the root) with `<CustomContext.Provider>` context provider
    -   call the state context using the `useContext(CustomContext)` hook
-   only provides syntactical sugar to avoid passing state through props
-   does not fix the unnecessary re-renders
    -   in the example below, even if context not used in Counter, it still re-renders
    -   state management libraries like `Recoil` solve this issue
-   in summary, context api only makes syntax cleaner (get rid of prop drilling) and not to make rendering more efficient

```javascript
// CountContext.jsx
import { createContext } from 'react'

export const CountContext = createContext(0)

// App.jsx
import { useContext, useState } from 'react'
import { CountContext } from './context'

function App() {
    const [count, setCount] = useState(0)

    return (
        <CountContext.Provider value={count}>
            <Count setCount={setCount} />
        </CountContext.Provider>
    )
}

function Count({ setCount }) {
    console.log('count render')
    return (
        <>
            <CountRenderer />
            <Buttons setCount={setCount} />
        </>
    )
}

function CountRenderer() {
    const count = useContext(CountContext)
    return <div>{count}</div>
}

function Buttons({ setCount }) {
    const count = useContext(CountContext)
    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                Increment
            </button>

            <button
                onClick={() => {
                    setCount(count - 1)
                }}
            >
                Decrement
            </button>
        </div>
    )
}

export default App
```

### Recoil

-   is a state management library
-   creates an ideal separation of concern between state and components
-   prevents unnecessary re-renders of components not using the state
-   other similar libraries
    -   zustand
    -   redux

#### Atom

-   an `atom` can store the state, smallest unit of state
-   it can be defined outside the component
-   it can be teleported to any component

```javascript
// store/atoms/count.jsx
import { atom } from 'recoil'

const countAtom = atom({
    key: 'countAtom',
    default: 0
})

export default countAtom


// App.jsx
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
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
    const [count, setCount] = useRecoilState(countAtom)
    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                Increment
            </button>

            <button
                onClick={() => {
                    setCount(count - 1)
                }}
            >
                Decrement
            </button>
        </div>
    )
}

export default App

```

#### Selectors
