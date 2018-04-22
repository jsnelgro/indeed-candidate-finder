import { createSelector } from 'reselect'
import intersection from 'lodash.intersection'

export const tags = (state) => state.tags.data
export const selectedTags = createSelector(tags, (tags) =>
  Object.keys(tags).reduce((acc, k) => {
    return tags[k] ? { ...acc, [k]: true } : { ...acc }
  }, {})
)
export const applicants = (state) => state.applicants.data
export const filteredApplicants = createSelector(
  selectedTags,
  applicants,
  (selected, applicants) => {
    let res = Object.values(applicants).filter(
      (u) =>
        intersection(Object.keys(selected), u.tags).length ===
        Object.keys(selected).length
    )
    return res
  }
)
export const selectedTagCount = createSelector(
  selectedTags,
  (selectedTags) => Object.keys(selectedTags).length
)
