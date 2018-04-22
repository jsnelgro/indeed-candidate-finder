import React, { Component } from 'react'
import { connect } from 'react-redux'
import App from '../dumb/App'
import TagsContainer from './TagsContainer'
import ApplicantListContainer from './ApplicantListContainer'
import { initApp } from '../../state/actions'
import { tags as tagsSelector, filteredApplicants } from '../../state/selectors'

const mapStateToProps = (state, ownProps) => ({
  tags: tagsSelector(state),
  applicants: filteredApplicants(state),
})

const mapDispatchToProps = {
  initApp,
}

export default connect(mapStateToProps, mapDispatchToProps)(
  class AppContainer extends Component {
    componentDidMount() {
      this.props.initApp()
    }
    render() {
      return (
        <App>
          <TagsContainer />
          <ApplicantListContainer />
        </App>
      )
    }
  }
)
