import styles from "./ProductCard.module.css";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard} data-categoria={product.category}>
      <div className={styles.productImage}>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div className={styles.productTitle}>{product.title}</div>
      <div className={styles.productPrice}>{product.price}</div>
      <div className={styles.productDescription}>{product.description}</div>
      <div className={styles.productRating}>
        {"⭐".repeat(product.rating.stars)}
        {"☆".repeat(5 - product.rating.stars)}
        <span>
          {product.rating.count} ({product.rating.reviews}) avaliações
        </span>
      </div>
    </div>
  );
}
