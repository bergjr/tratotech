import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  titulo: string;
  descricao?: string;
  classname?: string;
  imagem?: string;
}

export default function Header({
  titulo,
  descricao,
  classname = "",
  imagem,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles["header-texto"]}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      <div className={styles["header-imagem"]}>
        <img src={imagem} alt={titulo} />
      </div>
    </header>
  );
}
