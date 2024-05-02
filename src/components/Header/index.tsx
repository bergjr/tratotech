import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import TituloComImagem from "./TituloComImagem";
import TituloSemImagem from "./TituloSemImagem";

interface HeaderProps {
  titulo: string;
  descricao?: string;
  classname?: string;
  imagem?: string;
}

export default function Header({
  titulo = '',
  descricao,
  classname,
  imagem,
}: HeaderProps) {
  return (
    <header className={classNames(styles.header, {[styles['header--smaller']]: classname})}>
      {imagem ? (
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          classname='smaller'
        />
      ) : (
        <TituloSemImagem
          titulo={titulo}
          descricao={descricao}
        />
      )}
    </header>
  );
}
