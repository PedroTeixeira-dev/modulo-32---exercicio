import { Contato } from '../../containers/ListaDeContatos'
import { CardContato } from './styled'
import MinhaImagem from '../../assets/icons/contato.png'
import { useState } from 'react'

export const Card = ({ nome, telefone, email }: Contato) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <CardContato>
      <img srcSet={MinhaImagem} />
      <input disabled={!estaEditando} defaultValue={nome} />
      <input disabled={!estaEditando} defaultValue={telefone} />
      <input disabled={!estaEditando} defaultValue={email} />
      {estaEditando ? (
        <button onClick={(e) => setEstaEditando(false)} className="editar">
          SALVAR
        </button>
      ) : (
        <button onClick={(e) => setEstaEditando(true)} className="editar">
          EDITAR
        </button>
      )}

      <button className="deletar">DELETAR</button>
    </CardContato>
  )
}
