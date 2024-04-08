import NavBar from 'components/NavBar/NavBar'
import Home from 'pages/Home'
import PaginaPadrao from 'pages/PaginaPadrao'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
