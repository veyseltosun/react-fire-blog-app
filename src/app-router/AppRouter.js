import { Dashboard, Details, Login } from '@mui/icons-material';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewBlog from '../pages/NewBlog';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
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