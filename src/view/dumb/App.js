import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

export const baseStyles = () => injectGlobal`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    background: #efefef;
  }

  /* global styles */
  h1, h2, h3, h4, p, a, div, span, button {
    font-family: helvetica;
    color: #4c4c4c;
    font-size: 15px;
  }

  h1 {
    font-size: 21px;
  }
`

const AppLayout = styled.div`
  max-height: 100vh;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  & > div:first-child {
    height: 33%;
  }
  & > div:nth-child(2) {
    height: calc(100% - 33%);
    margin-top: 12px;
  }
`

const App = (props) => {
  baseStyles()
  return <AppLayout {...props} />
}

export default App
