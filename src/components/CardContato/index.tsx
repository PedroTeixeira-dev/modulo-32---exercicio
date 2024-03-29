import { useDispatch } from 'react-redux'
import { Contato } from '../../containers/ListaDeContatos'
import { CardContato } from './styled'
// import MinhaImagem from '../../assets/icons/contato.png'
import { useState } from 'react'
import { remover } from '../../store/reducers/contatos'

export const Card = ({ nome, telefone, email }: Contato) => {
  const [estaEditando, setEstaEditando] = useState(false)

  const dispatch = useDispatch()

  console.log(nome)

  return (
    <CardContato>
      {
        //<img srcSet={MinhaImagem} />
      }

      <input disabled={!estaEditando} defaultValue={nome} />
      <input disabled={!estaEditando} defaultValue={telefone} />
      <input disabled={!estaEditando} defaultValue={email} />
      {estaEditando ? (
        <button onClick={() => setEstaEditando(false)} className="salvar">
          SALVAR
        </button>
      ) : (
        <button onClick={() => setEstaEditando(true)} className="editar">
          EDITAR
        </button>
      )}

      <button onClick={() => dispatch(remover(telefone))} className="deletar">
        DELETAR
      </button>
    </CardContato>
  )
}
