import { useState } from "react";
import { createRoom } from "../services/roomService.js";

const UploadRoom = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRoom({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Room</h2>
      <input placeholder="Room Name" onChange={(e) => setName(e.target.value)} />
      <button>Create</button>
    </form>
  );
};

export default UploadRoom;
