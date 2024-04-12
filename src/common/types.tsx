export type Item = {
  titulo: string,
  descricao: string,
  foto: string,
  favorito: boolean,
  preco: number,
  id: any,
  categoria: string
}

export type Categoria = {
  nome: string;
  thumbnail: string;
  header: string;
  id: string;
  descricao: string;
};