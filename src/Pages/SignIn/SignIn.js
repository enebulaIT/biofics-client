import { Grid, TextField, Button, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIcon, LockLightIcon } from '../../assets/icons';
import useWindowDimensions from '../../utils/windowDimention';
import classes from './SignIn.module.css';
import Logo from '../../assets/images/Logo.png';
import { toast } from 'react-toastify';
import api from '../../Api/publicApi';

const SignIn = () => {
  const { width } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validation = async () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    if (!email) {
      toast.error('Please enter email');
    } else if (!emailRegex.test(email)) {
      toast.error('Please enter valid email');
    } else if (!password) {
      toast.error('Please enter create password');
    } else if (password.length < 8) {
      toast.error('Password length must be atleast 8 characters');
    } else {
      LoginUser();
    }
  };

  const LoginUser = async () => {
    let errMsg = '';
    setLoading(true);
    try {
      const data = {
        identifier: email,
        password: password,
      };
      const response = await api.post(`/api/auth/local?populate=*`, data);
      if (response.status === 200) {
        await localStorage.setItem('jwt', response?.data?.jwt);
        await toast.success('User logged in successfully');
        await navigate('/');
      }
    } catch (err) {
      errMsg = err?.response?.data?.error?.message || 'Something went wrong';
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      {width <= 1024 && <img src={Logo} alt='Logo' className={classes.logo} />}
      <div className={classes.cardView}>
        <div className={classes.inputView}>
          <UserIcon />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            label='Email'
            className={classes.input}
            fullWidth
            sx={{ color: '#B0B0B0' }}
          />
        </div>

        <div className={classes.inputView}>
          <LockLightIcon />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            label='Password'
            className={classes.input}
            fullWidth
          />
        </div>

        <p className={classes.forgotPassText}>Forgot Password?</p>
        <Button
          className={classes.submit}
          disableRipple
          onClick={validation}
          disabled={!email || !password}
        >
          {loading ? (
            <CircularProgress
              size={width <= 1024 ? 20 : 25}
              color={'inherit'}
            />
          ) : (
            'Login'
          )}
        </Button>
      </div>
      <p className={classes.newUserText} onClick={() => navigate('/signup')}>New User? Sign Up here!</p>
    </div>
  );
};

export default SignIn;
