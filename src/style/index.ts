import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{padding: 0;
margin: 0;
box-sizing: border-box;}
`

export const Container = styled.div`
  display: grid;
  grid-template-rows: 160px auto;
  background-color: #dae7ff;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;

  li {
    list-style: none;
  }
`

export default EstiloGlobal
