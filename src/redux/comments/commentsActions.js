import axios from 'axios';
import md5 from 'md5';
import {config} from '../../utills/config';
import {
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    SEND_COMMENT_REQUEST,
    SEND_COMMENT_SUCCESS,
    SEND_COMMENT_FAILURE,
    FILTER_COMMENTS
} from './commentsTypes';

const fetchCommentsRequest = () => {
    return {type: FETCH_COMMENTS_REQUEST};
}

const fetchCommentsSuccess = comments => {
    return {type: FETCH_COMMENTS_SUCCESS, payload: {comments: comments}};
}

const fetchCommentsFailure = errorMessage => {
    return {type: FETCH_COMMENTS_FAILURE, payload: {errorMessage: errorMessage}};
}


const sendCommentRequest = () => {
    return {type: SEND_COMMENT_REQUEST};
}

const sendCommentSuccess = comment => {
    return {type: SEND_COMMENT_SUCCESS, payload: {comment: comment}};
}

const sendCommentFailure = errorMessage => {
    return {type: SEND_COMMENT_FAILURE, payload: {errorMessage: errorMessage}};
}

export const filterComments = filterText => {
    return {type: FILTER_COMMENTS, payload: {filterText: filterText}}
}


export const fetchComments = () => {
    return (dispatch) => {
        dispatch(fetchCommentsRequest());
        axios.get(config.URLS.FETCH_COMMENTS)
            .then(response => {
                if (response.data.status) {
                    dispatch(fetchCommentsSuccess(response.data.data));
                } else {
                    dispatch(fetchCommentsFailure('error occurred please try again'));
                }
            })
            .catch(() => dispatch(fetchCommentsFailure('error occurred please try again')));
    }
}

export const sendComment = comment => {
    return (dispatch) => {
        dispatch(sendCommentRequest());
        axios.post(config.URLS.SEND_COMMENT, comment)
            .then(response => {
                if (response.data.status) {
                    comment._id = response.data.data;
                    comment.user.avatar = 'https://www.gravatar.com/avatar/' + md5(comment.user.email) + '.jpg'
                    dispatch(sendCommentSuccess(comment));
                } else {
                    dispatch(sendCommentFailure('error occurred please try again'));
                }
            })
            .catch(() => dispatch(sendCommentFailure('error occurred please try again')));
    }
}
