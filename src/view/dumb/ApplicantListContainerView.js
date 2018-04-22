import React, { Component } from 'react'
import styled from 'styled-components'
import { Avatar } from 'rebass'
import upperfirst from 'lodash.upperfirst'

const capitalize = (name) => {
  return name
    .split(' ')
    .map(upperfirst)
    .join(' ')
}

const Card = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 100%;
  box-shadow: 0 3px 5px 2px hsla(0, 0%, 0%, 0.25);
  margin: 2%;
  img {
    margin: 5%;
  }
`

const ListContainer = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ApplicantListContainerView = ({ applicants }) => {
  return (
    <ListContainer>
      {applicants.map((a) => {
        return (
          <Card key={a.email}>
            <Avatar size={'25%'} src={a.picture.large} />
            <h1>{capitalize(`${a.name.first} ${a.name.last}`)}</h1>
          </Card>
        )
      })}
    </ListContainer>
  )
}

export default ApplicantListContainerView
