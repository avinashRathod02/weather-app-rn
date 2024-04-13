import {AnyAction, combineReducers} from 'redux'
import commonSlice from './slices/common'

export const RESET_STATE = 'RESET_STATE'

const appReducer = combineReducers({
  common: commonSlice
})

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === RESET_STATE) {
    state = {
      common: state.common
    }
  }

  return appReducer(state, action)
}

export default rootReducer
