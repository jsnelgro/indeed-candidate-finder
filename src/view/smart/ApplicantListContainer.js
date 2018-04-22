import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filteredApplicants } from '../../state/selectors'
import ApplicantListContainerView from '../dumb/ApplicantListContainerView'

const mapStateToProps = (state, ownProps) => ({
  applicants: filteredApplicants(state),
})

export default connect(mapStateToProps)(ApplicantListContainerView)
