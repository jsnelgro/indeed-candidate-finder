import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filteredApplicants } from '../../state/selectors'

const mapStateToProps = (state, ownProps) => ({
  applicants: filteredApplicants(state),
})

class ApplicantListContainer extends Component {
  render() {
    return <div>{JSON.stringify(this.props)}</div>
  }
}

export default connect(mapStateToProps)(ApplicantListContainer)
