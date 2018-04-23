import { createSelector } from 'reselect'
import intersection from 'lodash.intersection'

export const tags = (state) => state.tags.data

export const selectedTags = createSelector(tags, (tags) =>
  Object.keys(tags).reduce((acc, k) => {
    return tags[k] ? { ...acc, [k]: true } : { ...acc }
  }, {})
)

export const applicants = (state) => state.applicants.data
export const applicantsLoadingStatus = (state) => state.applicants.status

export const filteredApplicants = createSelector(
  selectedTags,
  applicants,
  (selectedTags, applicants) => {
    let res = applicants.filter(
      (u) =>
        intersection(Object.keys(selectedTags), u.tags).length ===
        Object.keys(selectedTags).length
    )
    return res
  }
)

export const selectedTagCount = createSelector(
  selectedTags,
  (selectedTags) => Object.keys(selectedTags).length
)
