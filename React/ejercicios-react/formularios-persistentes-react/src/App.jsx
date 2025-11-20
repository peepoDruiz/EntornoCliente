import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Menu/>
      <Footer/>  
    </>
  )
}

export default App
