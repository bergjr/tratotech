import Header from "components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Categoria.module.scss";
import Item from "components/Item";
import { Categoria, Item as ItemType } from "common/types";

export default function CategoriaPage() {
  const { nomeCategoria } = useParams();
  const busca = useSelector((state: any) => state.busca)
  const regexp = new RegExp(busca, 'i')
  // const { categoria, itens } = useSelector((state: any) => {
  //   return {
  //     categoria: state.categorias.find(
  //       (categoria: Categoria) => categoria.id === nomeCategoria
  //     ),
  //     itens: state.itens,
  //   };
  // });

  const categoria = useSelector((state: any) =>
    state.categorias.find(
      (categoria: Categoria) => categoria.id === nomeCategoria
    )
  );

  const itens = useSelector((state: any) =>
    state.itens.filter((item: any) => item.categoria === nomeCategoria && item.titulo.match(regexp))
  );

  return (
    <>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
        classname="smaller"
      />
      <div className={styles.itens}>
        {itens?.map((item: ItemType) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}
