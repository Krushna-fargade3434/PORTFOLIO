import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Contact from './pages/contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 pt-24 pb-10 max-w-6xl mx-auto w-full">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
