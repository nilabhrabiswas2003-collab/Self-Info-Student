import React from 'react'
export default function RoomCard({r}){
return (
<div className="card">
<img src={r.image1} alt={r.name} style={{width:'100%',height:160,objectFit:'cover'}}/>
<h4>{r.name}</h4>
<p>{r.description}</p>
</div>
)
}