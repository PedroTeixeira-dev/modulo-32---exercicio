import { configureStore } from '@reduxjs/toolkit'

import listaReducer from './reducers/contatos'

const store = configureStore({
  reducer: {
    lista: listaReducer
  }
  // reducers vem aqui
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
