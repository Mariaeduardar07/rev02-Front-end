import styles from "./Header.module.css";

export default function Header({ title, subtitle, totalProducts }) {
  return (
    <div className={styles.header}>
      <h1>🛒 {title}</h1>
      <p>{subtitle}</p>
      <p>
        📊 Total de produtos: <span id="totalProducts">{totalProducts}</span>
      </p>
    </div>
  );
}
