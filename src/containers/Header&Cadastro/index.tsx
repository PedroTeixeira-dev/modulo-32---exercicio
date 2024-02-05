import { Header } from './style'

const Cadastro = () => (
  <>
    <Header>
      <h2>Cadastre aqui seus contatos</h2>
      <form>
        <input type="text" placeholder="Nome" id="nome" />
        <input type="tel" placeholder="Telefone" id="telefone" />
        <input type="email" placeholder="e-mail" id="email" />
        <button type="submit">Adicionar +</button>
      </form>
    </Header>
  </>
)

export default Cadastro
