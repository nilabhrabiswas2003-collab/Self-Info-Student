import React, {useState} from 'react'
import {loginUser} from '../services/authService.js'
import { useNavigate } from 'react-router-dom'


export default function Login(){
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const nav=useNavigate()


async function submit(e) {
  e.preventDefault();
  try {
    await loginUser({ email, password });
    alert('Logged in');
    nav('/');
  } catch (err) {
    alert(err?.response?.data?.message || err.message);
  }
}



return (
<div style={{maxWidth:480}}>
<h3>Login</h3>
<form onSubmit={submit}>
<div className="form-row"><input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/></div>
<div className="form-row"><input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/></div>
<button className="button">Login</button>
</form>
</div>
)
}