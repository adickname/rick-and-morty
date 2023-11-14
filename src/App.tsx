import React from 'react'
import { Nav } from './components/styles/Nav'
import GlobalStyle from './components/styles/Global'
import getCharacters from './components/api/GetCharacters'
import Characters from './components/content/Characters'
getCharacters
function App() {
    return (
        <>
            <GlobalStyle />
            <Nav></Nav>
            <Characters />
        </>
    )
}

export default App
