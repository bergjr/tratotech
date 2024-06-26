import { createSlice } from '@reduxjs/toolkit'
import {Item} from 'common/types'


const initialState: any = []

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: initialState,
  reducers: {
    mudarCarrinho: (state, {payload}) => {
      const temItem = state.some((item:any) => item.id === payload)
      if(!temItem) {
        return [
          ...state, {
            id: payload,
            quantidade: 1
          }
        ]
      }
        return state.filter((item: any)=> item.id !== payload)
    },
    mudarQuantidade: (state, {payload}) => {
      state = state.map((itemNoCarrinho: any) => {
        if(itemNoCarrinho.id === payload.id) {
          itemNoCarrinho.quantidade += payload.quantidade
          return itemNoCarrinho
        }    
      })
    },
    finalizarCompra: () => initialState
  }
})

export default carrinhoSlice.reducer
export const { mudarCarrinho, mudarQuantidade, finalizarCompra } = carrinhoSlice.actions