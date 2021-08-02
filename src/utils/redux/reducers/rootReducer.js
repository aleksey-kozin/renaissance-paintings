import { combineReducers } from 'redux'
import paintingsReducer from './paintingsReducer'

const rootReducer = combineReducers({
  paintings: paintingsReducer,
})

export default rootReducer
