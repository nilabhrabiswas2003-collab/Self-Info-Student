import { useEffect, useState } from "react";
import { getNotes } from "../services/notesService.js";
import NoteCard from "../components/NoteCard.jsx";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then((res) => setNotes(res.data));
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      {notes.map((n) => (
        <NoteCard key={n._id} note={n} />
      ))}
    </div>
  );
};

export default Notes;
