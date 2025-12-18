import React from 'react'
import { Link } from 'react-router-dom'


export default function Header(){
return (
<header className="container header">
<div><Link to="/">Junior Notes</Link></div>
<nav className="nav">
<Link to="/products">Products</Link>
<Link to="/notes">Notes</Link>
<Link to="/rooms">Rooms</Link>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
</nav>
</header>
)
}