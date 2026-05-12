import Home from './pages/Home' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar' 
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {

  return (
    <div className="min-h-screen">
     <Router> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/services" element={<Services/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/about" element={<About/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App
