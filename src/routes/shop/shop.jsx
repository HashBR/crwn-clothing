import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card";

import { ProductsContext } from "../../context/products";

import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={products.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
