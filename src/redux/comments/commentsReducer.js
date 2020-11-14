import {
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    SEND_COMMENT_FAILURE,
    SEND_COMMENT_REQUEST,
    SEND_COMMENT_SUCCESS,
    FILTER_COMMENTS
} from './commentsTypes';
import {isEmpty} from 'lodash';

const initialState = {
    loading: false,
    sendCommentLoading: false,
    comments: [],
    filteredComments: [],
    errorMessage: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {...state, loading: true};
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.payload.comments,
                filteredComments: action.payload.comments
            };
        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                comments: [],
                filteredComments: [],
                errorMessage: action.payload.errorMessage
            };
        case FILTER_COMMENTS:
            let filteredComments = state.comments;
            const filterText = action.payload.filterText;
            if (!isEmpty(filterText)) {
                filteredComments = [];
                state.comments.forEach(comment => {
                    if ((comment.user && comment.user.email.toLowerCase().includes(filterText.toLowerCase())) || comment.message.toLowerCase().includes(filterText.toLowerCase())) filteredComments.push(comment);
                });
            }
            return {...state, filteredComments: filteredComments}
        case SEND_COMMENT_REQUEST:
            return {...state, sendCommentLoading: true};
        case SEND_COMMENT_SUCCESS:
            const comments = state.comments;
            comments.push(action.payload.comment);
            return {
                ...state,
                comments: comments,
                sendCommentLoading: false,
                filteredComments: comments
            };
        case SEND_COMMENT_FAILURE:
            return {...state, sendCommentLoading: false, errorMessage: action.errorMessage};
        default:
            return state;
    }
}

export default reducer
