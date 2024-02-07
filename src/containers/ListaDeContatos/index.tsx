import { useSelector } from 'react-redux'
import { Card } from '../../components/CardContato'
import { Main, TodosContatos } from './style'
import { RootReducer } from '../../store'

export type Contato = {
  nome: string
  telefone: number
  email: string
}

const ListaDeContatos = () => {
  const listaDeContato = useSelector(
    (state: RootReducer) => state.lista.contatos
  )

  return (
    <>
      <Main>
        <TodosContatos>
          {listaDeContato.map((contato) => (
            <li key={contato.telefone}>
              <Card
                nome={contato.nome}
                telefone={contato.telefone}
                email={contato.email}
              />
            </li>
          ))}
        </TodosContatos>
      </Main>
    </>
  )
}

export default ListaDeContatos
