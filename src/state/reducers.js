import { combineReducers } from 'redux'
import {
  SET_ASYNC_REQUEST_STATUS,
  SET_TAGS_REQUEST_STATUS,
  SET_TAGS,
  ADD_SELECTED_TAG,
  REMOVE_SELECTED_TAG,
  CLEAR_SELECTED_TAGS,
  SET_APPLICANTS_REQUEST_STATUS,
  SET_APPLICANTS,
  noop,
} from './actions'

//////////// helper reducers ////////////

function asyncReducer(reducer) {
  return (
    state = { status: 'UNATTEMPTED', data: reducer(undefined, noop()) },
    action
  ) => {
    switch (action.type) {
      case SET_ASYNC_REQUEST_STATUS:
        return { status: action.val, data: state.data }
      default:
        return { status: state.status, data: reducer(state.data, action) }
    }
  }
}

function hashReducer(state = {}, action) {
  switch (action.type) {
    case 'SET':
      return { ...action.val }
    case 'INSERT':
      return { ...state, [action.key]: action.val }
    case 'DELETE':
      let s = { ...state }
      delete s[action.key]
      return s
    case 'EMPTY':
      return {}
    default:
      return state
  }
}

const proxy = (proxyMap = {}) => (reducer) => (state, action) => {
  return reducer(state, { ...action, type: proxyMap[action.type] || action.type })
}

const xtend = (actionMap = {}) => (reducer) => (state, action) => {
  if (typeof actionMap[action.type] === 'function') {
    return actionMap[action.type](state, action)
  }
  return reducer(state, action)
}

//////////// app-level reducers ////////////

export const tags = proxy({
  [SET_TAGS_REQUEST_STATUS]: SET_ASYNC_REQUEST_STATUS,
  [SET_TAGS]: 'SET',
})(
  asyncReducer(
    xtend({
      [ADD_SELECTED_TAG]: (state, action) => ({ ...state, [action.val]: true }),
      [REMOVE_SELECTED_TAG]: (state, action) => ({ ...state, [action.val]: false }),
      [CLEAR_SELECTED_TAGS]: (state, action) => {
        return Object.keys(state).reduce((acc, key) => {
          return { ...acc, [key]: false }
        }, {})
      },
    })(hashReducer)
  )
)

export const selectedTags = proxy({
  [ADD_SELECTED_TAG]: 'INSERT',
  [REMOVE_SELECTED_TAG]: 'DELETE',
  [CLEAR_SELECTED_TAGS]: 'EMPTY',
})(hashReducer)

export const applicants = proxy({
  [SET_APPLICANTS_REQUEST_STATUS]: SET_ASYNC_REQUEST_STATUS,
  [SET_APPLICANTS]: 'SET',
})(asyncReducer(hashReducer))

export const rootReducer = combineReducers({
  tags,
  selectedTags,
  applicants,
})
export default rootReducer
