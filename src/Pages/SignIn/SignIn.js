import { Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { UserIcon, LockLightIcon } from '../../assets/icons';
import classes from './SignIn.module.css';

const SignIn = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className={classes.container}>
      <div className={classes.cardView}>
        <div className={classes.inputView}>
          <UserIcon />
          <TextField
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            type='text'
            label='Company Name'
            className={classes.input}
            fullWidth
            sx={{ color: '#B0B0B0' }}
          />
        </div>

        <div className={classes.inputView}>
          <LockLightIcon />
          <TextField
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
            type='text'
            label='Create Password'
            className={classes.input}
            fullWidth
          />
        </div>

        <p className={classes.forgotPassText}>Forgot Password?</p>
        <Button className={classes.submit} disableRipple onClick={() => {}}>
          Login
        </Button>
      </div>
      <p className={classes.newUserText}>New User? Sign Up here!</p>
    </div>
  );
};

export default SignIn;
