import { Card } from '../../components/CardContato'

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
    }
  ]

  return (
    <>
      <main>
        <ul>
          {listaDeContato.map((contato) => (
            <li key={contato.telefone}>
              <Card
                nome={contato.nome}
                telefone={contato.telefone}
                email={contato.email}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default ListaDeContatos
