import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{padding: 0;
margin: 0;
box-sizing: border-box;}
`

export const Container = styled.div`
  display: grid;
  grid-template-rows: 224px auto;
  background-color: #dae7ff;
  max-width: 1024px;
  margin: 0 auto;
`

export default EstiloGlobal
