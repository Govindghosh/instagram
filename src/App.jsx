import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AuthPage from './Pages/AuthPage'
import SignUpPage from './Pages/SignUpPage'
import PageLayout from './components/Layout/PageLayout'
import UserPage from './Pages/UserPage'
import Login from './components/AuthForm/Login'
import Signup from './components/AuthForm/Signup'



function App() {
  

  return (
    <>
      <PageLayout>
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
        <Route
              path='/:username'
              element={<UserPage/>}
        />
        {/* rendring for Login */}
        <Route
              path='/Login'
              element={<Login/>}
        />
        <Route
              path='/ssignup'
              element={<Signup/>}
        />
      </Routes>
      </PageLayout>
    </>
  )
}

export default App
