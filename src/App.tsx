import React from 'react'
import EstiloGlobal, { Container } from './style'
import ListaDeContatos from './containers/ListaDeContatos'
import Cadastro from './containers/Header&Cadastro'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Cadastro />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
