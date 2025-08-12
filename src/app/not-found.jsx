import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.containerNotFound}>
      <Image
        src="/img/roboNot.png"
        alt="Página não encontrada"
        width={300}
        height={200}
        priority
        style={{
          width: "20%",
          height: "auto",
        }}
      />
      <h1>404</h1>
      <h4>Página Não Encontrada</h4>
      <p>
        Ops ! A página que você está procurando não foi encontrada, volte para a
        página inicial
      </p>
       <Link href="/">
        <button className={styles.btnInicio}>
          Voltar para Home
        </button>
      </Link>
    </div>
  );
}
