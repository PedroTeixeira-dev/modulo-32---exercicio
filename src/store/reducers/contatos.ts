import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Contato } from '../../containers/ListaDeContatos/index'

type ListaState = {
  contatos: Contato[]
}

const initialState: ListaState = {
  contatos: [
    {
      nome: 'Pedro',
      telefone: 24985684268,
      email: 'pedro@teste.com'
    },
    {
      nome: 'Maria',
      telefone: 24968745236,
      email: 'maria@gmail.com'
    },
    {
      nome: 'zeziniho',
      telefone: 21965478236,
      email: 'ze@gmail.com'
    },
    {
      nome: 'joao',
      telefone: 57956321458,
      email: 'pedro@teste.com'
    },
    {
      nome: 'Mel',
      telefone: 24987456698,
      email: 'maria@gmail.com'
    },
    {
      nome: 'Antonio',
      telefone: 21963635241,
      email: 'ze@gmail.com'
    }
  ]
}

const listaSlice = createSlice({
  name: 'lista',
  initialState,

  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      const novoContato = action.payload

      if (
        state.contatos.find(
          (contato) => contato.telefone === novoContato.telefone
        )
      ) {
        alert('Número ja adicionado')
      } else {
        state.contatos.push(novoContato)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.telefone !== action.payload
      )
    }
  }
})

export const { adicionar, remover } = listaSlice.actions
export default listaSlice.reducer
