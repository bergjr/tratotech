import { Slice } from "@reduxjs/toolkit";
import Header from "components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { IRootState } from "store";

type Categoria = {
  nome: string;
  thumbnail: string;
  header: string;
  id: string;
  descricao: string;
};

export default function CategoriaPage() {
  const { nomeCategoria } = useParams();

  const { categoria, itens } = useSelector((state: any) => {
    return (
    {
      categoria: state.categorias.find(
        (categoria: Categoria) => categoria.id === nomeCategoria
      ),
      itens: state.itens
    })
  });
  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
    </div>
  );
}
