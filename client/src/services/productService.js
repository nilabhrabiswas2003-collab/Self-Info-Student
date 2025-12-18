import API from "./api";

export const getAllProducts = () =>
  API.get("/products");

export const getProductById = (id) =>
  API.get(`/products/${id}`);

export const createProduct = (formData) =>
  API.post("/products", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteProduct = (id) =>
  API.delete(`/products/${id}`);
