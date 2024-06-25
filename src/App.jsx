import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Blog from './components/Blog/Blog'

function App() {


  return (
   <Router>
     <Navbar/>
   <Routes>
    <Route path="/"  element={<Homepage/>}/>
    {/* <Route path="/blog"  element={<Blog/>}/> */}
    </Routes>
   </Router>
  )
}

export default App
