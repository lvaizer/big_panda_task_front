import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import NewCommentComponent from "../components/NewCommentComponent";
import CommentsContainer from "../containers/CommentsContainer"
import {COLORS} from "../utills/constants/Colors";
import {useDispatch, useSelector} from "react-redux";
import {filterComments, sendComment, fetchComments} from "../redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '30vw',
        padding: '45px',
        backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR
    },
}));

export default function MainContainer() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const commentsState = useSelector(state => state.comments);

    useEffect(() => {
        dispatch(fetchComments());
    }, []);

    const handleFilter = filterText => dispatch(filterComments(filterText));
    const handleSendComment = comment => dispatch(sendComment(comment));

    return (<div className={classes.root}>
        <NewCommentComponent
            state={commentsState}
            handleSendComment={handleSendComment}/>
        <CommentsContainer handleFilter={handleFilter} state={commentsState}/>
    </div>);
}
