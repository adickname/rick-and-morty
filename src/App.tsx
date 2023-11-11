import React from 'react'
import { Nav } from './components/styles/Nav'
import GlobalStyle from './components/styles/Global'
import getCharacters from './components/api/GetCharacters'
getCharacters
function App() {
    return (
        <>
            <GlobalStyle />
            <Nav></Nav>
        </>
    )
}

export default App
