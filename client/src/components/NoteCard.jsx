import React from 'react'
export default function NoteCard({n}){
return (
<div className="card">
<h4>{n.title}</h4>
<p>{n.description}</p>
<a href={n.notesFile} target="_blank" rel="noreferrer" className="button">Open</a>
</div>
)
}