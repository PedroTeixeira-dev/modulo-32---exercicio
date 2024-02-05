import { Contato } from '../../containers/ListaDeContatos'

export const Card = ({ nome, telefone, email }: Contato) => (
  <>
    <h2>{nome}</h2>
    <h2>{telefone}</h2>
    <h2>{email}</h2>
  </>
)
