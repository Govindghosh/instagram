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
              path='/home'
              element={<HomePage/>}
        />
        <Route
              // for some reason remove /auth 
              path='/'
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
