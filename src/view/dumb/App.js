import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

export const baseStyles = () => injectGlobal`
  ${reset}
  /* other global styles */
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
  }
`

const App = (props) => {
  baseStyles()
  return <AppLayout {...props} />
}

export default App
