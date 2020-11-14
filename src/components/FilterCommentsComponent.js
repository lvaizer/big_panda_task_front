import React, {useState} from 'react';
import {TextField} from "@material-ui/core";
import {Search as SearchIcon} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {COLORS} from "../utills/constants/Colors";

const useStyles = makeStyles((theme) => ({
    root: {
        '& svg': {
            color: COLORS.HINT_TEXT_COLOR
        },
        '& .MuiTextField-root': {
            backgroundColor: '#fff',
            width: '100%',
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
}));

export default function FilterCommentsComponent(props) {
    const [filterInput, setFilterInput] = useState('');
    const classes = useStyles();

    const handleFilterInputChanged = e => {
        const inputText = e.target.value;
        setFilterInput(inputText);
        props.handleFilter && props.handleFilter(inputText)
    };

    return (<div className={classes.root}>
        <TextField InputProps={{
            startAdornment: <SearchIcon/>,
        }} type="text" variant="outlined" onChange={handleFilterInputChanged}
                   defaultValue={filterInput}/>
    </div>);
}
