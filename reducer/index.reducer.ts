import { combineReducers } from 'redux'
import { userInfoReducer } from './user.reducers'

const allReducers = combineReducers({
  userInfoState: userInfoReducer
})

export default allReducers
