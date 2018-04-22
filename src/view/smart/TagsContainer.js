import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tags, selectedTags, selectedTagCount } from '../../state/selectors'
import { addSelectedTag, removeSelectedTag, clearSelectedTags } from '../../state/actions'
import TagsContainerView from '../dumb/TagsContainerView'

const mapStateToProps = (state, ownProps) => ({
  tags: tags(state),
  selectedTags: selectedTags(state),
  selectedTagCount: selectedTagCount(state),
})

const mapDispatchToProps = {
  addSelectedTag,
  removeSelectedTag,
  clearSelectedTags,
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsContainerView)
