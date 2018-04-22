import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tags, selectedTags, selectedTagCount } from '../../state/selectors'
import { addSelectedTag, removeSelectedTag, clearSelectedTags } from '../../state/actions'

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

class TagsContainer extends Component {
  render() {
    return <div>{JSON.stringify(this.props)}</div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsContainer)
