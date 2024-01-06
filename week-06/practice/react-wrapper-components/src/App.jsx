import { useState } from 'react'

function App() {
    return (
        <div>
            <CardWrapper>
                <TextComponent />
            </CardWrapper>
            <CardWrapper>
                <TextComponent />
            </CardWrapper>
            <CardWrapper>
                <TextComponent />
            </CardWrapper>
        </div>
    )
}

function CardWrapper({ children }) {
    return <div style={{ border: '2px solid black', padding: 20 }}>{children}</div>
}

function TextComponent() {
    return <p>Hi there!</p>
}

export default App
