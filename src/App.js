import './App.css';
import HomePage from './pages/Home-page.jsx'
import AboutPage from './pages/About-page.jsx'
import PhilosophyPage from './pages/Philosophy-page.jsx'
import ClassesPage from './pages/Classes-page.jsx'
import OfferingsPage from './pages/Offerings-page.jsx'
import ContactPage from './pages/Contact-page.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    </div>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/philosophy' element={<PhilosophyPage/>} />
        <Route path='/classes' element={<ClassesPage/>} />
        <Route path='/offerings' element={<OfferingsPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
