import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import classes from './NewsLetterForm.module.css';

const NewsLetterForm = () => {

    const [emailVal, setEmailVal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(emailVal);
    }

    return (
        <div>
            <TextField 
                value={emailVal}
                onChange={e => setEmailVal(e.target.value)}
                type="email" 
                label="Email" 
                className={classes.input} 
                variant="outlined" />

            <Button disableRipple onClick={handleSubmit}>Subscribe</Button>
        </div>
    )
}

export default NewsLetterForm;