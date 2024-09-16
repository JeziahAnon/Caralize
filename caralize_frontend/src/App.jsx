import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InfoPage from './pages/InfoPage'

function App() {
  return (
    <>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<InfoPage/>}/>
              </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
