import { configureStore } from '@reduxjs/toolkit' 
import categoriasSlice from './reducers/categorias'
import itensSlice from './reducers/itens'
import contadorSlice from './reducers/contador'

const store = configureStore({
  reducer: {
    categorias: categoriasSlice,
    itens: itensSlice,
    contador: contadorSlice
  }
})

export default store;
