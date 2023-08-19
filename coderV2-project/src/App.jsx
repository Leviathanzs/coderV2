import {Routes, Route} from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

import HomePage from './pages/HomePage'
import KelasPage from './pages/KelasPage'

function App() {
  return (
    <>
      <NavbarComponent />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/kelas' Component={KelasPage} />
      </Routes>
      
      <FooterComponent />
    </>
  )
}

export default App
