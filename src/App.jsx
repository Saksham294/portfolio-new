import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'

function App() {


  return (
   <Router>
    <Navbar/>
    <Homepage/>
   </Router>
  )
}

export default App
