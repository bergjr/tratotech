import { ResetTvSharp } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const buscaSlice = createSlice({
  name: 'busca',
  initialState,
  reducers: {
    mudarBusca: (state, {payload}) => {
      return payload
    },
    resetarBusca: () => {
      return initialState
    }
    
  }
});

export const { resetarBusca, mudarBusca } = buscaSlice.actions
export default buscaSlice.reducer