import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/home" element={<RegisterPage/>}/>
          <Route path="/genres" element={<RegisterPage/>}/>
          <Route path="/carousel" element={<RegisterPage/>}/>
          <Route path="/dashboard" element={<RegisterPage/>}/>
          <Route path="/movies" element={<RegisterPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/> {/*any path not taken from above */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
