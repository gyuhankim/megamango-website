import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import { App } from './app'
import { About } from './components/about'
import { Posts } from './components/posts'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 32px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </HashRouter>
    <GlobalStyles />
  </React.StrictMode>
)
