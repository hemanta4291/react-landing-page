import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {theme} from './components/styles/Theme'
import GlobalStyle from "./components/styles/Global.styled";
import Home from './pages/Home';
import Layout from './layout/Layout';
import { NotFound } from './pages/NotFound';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className='app'>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
