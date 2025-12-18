import { useState } from "react";
import { createProduct } from "../services/productService.js";

const UploadProduct = () => {
  const [form, setForm] = useState({ title: "", description: "", file: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("file", form.file);
    await createProduct(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Product</h2>
      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <input type="file" onChange={(e) => setForm({ ...form, file: e.target.files[0] })} />
      <button>Upload</button>
    </form>
  );
};

export default UploadProduct;
