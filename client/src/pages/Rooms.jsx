import { useEffect, useState } from "react";
import { getRooms } from "../services/roomService.js";
import RoomCard from "../components/RoomCard.jsx";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms().then((res) => setRooms(res.data));
  }, []);

  return (
    <div>
      <h2>Rooms</h2>
      {rooms.map((r) => (
        <RoomCard key={r._id} room={r} />
      ))}
    </div>
  );
};

export default Rooms;
