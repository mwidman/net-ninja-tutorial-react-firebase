import { actionTypes } from '../actions/authActions';

const initState = {
  authError: null,
}

const authReducer = (state=initState, action) => {
  switch(action.type) {
    case actionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        authError: null,
      };
    }
    case actionTypes.SIGNUP_ERROR: {
      return {
        ...state,
        authError: action.err.message,
      };
    }
    case actionTypes.LOGIN_SUCCESS: {
      console.log('login success');
      return {
        ...state,
        authError: null,
      };
    }
    case actionTypes.LOGIN_ERROR: {
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed',
      };
    }
    case actionTypes.LOGOUT_SUCCESS: {
      console.log('logout success');
      return state;
    }
    default: {
      return state;
    }
  }
}

export default authReducer;