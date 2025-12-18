import { useState } from "react";
import { createNote } from "../services/notesService.js";

const UploadNote = () => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNote({ content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Note</h2>
      <textarea onChange={(e) => setContent(e.target.value)} />
      <button>Add</button>
    </form>
  );
};

export default UploadNote;
