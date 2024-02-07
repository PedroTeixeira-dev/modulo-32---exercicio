import { useDispatch } from 'react-redux'
import { Header } from './style'
import { FormEvent, useState } from 'react'
import { adicionar } from '../../store/reducers/contatos'
import InputMask from 'react-input-mask'

const Cadastro = () => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState(0)
  const [email, setEmail] = useState('')

  const cadastraContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      adicionar({
        nome,
        telefone,
        email
      })
    )
  }

  return (
    <Header>
      <h2>
        <span>Cadastre aqui seus contatos</span>
      </h2>
      <form onSubmit={cadastraContato}>
        <input
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
          id="nome"
        />
        <InputMask
          mask="(99) 9 9999-9999"
          onChange={(evento) => setTelefone(parseInt(evento.target.value))}
          type="tel"
          placeholder="Telefone"
          id="telefone"
        />
        <input
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="e-mail"
          id="email"
        />
        <button type="submit">Adicionar +</button>
      </form>
    </Header>
  )
}

export default Cadastro
