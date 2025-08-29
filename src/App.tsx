import './App.css'
import AuthPage from './app/auth/AuthPage'
import Login from './app/auth/Login'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'

function App() {

  return (

    <BrowserRouter >
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<AuthPage />} />
    </Routes>
    </BrowserRouter >
  )
}

export default App
