import {Routes, Route} from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

import HomePage from './pages/HomePage'
import KelasPage from './pages/KelasPage'
import TestimonialPage from './pages/TestimonialPage'
<<<<<<< HEAD
=======
>>>>>>> main

function App() {
  return (
    <>
      <NavbarComponent />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/kelas' Component={KelasPage} />
<<<<<<< HEAD
=======
        <Route path='/testimonial' Component={TestimonialPage} />
>>>>>>> main
      </Routes>
      
      <FooterComponent />
    </>
  )
}

export default App
