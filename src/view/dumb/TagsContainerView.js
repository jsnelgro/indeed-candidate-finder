import React, { Component } from 'react'
import styled from 'styled-components'
import { Fit } from 'reas'

const TagsContainer = styled.div`
  overflow-x: scroll;
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  color: white;
  display: flex;
`

const Tag = styled.div`
  height: 55px;
  width: 120px;
  background: ${(p) => (p.selected ? 'green' : 'white')}
  ${'' /* background: white; */}
  color: #4a4a4a;
  display: flex;
  justify-content; center;
  align-items: center;
`

const TagsContainerView = ({
  tags,
  selectedTags,
  selectedTagCount,
  addSelectedTag, // fn
  removeSelectedTag, // fn
  clearSelectedTags, // fn
}) => {
  return (
    <TagsContainer>
      {Object.keys(tags).map((k) => {
        return (
          <Tag
            selected={tags[k]}
            key={k}
            onClick={() => (tags[k] ? removeSelectedTag(k) : addSelectedTag(k))}
          >
            {k} {String(tags[k])}
          </Tag>
        )
      })}
    </TagsContainer>
  )
}

export default TagsContainerView
