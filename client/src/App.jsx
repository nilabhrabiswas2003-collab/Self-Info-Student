import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'


export default function App(){
return (
<div>
<Header />
<div className="container">
<Outlet />
</div>
<Footer />
</div>
)
}