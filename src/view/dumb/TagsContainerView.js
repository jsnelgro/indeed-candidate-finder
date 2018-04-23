import React, { Component } from 'react'
import styled from 'styled-components'
import { Fit } from 'reas'
import { Col, Row, raised, borderRadius, horizontalScroll } from './common/'
import { simplexMap, normalize } from 'jhs-utils'
const noise = simplexMap('42')

const TagsContainer = styled.div`
  ${raised};
  ${horizontalScroll};
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  overflow-x: scroll;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
`

const Tag = styled.div`
  ${
    '' /* position: absolute;
  top: ${(p) => p.y * 15 + 55}px;
  left: ${(p) => p.x * 15 + 120}px; */
  }

  height: 55px;
  width: 120px;
  background: ${(p) => (p.selected ? 'green' : 'white')}
  color: #4a4a4a;
  display: flex;
  justify-content; center;
  align-items: center;
`

const ClearTagsBtn = styled.button``

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
      {/* <ClearTagsBtn onClick={clearSelectedTags}>{selectedTagCount}</ClearTagsBtn> */}
      {Object.keys(tags).map((k, i) => {
        return (
          <Tag
            x={normalize(-1, 1, noise(i * 2, i * 3))}
            y={normalize(-1, 1, noise(i * 4, i * 5))}
            selected={tags[k]}
            key={k}
            onClick={() => (tags[k] ? removeSelectedTag(k) : addSelectedTag(k))}
          >
            {k}
          </Tag>
        )
      })}
    </TagsContainer>
  )
}

export default TagsContainerView
