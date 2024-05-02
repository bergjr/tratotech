import React from "react";
import styles from "./TituloComImagem.module.scss";


export default function TituloComImagem(props) {
  return (
    <>
    <div className={`${styles.header} ${props.className}`}>
      <div className={styles["header-texto"]}>
        <h1>{props.titulo}</h1>
        <h2>{props.descricao}</h2>
      </div>
      <div className={styles["header-imagem"]}>
        <img src={props.imagem} alt={props.titulo} />
      </div>
    </div>  
    </>
  );
}
