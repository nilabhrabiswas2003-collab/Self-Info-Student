import API from "./api";

export const getRooms = () =>
  API.get("/rooms");

export const createRoom = (data) =>
  API.post("/rooms", data);

export const deleteRoom = (id) =>
  API.delete(`/rooms/${id}`);
