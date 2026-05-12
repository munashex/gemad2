import Home from './pages/Home' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar' 

const App = () => {

  return (
    <div className="min-h-screen">
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
