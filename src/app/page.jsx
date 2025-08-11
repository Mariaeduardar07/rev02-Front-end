"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "./page.module.css";
import { productsData } from "../../public/data/Products";
import Header from "../components/Header/Header";

export default function Home() {
const [products, setProducts] = useState(productsData);

  // useEffect(() => {
  //   setProducts(productsData);
  // }, []);

  return (
    <div className={styles.container}>
      <Header
        title={"Loja de Eletrônicos"}
        subtitle={"Os melhores produtos com os melhores preços!"}
        totalProducts={products.length}
      />

      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
