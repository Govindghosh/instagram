import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AuthPage from './Pages/AuthPage'
import SignUpPage from './Pages/SignUpPage'



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
        <Route
              path='/signup'
              element={<SignUpPage/>}
        />
      </Routes>
    </>
  )
}

export default App
