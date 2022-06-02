import { Grid, TextField, Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../utils/windowDimention';
import classes from './SignUp.module.css';
import Logo from '../../assets/images/Logo.png';
import { toast } from 'react-toastify';
import api from '../../Api/publicApi';

const SignUp = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validation = async () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    if (!firstName) {
      toast.error('Please enter first name');
    } else if (!lastName) {
      toast.error('Please enter last name');
    } else if (!email) {
      toast.error('Please enter email');
    } else if (!emailRegex.test(email)) {
      toast.error('Please enter valid email');
    } else if (!phoneNumber) {
      toast.error('Please enter phone number');
    } else if (!companyName) {
      toast.error('Please enter company name');
    } else if (!createPassword) {
      toast.error('Please enter create password');
    } else if (createPassword.length < 8) {
      toast.error('Password length must be atleast 8 characters');
    } else if (!confirmPassword) {
      toast.error('Please enter confirm password');
    } else if (confirmPassword.length < 8) {
      toast.error('Confirm password length must be atleast 8 characters');
    } else if (createPassword !== confirmPassword) {
      toast.error('Confirm password do not match with password');
    } else {
      RegisterUser();
    }
  };

  const RegisterUser = async () => {
    setLoading(true);
    try {
      const username = firstName + ' ' + lastName;
      const data = {
        username,
        email,
        confirmed: true,
        blocked: false,
        Company: companyName,
        FirstName: firstName,
        LastName: lastName,
        password: confirmPassword,
        UserType: 'Client',
      };
      const response = await api.post(`/api/auth/local/register`, data);
      if (response.status === 200) {
        await toast.success('User registered successfully');
        await navigate('/signin');
      } else {
        await toast.error(response.error.message);
      }
    } catch (err) {
      toast.error(err.message);
      console.log({ ...err });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      {width <= 1024 && <img src={Logo} alt='Logo' className={classes.logo} />}
      <div className={classes.cardView}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type='text'
              label='First Name'
              className={classes.input}
              fullWidth
              sx={{ marginBottom: width <= 1024 ? '15px' : '25px' }}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type='text'
              label='Last Name'
              className={classes.input}
              fullWidth
              sx={{ marginBottom: width <= 1024 ? '15px' : '25px' }}
            />
          </Grid>
        </Grid>

        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          label='Email'
          className={classes.input}
          fullWidth
          sx={{ marginBottom: width <= 1024 ? '15px' : '25px' }}
        />

        <TextField
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type='number'
          label='Phone Number'
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 10);
          }}
          className={classes.input}
          fullWidth
          sx={{ marginBottom: width <= 1024 ? '15px' : '25px' }}
        />

        <TextField
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          type='text'
          label='Company Name'
          className={classes.input}
          fullWidth
          sx={{ marginBottom: width <= 1024 ? '15px' : '25px' }}
        />

        <Grid container spacing={2} columns={12}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              value={createPassword}
              onChange={(e) => setCreatePassword(e.target.value)}
              type='password'
              label='Create Password'
              className={classes.input}
              fullWidth
              sx={{ marginBottom: width <= 1024 ? '15px' : '25px' }}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type='password'
              label='Confirm Password'
              className={classes.input}
              fullWidth
              sx={{ marginBottom: width <= 1024 ? '15px' : '25px' }}
            />
          </Grid>
        </Grid>
        <Button
          className={classes.submit}
          disableRipple
          onClick={validation}
          disabled={
            !firstName ||
            !lastName ||
            !email ||
            !phoneNumber ||
            !companyName ||
            !createPassword ||
            !confirmPassword
          }
        >
          {loading ? (
            <CircularProgress
              size={width <= 1024 ? 20 : 25}
              color={'inherit'}
            />
          ) : (
            'Register'
          )}
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
