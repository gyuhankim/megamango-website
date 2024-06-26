import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import { Nav } from './components/nav';
import { App } from './components/app'
import { About } from './components/about'
import { Posts } from './components/posts'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 24px 0;
    font-family: "Poppins", sans-serif;
    font-style: normal;
  }

  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </HashRouter>
    <GlobalStyles />
  </React.StrictMode>
)
