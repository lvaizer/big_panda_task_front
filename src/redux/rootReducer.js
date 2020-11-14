import {combineReducers} from "redux";
import CommentsReducer from './comments/commentsReducer';

const rootReducer = combineReducers({comments: CommentsReducer});

export default rootReducer;
