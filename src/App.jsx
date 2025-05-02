import { Route, Routes } from 'react-router-dom'
import './App.css'
import SideNav from './Components/SideNav'
import Home from './Components/Links/Home'
import About from './Components/Links/About'
import Contact from './Components/Links/Contact'
import MyCv from './Components/Links/MyCv'


function App() {

  return (
    <div className='flex overflow-hidden bg-[#343a40] text-white'>
      <SideNav/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/my-cv' element={<MyCv />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
