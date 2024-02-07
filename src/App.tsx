import React from 'react'
import EstiloGlobal, { Container } from './style'
import ListaDeContatos from './containers/ListaDeContatos'
import Cadastro from './containers/Header&Cadastro'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Cadastro />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
