import * as ActionTypes from './ActionTypes';

export const reducerImages = (state = {
    zoomed: false
}, action) => {
    switch (action.type) {
        case ActionTypes.SETZOOMSTATE:
            return { ...state, zoomed: true };
        default:
            return state;
    }
};