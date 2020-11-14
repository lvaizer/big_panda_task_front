import React from 'react';
import FilterCommentsComponent from "../components/FilterCommentsComponent";
import {isEmpty} from 'lodash';
import CommentComponent from "../components/CommentComponent";
import {makeStyles} from "@material-ui/core/styles";
import {CircularProgress as Loading} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px',
        backgroundColor: '#fff'
    }
}));

export default function CommentsContainer(props) {
    const state = props.state;
    const classes = useStyles();

    return (<div className={classes.root}>
        {state.loading ?
            <Loading/> :
            <>
                <FilterCommentsComponent handleFilter={props.handleFilter}/>
                <div>
                    {
                        isEmpty(state.filteredComments) ?
                            <div>
                                No comments<br/>Be the first one to comment
                            </div> :
                            state.filteredComments.map(comment =>
                                <CommentComponent key={comment._id} comment={comment}/>)
                    }
                </div>
            </>}
    </div>);
}
