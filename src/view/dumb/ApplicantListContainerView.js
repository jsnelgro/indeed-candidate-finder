import React, { Component } from 'react'
import styled from 'styled-components'
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
  display: flex;
  flex-direction: column;
  padding: 5px 20px 20px 20px;
  background-color: #efefef;
`

const Card = styled.div`
  ${raised};
  ${borderRadius};
  font-family: helvetica
  width: 100%;
  margin: 15px 0;
  max-width: 700px;
  & > div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #d4d4d4;
    padding: 15px;
    background-color: white;

    & > div:first-child {
      img {
        border-radius: 5px;
        width: 65px;
        height: 65px;
        border: 2px solid #085ff7;
      }
    }
    & > div:last-child {
      padding-left: 15px;
      h1:first-child {
        color: #4c4c4c;
        font-size: 21px;
        padding-bottom: 8px;
      }
      h1 {
        color: #a7a6a6;
        font-size: 15px;
        padding-bottom: 5px;
      }
    }
  }

  & > div:last-child {
    background-color: #f7f7f7;
    padding: 15px 15px 5px 15px;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
  }
`

const Chip = styled.div`
  box-shadow: 3px 3px 7px 0px hsla(218, 97%, 41%, 0.65);
  ${borderRadius};
  background-color: #085ff7;
  color: white;
  padding: 15px;
  margin: 0 10px 10px 0;
  font-size: 13px;
`

const ApplicantListContainerView = ({ applicants }) => {
  return (
    <ListContainer>
      {applicants.map((a) => {
        return (
          <Card key={a.email}>
            <Col>
              <Col>
                <img src={a.picture.large} />
              </Col>
              <Col>
                <h1>{capitalize(a.name.first) + ' ' + capitalize(a.name.last)}</h1>
                <h1>{'E: ' + a.email}</h1>
                <h1>{'P: ' + a.phone}</h1>
              </Col>
            </Col>
            <Col>{a.tags.map((t) => <Chip key={t}>{t}</Chip>)}</Col>
          </Card>
        )
      })}
    </ListContainer>
  )
}

export default ApplicantListContainerView
