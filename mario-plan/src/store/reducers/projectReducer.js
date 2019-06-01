import { actionTypes } from '../actions/projectActions';

const initState = {
  projects: [
  ]
}

const projectReducer = (state=initState, action) => {
  switch(action.type) {
    case actionTypes.CREATE_PROJECT: {
      return state;
    }
    case actionTypes.CREATE_PROJECT_ERROR: {
      return state;
    }
    default: {
      return state;
    }
  }

}

export default projectReducer;