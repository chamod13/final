import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myprofile from './pages/myprofile'
import Myappoinments from './pages/myappoinments'
import Appoinments from './pages/Appoinments'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/doctors' element={<Doctors />}/>
      <Route path='/doctors/:speciality' element={<Doctors />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/my-profile' element={<Myprofile />}/>
      <Route path='/my-appoinments' element={<Myappoinments />}/>
      <Route path='/appoinment/:docId' element={<Appoinments />}/>

     </Routes>
    </div>
  )
}

export default App