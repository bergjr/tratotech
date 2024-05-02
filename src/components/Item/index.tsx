import styles from "./Item.module.scss";
import { Item as ItemType } from "common/types";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { mudarFavorito } from "store/reducers/itens";
import { mudarCarrinho, mudarQuantidade } from "store/reducers/carrinho";
import classNames from "classnames";

const iconProps = {
  size: 24,
  color: "#041833",
};

const quantidadeProps = {
  size: 32,
  color: "#1875E8",
};

interface ItemProps {
  carrinho?: boolean;
  quantidade?: number;
}

export default function Item({
  titulo,
  descricao,
  foto,
  favorito,
  preco,
  id,
  categoria,
  carrinho = false,
  quantidade,
}: ItemType & ItemProps) {
  const temCarrinho = useSelector((state: any) => {
    return state.carrinho.some(
      (itemNoCarrinho: any) => itemNoCarrinho.id === id
    );
  });

  const dispatcher = useDispatch();

  function resolverFavorito() {
    dispatcher(mudarFavorito(id));
  }

  function modCarrinho(id: string) {
    dispatcher(mudarCarrinho(id));
  }

  function changeQuantidade(id: string, quantidade: number) {
    dispatcher(mudarQuantidade({ id: id, quantidade: quantidade }));
  }

  return (
    <div
      key={id}
      className={classNames(styles.item, {
        [styles.itemNoCarrinho]: carrinho,
      })}
    >
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
              <AiOutlineHeart
                {...iconProps}
                className={styles["item-acao"]}
                onClick={resolverFavorito}
              />
            )}
            {carrinho ? (
              <div className={styles.quantidade}>
                Quantidade:
                <AiFillMinusCircle
                  {...quantidadeProps}
                  onClick={(e) => {
                    changeQuantidade(id, -1);
                    e.stopPropagation();
                  }}
                />
                <span>{String(quantidade || 0).padStart(2, "0")}</span>
                <AiFillPlusCircle
                  {...quantidadeProps}
                  onClick={(e) => {
                    changeQuantidade(id, 1);
                    e.stopPropagation();
                  }}
                />
              </div>
            ) : (
              <FaCartPlus
                {...iconProps}
                color={temCarrinho ? "#1875E8" : iconProps.color}
                className={styles["item-acao"]}
                onClick={() => {
                  modCarrinho(id);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
