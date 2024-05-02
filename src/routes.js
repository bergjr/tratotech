
import Home from 'pages/Home'
import PaginaPadrao from 'pages/PaginaPadrao'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CategoriaPage from 'pages/CategoriaPage'
import CarrinhoPage from 'pages/CarrinhoPage'
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />}/>
          <Route path='/categoria/:nomeCategoria' element={<CategoriaPage />}/>
          <Route path='/carrinho' element={<CarrinhoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
