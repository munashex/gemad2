import Home from './pages/Home' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar' 
import Services from './pages/Services'
import Contact from './pages/Contact'

const App = () => {

  return (
    <div className="min-h-screen">
     <Router> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/services" element={<Services/>}/> 
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App
