import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SideNav from './Components/SideNav'
import Home from './Components/Links/Home'
import About from './Components/Links/About'
import Services from './Components/Links/Services'
import Gallery from './Components/Links/Gallery'
import Contact from './Components/Links/Contact'

function App() {

  return (
    <div className=' flex h-full overflow-hidden bg-[#343a40] text-white'>
      <SideNav/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Services />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
