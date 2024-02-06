import { Contato } from '../../containers/ListaDeContatos'
import { CardContato } from './styled'
import MinhaImagem from '../../assets/icons/contato.png'

export const Card = ({ nome, telefone, email }: Contato) => (
  <CardContato>
    <img srcSet={MinhaImagem} />
    <h2>{nome}</h2>
    <h2>{telefone}</h2>
    <h2>{email}</h2>
  </CardContato>
)
