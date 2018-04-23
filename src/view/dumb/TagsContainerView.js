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
import { simplexMap, normalize } from 'jhs-utils'
import { forceSimulation, forceManyBody, forceCenter, forceCollide } from 'd3-force'
import throttle from 'lodash.throttle'
const noise = simplexMap('42')

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
      <TagsGrid
        {...{
          toggleSelected: (key) => {
            tags[key] ? removeSelectedTag(key) : addSelectedTag(key)
          },
          removeSelectedTag,
          addSelectedTag,
          clearSelectedTags,
          tags,
          selectedTagCount,
        }}
      />
    </TagsContainer>
  )
}

export default TagsContainerView

// {
//   /* <ForceSimulation
//   height={250}
//   width={window.innerWidth}
//   addSelectedTag={addSelectedTag}
//   removeSelectedTag={removeSelectedTag}
//   nodes={Object.keys(tags).map((name) => ({
//     name,
//     selected: tags[name],
//     radius: 25,
//   }))}
// /> */
// }

// const Canvas = styled.div`
//   height: 100%;
//   width: 100%;
// `

// const SVGTagStyled = styled.g`
//   & > circle {
//     fill: ${(p) => (p.selected ? '#1497ff' : '#085ff7')};
//   }

//   & > text {
//     fill: white;
//   }
// `

// const SVGTag = ({ selected, name, removeSelectedTag, addSelectedTag, x, y, radius }) => {
//   return (
//     <SVGTagStyled {...{ selected }} transform={`translate(${x}, ${y})`}>
//       <circle
//         onClick={() => (selected ? removeSelectedTag(name) : addSelectedTag(name))}
//         r={radius}
//         cx={0}
//         cy={0}
//       />
//       // height={radius}
//       // width={radius * 3}
//       // x={0}
//       // y={0}
//       <text x={0} y={0} textAnchor="middle">
//         {name}
//       </text>
//     </SVGTagStyled>
//   )
// }

// class ForceSimulation extends Component {
//   static defaultProps = {
//     height: 400,
//     width: 400,
//     nodes: [],
//   }
//   constructor(props) {
//     super()
//     this.state = { nodes: [], isMounted: false }
//   }

//   componentDidMount() {
//     let { height, width, nodes } = this.props
//     this.simulation = forceSimulation(nodes)
//       .force('charge', forceManyBody().strength(-5))
//       .force('center', forceCenter(width / 2, height / 2))
//       .force(
//         'collision',
//         forceCollide().radius(function(d) {
//           return d.radius
//         })
//       )
//       .on('tick', throttle(this.ticked, 1000))
//     this.setState({ isMounted: true })
//   }

//   componentWillUnmount() {
//     this.setState({ isMounted: false })
//   }

//   componentWillReceiveProps(nxtProps) {
//     let simNodes = this.simulation.nodes()
//     this.simulation.nodes(
//       nxtProps.nodes.map((node, i) => {
//         let existingNode = simNodes[i] || {}
//         return { ...existingNode, ...node }
//       })
//     )
//   }

//   ticked = () => {
//     console.log('tick')
//     if (this.state.isMounted) {
//       this.setState({ nodes: this.simulation.nodes() })
//     }
//   }

//   render() {
//     const { height, width, addSelectedTag, removeSelectedTag } = this.props
//     const { nodes } = this.state
//     return (
//       <Canvas>
//         {nodes.map((d) => {
//           return <Tag {...{ ...d, key: d.index, addSelectedTag, removeSelectedTag }} />
//         })}
//       </Canvas>
//     )
//   }
// }
