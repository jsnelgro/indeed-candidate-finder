import React, { Component } from 'react'
import styled, { css } from 'styled-components'

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin: ${(p) => `${p.m || 0}`};
  }
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    padding: ${(p) => `${p.m || 0}`};
  }
`

export const raised = css`
  box-shadow: 0 3px 5px 2px hsla(0, 0%, 0%, 0.25);
`

export const borderRadius = css`
  border-radius: 3px;
`

export const horizontalScroll = css`
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
`

export const verticalScroll = css`
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
`

export const Chip = styled.div`
  box-shadow: 3px 3px 7px 0px hsla(218, 97%, 41%, 0.65);
  ${borderRadius};
  background-color: #085ff7;
  color: white;
  padding: 15px;
  margin: 0 10px 10px 0;
  font-size: 13px;
`

export const flexWrap = css`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
`

export const centerContents = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
