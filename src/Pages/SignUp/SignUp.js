import { Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
import classes from './SignUp.module.css';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className={classes.container}>
      <div className={classes.cardView}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type='text'
              label='First Name'
              className={classes.input}
              fullWidth
              sx={{ marginBottom: '30px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type='text'
              label='Last Name'
              className={classes.input}
              fullWidth
              sx={{ marginBottom: '30px' }}
            />
          </Grid>
        </Grid>

        <TextField
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          type='text'
          label='Company Name'
          className={classes.input}
          fullWidth
          sx={{ marginBottom: '30px' }}
        />

        <TextField
          value={createPassword}
          onChange={(e) => setCreatePassword(e.target.value)}
          type='text'
          label='Create Password'
          className={classes.input}
          fullWidth
          sx={{ marginBottom: '30px' }}
        />

        <TextField
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type='text'
          label='Confirm Password'
          className={classes.input}
          fullWidth
          sx={{ marginBottom: '30px' }}
        />

        <Button className={classes.submit} disableRipple onClick={() => {}}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
