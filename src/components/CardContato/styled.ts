import styled from 'styled-components'

export const CardContato = styled.div`
  height: 180px;
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 32px;
  justify-content: center;
  align-items: center;
  border: #1818bb solid 2px;
  border-radius: 8px;
  width: 90%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 16px 16px 4px #111155;

  img {
    width: 50px;
  }

  input {
    background-color: transparent;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    width: 80%;
  }

  button {
    width: 50%;
    font-size: 16px;
    font-weight: bold;
    border: none;
    color: whitesmoke;
    margin-bottom: 2px;
    margin-top: 4px;
    cursor: pointer;
    margin-bottom: 6px;
  }

  .editar {
    background-color: #d8a30a;
  }

  .deletar {
    background-color: #c4130a;
  }

  .salvar {
    background-color: green;
  }
`
