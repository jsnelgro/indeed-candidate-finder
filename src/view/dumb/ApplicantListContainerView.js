import React, { Component } from 'react'
import styled from 'styled-components'
import { Avatar } from 'rebass'
import { Col, Row, raised, borderRadius, verticalScroll } from './common/'
import upperfirst from 'lodash.upperfirst'

const capitalize = (name) => {
  return name
    .split(' ')
    .map(upperfirst)
    .join(' ')
}

const ListContainer = styled.div`
  ${verticalScroll};
  padding: 20px;
`

const Card = styled.div`
  ${raised};
  ${borderRadius};
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 15px 0;
  & > div:first-child {
    align-items: center;
    flex: 0 0 33%;
    display: flex;
    h1 {
      color: green;
    }
    img {
      margin: 5%;
    }
  }

  & > div:last-child {
    flex-flow: row wrap;
    display: flex;
    background: indianred;
  }
`

const Chip = styled.div`
  ${raised};
  ${borderRadius};
`

const ApplicantListContainerView = ({ applicants }) => {
  return (
    <ListContainer>
      {applicants.map((a) => {
        return (
          <Card key={a.email}>
            <Col>
              <Avatar src={a.picture.large} />
              <h1>{capitalize(a.name.first)}</h1>
              <h1>{capitalize(a.name.last)}</h1>
            </Col>
            <Col>
              <Row>{a.tags.map((t) => <Chip key={t}>{t}</Chip>)}</Row>
            </Col>
          </Card>
        )
      })}
    </ListContainer>
  )
}

export default ApplicantListContainerView
