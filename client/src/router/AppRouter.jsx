import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import App from '../App.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import Profile from '../pages/Profile.jsx'
import Products from '../pages/Products.jsx'
import ProductDetail from '../pages/ProductDetail.jsx'
import UploadProduct from '../pages/UploadProduct.jsx'
import Notes from '../pages/Notes.jsx'
import UploadNote from '../pages/UploadNote.jsx'
import Rooms from '../pages/Rooms.jsx'
import UploadRoom from '../pages/UploadRoom.jsx'


export default function AppRouter(){
return (
<Routes>
<Route path="/" element={<App />}>
<Route index element={<Home/>} />
<Route path="login" element={<Login/>} />
<Route path="register" element={<Register/>} />
<Route path="profile" element={<Profile/>} />
<Route path="products" element={<Products/>} />
<Route path="products/:id" element={<ProductDetail/>} />
<Route path="upload-product" element={<UploadProduct/>} />
<Route path="notes" element={<Notes/>} />
<Route path="upload-note" element={<UploadNote/>} />
<Route path="rooms" element={<Rooms/>} />
<Route path="upload-room" element={<UploadRoom/>} />
</Route>
</Routes>
)
}