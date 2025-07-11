import './App.css'
import Home from './pages/Home'
import './index.css'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './pages/Contact'
import Projects from './pages/Projects'


function App() {

  return (
  <Routes>
      {/* Layout wraps all child pages */}
      <Route element={<Layout />}>
        {/* index means the root path `/` */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
         <Route path="projects" element={<Projects/>} />
      </Route>
    </Routes>
  )
}

export default App
