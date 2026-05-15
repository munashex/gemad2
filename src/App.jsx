import Home from './pages/Home' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar' 
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import Commodities from './pages/commodities'
import SocialResponsibility from './pages/SocialResponsibility'
import OurTeam from './pages/OurTeam'

const App = () => {

  return (
    <div className="min-h-screen flex flex-col">
     <Router> 
      <ScrollToTop />
      <Navbar/>
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/services" element={<Services/>}/> 
          <Route path="/contact" element={<Contact/>}/> 
          <Route path="/about" element={<About/>}/>
          <Route path="/commodities" element={<Commodities/>}/>
          <Route path="/social-responsibility" element={<SocialResponsibility/>}/>
          <Route path="/team" element={<OurTeam/>}/>
        </Routes>
      </main>
      <Footer/>
     </Router>
    </div>
  )
}

export default App