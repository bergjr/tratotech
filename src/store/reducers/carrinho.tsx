import { createSlice } from '@reduxjs/toolkit'
import {Item} from 'common/types'


const initialState: Item[] = []

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: initialState,
  reducers: {}
})

export default carrinhoSlice.reducer