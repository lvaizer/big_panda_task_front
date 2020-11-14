import React, {useState} from 'react';
import {isEmpty} from 'lodash';
import {makeStyles} from '@material-ui/core/styles';
import {COLORS} from '../utills/constants/Colors'
import {TextField, Button, CircularProgress as Loading} from "@material-ui/core";
import {isEmail} from "../utills/Helper";

const useStyles = makeStyles(() => ({
    root: {
        padding: '20px',
        display: 'grid',
        backgroundColor: COLORS.SECONDARY_BACKGROUND_COLOR,
        '& > *': {
            margin: '0 0 20px 0',
            '&:last-child': {
                margin: 0
            }
        },
        '& label.Mui-focused': {
            color: COLORS.SECONDARY_TEXT_COLOR,
        },
        '& .MuiTextField-root': {
            backgroundColor: '#fff'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: 0,
                borderColor: COLORS.INPUT_BORDER_COLOR,
            },
            '&:hover fieldset': {
                borderColor: COLORS.INPUT_BORDER_COLOR,
            },
            '&.Mui-focused fieldset': {
                borderColor: COLORS.INPUT_BORDER_COLOR,
            },
        }
    },
    submit_button: {
        float: 'right',
        backgroundColor: COLORS.SUBMIT_BUTTON_BACKGROUND_COLOR,
        color: '#fff',
        '&:hover': {
            backgroundColor: COLORS.SUBMIT_BUTTON_ACTIVE_BACKGROUND_COLOR
        }
    },
    loading: {float: 'right'}
}));

export default function NewCommentComponent(props) {
    const state = props.state;
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const classes = useStyles();

    const handleSubmitClicked = () => {
        //check for inputs before sending
        if (!inputsCheck()) {
            showErrorMessage('Please type valid Email and message');
            return;
        }
        const comment = createCommentFromInputs();
        props.handleSendComment && props.handleSendComment(comment);
        showSuccessMessage('comment added successfully');
        clearInputs();
    }

    const clearInputs = () => {
        setEmail('');
        setMessage('');
    }

    const createCommentFromInputs = () => {
        return {message: message, user: {email: email, last_active: new Date()}};
    }

    const showErrorMessage = (message) => alert(message);

    const showSuccessMessage = (message) => alert(message);

    const inputsCheck = () => !isEmpty(email) && isEmail(email) && !isEmpty(message);

    const handleEmailChanged = e => setEmail(e.target.value);

    const handleMessageChanged = e => setMessage(e.target.value);

    return (<div className={classes.root}>
        <TextField label="Email" type="email" variant="outlined" onChange={handleEmailChanged}
                   value={email}/>
        <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            variant="outlined"
            rows={4}
            onChange={handleMessageChanged}
            value={message}
        />
        <div>
            {state && state.loading ? <Loading className={classes.loading}/> :
                <Button onClick={handleSubmitClicked} className={classes.submit_button}
                        variant="contained" disableElevation>
                    submit
                </Button>}
        </div>
    </div>);
}
