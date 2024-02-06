import { Card } from '../../components/CardContato'
import { TodosContatos } from './style'

export type Contato = {
  nome: string
  telefone: number
  email: string
}

const ListaDeContatos = () => {
  const listaDeContato = [
    {
      nome: 'Pedro',
      telefone: 988330918,
      email: 'pedro@teste.com'
    },
    {
      nome: 'Maria',
      telefone: 988241569,
      email: 'maria@gmail.com'
    },
    {
      nome: 'zeziniho',
      telefone: 584654654,
      email: 'ze@gmail.com'
    },
    {
      nome: 'Pedro',
      telefone: 988330918,
      email: 'pedro@teste.com'
    },
    {
      nome: 'Maria',
      telefone: 988241569,
      email: 'maria@gmail.com'
    },
    {
      nome: 'zeziniho',
      telefone: 584654654,
      email: 'ze@gmail.com'
    }
  ]

  return (
    <>
      <main>
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
      </main>
    </>
  )
}

export default ListaDeContatos
