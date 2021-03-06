import produce from 'immer';

const initialState = {
  user: null,

  loginLoading: false,
  loginDone: false,
  loginError: null,
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const LIKE_LIST_REQUEST = 'LIKE_LIST_REQUEST';
export const UNLIKE_LIST_REQUEST = 'UNLIKE_LIST_REQUEST';

export const loginRequestAction = data => ({
  type: LOGIN_REQUEST,
  data,
});

export const logoutRequestAction = data => ({
  type: LOGOUT_REQUEST,
  data,
});

export const likeListRequestAction = data => ({
  type: LIKE_LIST_REQUEST,
  data,
});

export const unlikeListRequestAction = data => ({
  type: UNLIKE_LIST_REQUEST,
  data,
});

const reducer = (state=initialState, action) => produce(state, (draft) => {
  switch(action.type){
    case LOGIN_REQUEST:
      draft.loginLoading = true;
      draft.loginDone = false;
      draft.loginError = null;
      break;
    case LOGIN_SUCCESS:
      draft.user = {name: action.data, like: []};
      draft.loginLoading = false;
      draft.loginDone = true;
      draft.loginError = null;
      break;
    case LOGIN_FAILURE:
      draft.loginLoading = false;
      draft.loginDone = false;
      draft.loginError = action.error;
      break;
    case LOGOUT_REQUEST : 
      draft.loginLoading = false;
      draft.loginDone = true;
      draft.loginError = null;
      break;
    case LOGOUT_SUCCESS:
      draft.user = null;
      draft.loginLoading = false;
      draft.loginDone = false;
      draft.loginError = null;
      break;
    case LOGOUT_FAILURE: 
      draft.loginLoading = false;
      draft.loginDone = false;
      draft.loginError = action.error;
      break;
    case LIKE_LIST_REQUEST:
      draft.user.like.push(action.data);
      break;
    case UNLIKE_LIST_REQUEST:{
      draft.user.like = draft.user.like.filter(v => v !== action.data);
      break;
    }
    default:
      return state;
  }
});

export default reducer;