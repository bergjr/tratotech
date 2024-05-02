import Header from "components/Header";
import styles from "./Carrinho.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Item from "components/Item";
import { finalizarCompra } from "store/reducers/carrinho";

export default function CarrinhoPage() {
  const busca = useSelector((state: any) => state.busca)
  const regexp = new RegExp(busca, 'i')
  const carrinho = useSelector((state: any) => {
    const carrinhoReduce = state.carrinho.reduce(
      (itens: any, itemNoCarrinho: any) => {
        const itemAchado = state.itens.find(
          (item: any) => item.id === itemNoCarrinho.id 
        );
        itens.push({
          ...itemAchado,
          quantidade: itemNoCarrinho.quantidade,
        });
        return itens;
      },
      []
    );
    return carrinhoReduce;
  });

  const dispatcher = useDispatch()

  const mostrarTotal = carrinho.reduce(
    (acumulador: number, item: any) => acumulador + item.preco * item.quantidade,
    0
  );

  
  return (
    <>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira produtos que você adicionou no carrinho"
        classname="smaller"
      />
      <div className={styles.carrinho}>
        {carrinho.map((item: any) => {
          if(item.titulo.match(regexp)) return <Item {...item} carrinho />;
        })}
        <div className={styles.total}>
          <strong>Preco total:</strong> <span>{mostrarTotal.toFixed(2)}</span>
        </div>
        <button className={styles.finalizar} onClick={() => dispatcher(finalizarCompra())}>
          Finalizar compra
        </button>
      </div>
    </>
  );
}
