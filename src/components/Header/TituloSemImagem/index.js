import React from "react";
import styles from "./TituloSemImagem.module.scss";
export default function TituloSemImagem(props) {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.titulo}>{props.titulo}</h1>
        <h2 className={styles.descricao}>{props.descricao}</h2>
      </div>
    </>
  );
}
