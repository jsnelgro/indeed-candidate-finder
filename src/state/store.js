import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers'

export const middleware = [thunk]
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
export default store
