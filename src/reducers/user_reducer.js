import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SIGN_IN:
            return { ...state, auth: true };
        case types.SIGN_OUT:
            return { ...state, auth: false }
        default:
            return state;
    }
}
