import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Accueil from './Screens/Accueil'
import CommentCaMarche from './Screens/CommentCaMarche'
import Nav from './Components/Nav'
import Propo from './Screens/Propo'





function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Accueil />} />
                <Route path="/apropos" element={<Propo />} />

        <Route path="/services" element={<CommentCaMarche />} />
      </Routes>
    </Router>
  )
}

export default App
