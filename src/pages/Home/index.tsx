import Header from "components/Header";
import styles from "./Home.module.scss";
import relogio from "assets/inicial.png";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

type Categoria = {
  nome: string,
  thumbnail: string,
  header: string,
  id: string,
  descricao: string,
}

export default function Home() {

  const navigate = useNavigate();
  const categorias = useSelector((state: any) => state.categorias)

  return (
    <div>
      <Header
        descricao="Classificados Tech"
        titulo="Compre diversos tipos de produtos no melhor site do Brasil!"
        imagem={relogio}
        classname={styles.header}
      />
     <div className={styles.categorias}>
        <div className={styles['categorias-titulo']}>
          <h1>
            Categorias
          </h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map((categoria: Categoria, index: number) => (
            <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
