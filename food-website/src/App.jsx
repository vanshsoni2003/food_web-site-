import React from 'react'
import Home from "./Pages/Home"
import Contact from './Pages/Contact/Contact'
import ShopDetails from "./Pages/ShopDetails/ShopDetails"

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Topbar from './Components/Topbar/Topbar'
import Blog from './Pages/Blog'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Topbar/>
    <Navbar/>
    <Routes>
     <Route path='/home' element={<Home/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/shopdetails' element={<ShopDetails/>}></Route>
     <Route path='/blog' element={<Blog/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App