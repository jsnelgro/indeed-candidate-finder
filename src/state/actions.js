import sampleSize from 'lodash.samplesize'
import { tags as getTags } from './selectors'
import skills from './skills.json'
export const SET_ASYNC_REQUEST_STATUS = 'SET_ASYNC_REQUEST_STATUS'
export const NOOP = '__NOOP__'

export const SET_TAGS_REQUEST_STATUS = 'SET_TAGS_REQUEST_STATUS'
export const SET_TAGS = 'SET_TAGS'

export const SET_APPLICANTS_REQUEST_STATUS = 'SET_APPLICANTS_REQUEST_STATUS'
export const SET_APPLICANTS = 'SET_APPLICANTS'

export const ADD_SELECTED_TAG = 'ADD_SELECTED_TAG'
export const REMOVE_SELECTED_TAG = 'REMOVE_SELECTED_TAG'
export const CLEAR_SELECTED_TAGS = 'CLEAR_SELECTED_TAGS'

// async actions

export function initApp() {
  return async (...args) => {
    await loadTags()(...args)
    await loadApplicants()(...args)
  }
}

export function loadTags() {
  return async (dispatch) => {
    dispatch(setTagsRequestStatus('LOADING'))
    try {
      // const REQ_URL = 'http://api.dataatwork.org/v1/skills?offset=600&limit=200'
      // let res = await fetch(REQ_URL).then((r) => r.json())
      let res = skills
      dispatch(setTags(res.reduce((acc, job) => ({ ...acc, [job]: false }), {})))
      dispatch(setTagsRequestStatus('SUCCESS'))
    } catch (e) {
      dispatch(setTagsRequestStatus(e.message))
    }
  }
}

export function loadApplicants() {
  return async (dispatch, getState) => {
    let state = getState()
    dispatch(setApplicantsRequestStatus('LOADING'))
    try {
      const REQ_URL = 'https://randomuser.me/api/?results=50'
      let res = await fetch(REQ_URL).then((r) => r.json())

      // roll up results array into a hash and add some random tags
      res = res.results.map((applicant) => ({
        ...applicant,
        tags: sampleSize(Object.keys(getTags(state)), ~~(Math.random() * 10)),
      }))
      dispatch(setApplicants(res))
      dispatch(setApplicantsRequestStatus('SUCCESS'))
    } catch (e) {
      dispatch(setApplicantsRequestStatus(e.message))
    }
  }
}

// sync actions

export const noop = () => ({ type: NOOP })

export const setTagsRequestStatus = (status = '') => ({
  type: SET_TAGS_REQUEST_STATUS,
  val: status,
})

export const setTags = (tags = {}) => ({
  type: SET_TAGS,
  val: tags,
})

export const setApplicantsRequestStatus = (status = '') => ({
  type: SET_APPLICANTS_REQUEST_STATUS,
  val: status,
})

export const setApplicants = (applicants = {}) => ({
  type: SET_APPLICANTS,
  val: applicants,
})

export const addSelectedTag = (tagName = '') => ({
  type: ADD_SELECTED_TAG,
  val: tagName,
})

export const removeSelectedTag = (tagName = '') => ({
  type: REMOVE_SELECTED_TAG,
  val: tagName,
})

export const clearSelectedTags = () => ({
  type: CLEAR_SELECTED_TAGS,
})
