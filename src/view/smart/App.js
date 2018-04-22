import React, { Component } from 'react'
import { connect } from 'react-redux'
import App from '../dumb/App'
import { initApp } from '../../state/actions'

const mapStateToProps = (state, ownProps) => ({
  tags: state.tags,
})

const mapDispatchToProps = {
  initApp,
}

export default connect(mapStateToProps, mapDispatchToProps)(
  class AppController extends Component {
    componentDidMount() {
      this.props.initApp()
    }
    render() {
      return <App {...this.props} />
    }
  }
)
