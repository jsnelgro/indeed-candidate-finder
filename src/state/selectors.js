import { createSelector } from 'reselect'
import intersection from 'lodash.intersection'

export const tags = (state) => state.tags.data
export const selectedTags = createSelector((state) => state.selectedTags)
export const applicants = createSelector((state) => state.applicants.data)
export const filteredApplicants = createSelector(selectedTags, applicants, (tags, applicants) =>
  applicants.filter((u) => intersection(tags, u.tags).reduce((acc, t, i) => acc && t === tags[i]))
)
export const selectedTagCount = createSelector((state) => Object.keys(state.selectedTags).length)
