import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { usersReducer } from './users/reducer';
import { postsReducer } from './posts/reducer';
import { commentsReducer } from './comments/reducer';

const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ),
)