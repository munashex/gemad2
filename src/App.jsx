import Home from './pages/Home' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar' 

const App = () => {

  return (
    <div className="bg-light text-dark min-h-screen">
     <Router> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App
