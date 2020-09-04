import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducerImages } from './reducerImages'
// import { dishes } from './dishes';
// import { comments } from './comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reducerImages
            // comments,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}