import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Col,
  Row,
  raised,
  borderRadius,
  horizontalScroll,
  verticalScroll,
  flexWrap,
  centerContents,
  Chip,
} from './common/'

const TagsContainer = styled.div`
  ${raised};
  ${verticalScroll};
  background: white;
  border: 25px solid white;
  padding: 20px 0;
  & > div {
    ${flexWrap};
  }
`

const Tag = styled(Chip)`
  cursor: pointer;
  background: ${(p) => (p.selected ? '#1497ff' : '#085ff7')};
  &:hover {
    background: ${(p) => (p.selected ? '#008cff' : '#528ffa')};
  }
`

const ClearTagsBtn = styled.div`
  ${borderRadius};
  ${centerContents};
  border: 1px solid #a7a6a6;
  height: 33px;
  width: 100px;
  font-size: 13px;
  cursor: pointer;
  background: white;
  &:hover {
  }
`

const TopRow = styled(Row)`
  ${raised};
  width: 100%;
  position: fixed;
  padding: 15px 25px;
  top: 0;
  left: 0;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  background: white;
`

const TagsRow = styled(Row)`
  margin-top: 55px;
  ${flexWrap};
  justify-content: space-between;
`

const TagsGrid = ({ tags, clearSelectedTags, selectedTagCount, toggleSelected }) => {
  return (
    <Col m={'10px'}>
      <TopRow>
        <h1>Candidate Finder 4000</h1>
        <ClearTagsBtn onClick={clearSelectedTags}>Reset</ClearTagsBtn>
      </TopRow>
      <TagsRow>
        {Object.keys(tags).map((k, i) => {
          return (
            <Tag selected={tags[k]} key={k} onClick={() => toggleSelected(k)}>
              {k}
            </Tag>
          )
        })}
      </TagsRow>
    </Col>
  )
}

const TagsContainerView = (props) => {
  return (
    <TagsContainer>
      <TagsGrid
        {...{
          ...props,
          toggleSelected: (key) => {
            props.tags[key] ? props.removeSelectedTag(key) : props.addSelectedTag(key)
          },
        }}
      />
    </TagsContainer>
  )
}

export default TagsContainerView
