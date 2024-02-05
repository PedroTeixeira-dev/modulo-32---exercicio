import styled from 'styled-components'

export const Header = styled.header`
  display: grid;
  grid-template-rows: 100px 100px;
  margin: 0 auto;
  text-align: center;
  background-color: #93b0ff;
  width: 100%;
  box-shadow: 0px 4px 16px #2528ff;

  h2 {
    margin-top: 16px;
    color: #2525e9;
    font-family: Arial, Helvetica, sans-serif;
  }

  input {
    margin-right: 8px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    padding: 4px 4px;
  }

  button {
    background: linear-gradient(45deg, #6983ff, #2528ff);
    border: none;
    font-size: 16px;
    padding: 4px 8px;
    border-radius: 4px;
    color: #ebf2ff;
    cursor: pointer;
  }
`

//2825e9 https://uicolors.app/create
