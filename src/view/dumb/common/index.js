import React, { Component } from 'react'
import styled, { css } from 'styled-components'

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const raised = css`
  box-shadow: 0 3px 5px 2px hsla(0, 0%, 0%, 0.25);
`

export const borderRadius = css`
  border-radius: 3px;
`

export const horizontalScroll = css`
  overflow-x: scroll;
`

export const verticalScroll = css`
  overflow-y: scroll;
`
