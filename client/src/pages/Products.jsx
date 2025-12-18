import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productService.js";
import ProductCard from "../components/ProductCard.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
};

export default Products;
