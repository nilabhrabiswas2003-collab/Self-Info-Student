import API from "./api";

export const getNotes = () =>
  API.get("/notes");

export const createNote = (data) =>
  API.post("/notes", data);

export const deleteNote = (id) =>
  API.delete(`/notes/${id}`);
