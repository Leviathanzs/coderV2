import {Routes, Route} from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

import HomePage from './pages/HomePage'
import KelasPage from './pages/KelasPage'
import TestimonialPage from './pages/TestimonialPage'
import SyaratKeten from './pages/SyaratKeten'
import FaqPage from './pages/FaqPage'

function App() {
  return (
    <>
      <NavbarComponent />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/kelas' Component={KelasPage} />
        <Route path='./testimonial' Component={TestimonialPage} />
        <Route path='./faq' Component={FaqPage} />
        <Route path='./syaratketen' Component={SyaratKeten} />
      </Routes>
      
      <FooterComponent />
    </>
  )
}

export default App
