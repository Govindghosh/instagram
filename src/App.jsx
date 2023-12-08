import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AuthPage from './Pages/AuthPage'



function App() {
  

  return (
    <>
      <Routes>
        <Route
              path='/'
              element={<HomePage/>}
        />
        <Route
              path='/auth'
              element={<AuthPage/>}
        />
      </Routes>
    </>
  )
}

export default App
