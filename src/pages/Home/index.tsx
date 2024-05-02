import Header from "components/Header";
import styles from "./Home.module.scss";
import relogio from "assets/inicial.png";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

type Categoria = {
  nome: string;
  thumbnail: string;
  header: string;
  id: string;
  descricao: string;
};

export default function Home() {
  const navigate = useNavigate();
  const categorias = useSelector((state: any) => state.categorias);
  const busca = useSelector((state: any) => state.busca)
  const regexp = new RegExp(busca, 'i')
  const dispatcher = useDispatch()

  return (
    <div>
      <Header
        descricao="Classificados Tech"
        titulo="Compre diversos tipos de produtos no melhor site do Brasil!"
        imagem={relogio}
      />
      <div className={styles.categorias}>
        <div className={styles["categorias-titulo"]}>
          <h1>Categorias</h1>
        </div>
        <div className={styles["categorias-container"]}>
          {categorias.map((categoria: Categoria, index: number) => {
            if(categoria.nome.match(regexp)) {
            return (
              <div
                key={index}
                onClick={() => navigate(`/categoria/${categoria.id}`)}
              >
                <img src={categoria.thumbnail} alt={categoria.nome} />
                <h1>{categoria.nome}</h1>
              </div>
            );}
          })}
        </div>
      </div>
    </div>
  );
}
