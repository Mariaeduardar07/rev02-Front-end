
"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./page.module.css";
import { productsData } from "../../public/data/Products.js";

export default function Home() {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className={styles.products}>
       {products.map((product) => (
         <ProductCard key={product.id} product={product} />
       ))}
    </div>
  );
}
