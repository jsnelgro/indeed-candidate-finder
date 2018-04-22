import { createSelector } from 'reselect'
import intersection from 'lodash.intersection'

export const tags = (state) => state.tags.data
export const selectedTags = (state) => state.selectedTags
export const applicants = (state) => state.applicants.data
export const filteredApplicants = createSelector(selectedTags, applicants, (selected, applicants) => {
  let res = Object.values(applicants).filter(
    (u) => intersection(selected, u.tags).length === Object.keys(selected).length
  )
  // debugger
  return res
})
export const selectedTagCount = (state) => Object.keys(state.selectedTags).length
