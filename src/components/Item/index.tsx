import React from "react";
import styles from "./Item.module.scss";
import { Item as ItemType } from "common/types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { mudarFavorito } from "store/reducers/itens";
import { incrementar } from "store/reducers/contador";

const iconProps = {
  size: 24,
  color: "#041833",
};

export default function Item({
  titulo,
  descricao,
  foto,
  favorito,
  preco,
  id,
  categoria,
}: ItemType) {

  const dispatcher = useDispatch();

  function resolverFavorito() {
    dispatcher(mudarFavorito(id))
  }

 function add () {
    dispatcher(incrementar())
 }

  return (
    <div key={id} className={styles.item}>
      <div className={styles["item-imagem"]}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles["item-descricao"]}>
        <h2>{titulo}</h2>
        <p>{descricao}</p>

        <div className={styles["item-info"]}>
          <div className={styles["item-preco"]}>R$ {preco.toFixed(2)}</div>
          <div className={styles["item-acoes"]}>
            {favorito ? (
              <AiFillHeart
                {...iconProps}
                color="#ff0000"
                className={styles["item-acao"]}
                onClick={resolverFavorito}
              />
            ) : (
              <AiOutlineHeart {...iconProps} className={styles["item-acao"]} onClick={resolverFavorito}/>
            )}
            <FaCartPlus
              {...iconProps}
              color={true ? "#1875E8" : iconProps.color}
              className={styles["item-acao"]}
              onClick={add}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
