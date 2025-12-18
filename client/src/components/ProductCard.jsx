import React from 'react'
import { Link } from 'react-router-dom'
export default function ProductCard({p}){
return (
<div className="card">
<img src={p.image1} alt={p.productName} style={{width:'100%',height:160,objectFit:'cover',borderRadius:6}}/>
<h4>{p.productName}</h4>
<p>Price: {p.price}</p>
<Link to={`/products/${p._id}`} className="button">View</Link>
</div>
)
}