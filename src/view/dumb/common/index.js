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

///////////////////////////
/** abandoned components */
///////////////////////////

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
