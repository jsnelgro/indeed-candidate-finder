import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Col,
  Row,
  raised,
  borderRadius,
  horizontalScroll,
  verticalScroll,
} from './common/'
import { simplexMap, normalize } from 'jhs-utils'
import { forceSimulation, forceManyBody, forceCenter, forceCollide } from 'd3-force'
const noise = simplexMap('42')

const TagsContainer = styled.div`
  ${raised};
  ${horizontalScroll};
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  display: flex;
  align-items: center;
  justify-content: center;
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

const TagsGrid = () => {
  return (
    <div>
      <ClearTagsBtn onClick={clearSelectedTags}>{selectedTagCount}</ClearTagsBtn>
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
    </div>
  )
}

const SVGTag = ({ selected, name, removeSelectedTag, addSelectedTag, x, y, radius }) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle
        onClick={() => (selected ? removeSelectedTag(name) : addSelectedTag(name))}
        fill={selected ? '#478aef' : 'white'}
        r={radius}
        cx={0}
        cy={0}
      />
      <text>{name}</text>
    </g>
  )
}

const Canvas = styled.svg`
  height: 100%;
  width: 100%;
`

class ForceSimulation extends Component {
  static defaultProps = {
    height: 400,
    width: 400,
    nodes: [],
  }
  constructor(props) {
    super()
    this.state = { nodes: [], isMounted: false }
  }

  componentDidMount() {
    let { height, width, nodes } = this.props
    this.simulation = forceSimulation(nodes)
      .force('charge', forceManyBody().strength(5))
      .force('center', forceCenter(width / 2, height / 2))
      .force(
        'collision',
        forceCollide().radius(function(d) {
          return d.radius
        })
      )
      .on('tick', this.ticked)
    this.setState({ isMounted: true })
  }

  componentWillUnmount() {
    this.setState({ isMounted: false })
  }

  componentWillReceiveProps(nxtProps) {
    let simNodes = this.simulation.nodes()
    this.simulation.nodes(
      nxtProps.nodes.map((node, i) => {
        let existingNode = simNodes[i] || {}
        return { ...existingNode, ...node }
      })
    )
  }

  ticked = () => {
    if (this.state.isMounted) {
      this.setState({ nodes: this.simulation.nodes() })
    }
  }

  render() {
    const { height, width, addSelectedTag, removeSelectedTag } = this.props
    const { nodes } = this.state
    return (
      <Canvas {...{ height, width }}>
        {nodes.map((d) => {
          return <SVGTag {...{ ...d, key: d.index, addSelectedTag, removeSelectedTag }} />
        })}
      </Canvas>
    )
  }
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
      <ForceSimulation
        height={250}
        width={window.innerWidth}
        addSelectedTag={addSelectedTag}
        removeSelectedTag={removeSelectedTag}
        nodes={Object.keys(tags).map((name) => ({
          name,
          selected: tags[name],
          radius: 25,
        }))}
      />
    </TagsContainer>
  )
}

export default TagsContainerView
