/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_ERROR,
  FETCH_SMURFS_SUCCESS
} from '../actions'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: true,
  error: ''
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      }
    case FETCH_SMURFS_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: ''
      }
    default:
      return state
  }
}

export default reducer