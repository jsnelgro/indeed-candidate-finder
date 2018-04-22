import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

export const baseStyles = () => injectGlobal`
  ${reset}
  /* other global styles */
`

const AppLayout = styled.div`
  & > div:first-child {
    position: fixed;
    top: 0;
    left: 0;
    height: 33vh;
    width: 100%;
  }
  & > div:nth-child(2) {
    margin-top: 33vh;
  }
`

const App = (props) => {
  baseStyles()
  return <AppLayout {...props} />
}

export default App
