import React from 'react';
import {Popup} from 'semantic-ui-react'
import {makeStyles} from "@material-ui/core/styles";
import {COLORS} from "../utills/constants/Colors";
import {formatDate} from "../utills/Helper";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: '20px 0 0 0',
        color: COLORS.PRIMARY_TEXT_COLOR
    },
    avatar: {
        width: '45px',
        height: '45px',
        margin: '0 10px 0  0',
        borderRadius: '4px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    message_content: {
        display: 'grid',
        justifyItems: 'left',
        fontSize: '18px',
        '& span': {
            color: COLORS.LIGHT_TEXT_COLOR
        }
    },
    avatar_popup: {
        padding: '5px',
        border: 'solid 1px ' + COLORS.PRIMARY_TEXT_COLOR,
        borderRadius: '4px',
        backgroundColor: '#fff'
    }
}));

export default function CommentComponent(props) {
    const comment = props.comment;
    const classes = useStyles();

    if (!comment) return <></>;
    return (<div className={classes.root}>
            <Popup
                on='click'
                trigger={<img alt="avatar"
                              src={comment.user ? (comment.user.avatar + '?s=45') : 'https://en.gravatar.com/avatar.jpg?s=45'}
                              className={classes.avatar}/>}
            >
                {comment.user ?
                    <div className={classes.avatar_popup}>
                        <Popup.Header>
                            <strong>{comment.user.email}</strong>
                        </Popup.Header>
                        <Popup.Content>
                            last comment on: {formatDate(comment.user.last_active)}
                        </Popup.Content>
                    </div> : null}
            </Popup>

            <div className={classes.message_content}>
                <strong>{comment.user ? comment.user.email : ''}</strong>
                <span>{comment.message}</span>
            </div>
        </div>
    );
}
