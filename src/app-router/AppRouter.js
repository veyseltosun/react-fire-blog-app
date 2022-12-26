
import React from 'react';
import Navbar from "../components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Details from '../pages/Details';
import Profile from '../pages/Profile';
import About from '../pages/About';
import NewBlog from '../pages/NewBlog';
import UpdateBlog from '../pages/UpdateBlog';


const AppRouter = () => {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/newblog' element={<NewBlog/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/updateblog' element={<UpdateBlog/>}/>
        <Route path='/' element={<Dashboard/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default AppRouter