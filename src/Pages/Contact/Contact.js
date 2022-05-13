import Hero from '../../Components/Hero/Hero';
import classes from './Contact.module.css';
import api from '../../Api/publicApi';
import { useEffect, useState, useRef } from 'react';
import PageLoader from '../../Components/PageLoader/PageLoader';
import { Button, TextField, Box, Grid } from '@mui/material';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from '../../assets/icons';
import { EMAIL, PHONE, SOCIAL_URLS } from '../../constants';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState('');
  const inputFile = useRef(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const onBrowserFileClick = () => {
    inputFile.current.click();
  };

  return (
    <div className={classes.container}>
      {loading && <PageLoader />}
      <div className={classes.contactPage}>
        <Hero title='Contact Us' />
      </div>
      <div className={classes.contactUsForm}>
        <div className={classes.questionnaire}>
          <div className={classes.getInTouch}>
            <h6 className={classes.title}>{'Get in touch'}</h6>
            <div className={classes.subTitle}>Lorem Ipsum, Lorem Ipsum</div>

            <div className={classes.commonInfo}>
              <PhoneIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.pitchus}>
        <h6 className={classes.title}>{'Pitch Us!'}</h6>
        <div className={classes.speechText}>Hello,</div>
        <div className={classes.speechText}>
          my name is *type your name* and my e-mail address is *type your email*
          and I would like to discuss about *type the details you want to
          discuss*.
        </div>
        <div className={classes.speechText}>Thanks!</div>

        <Button className={classes.submit} disableRipple onClick={() => {}}>
          Submit
        </Button>
      </div>

      <div className={classes.careers}>
        <h6 className={classes.title}>{'Careers'}</h6>
        <div className={classes.careerForm}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={12} spacing={24}>
              <Grid item xs={6}>
                <TextField
                  // value={emailVal}
                  // onChange={(e) => setEmailVal(e.target.value)}
                  type='email'
                  label='Email'
                  className={classes.input}
                  fullWidth
                  sx={{ marginTop: '35px' }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  // value={emailVal}
                  // onChange={(e) => setEmailVal(e.target.value)}
                  type='email'
                  label='Email'
                  className={classes.input}
                  fullWidth
                  sx={{ marginTop: '35px' }}
                />
              </Grid>
            </Grid>
          </Box>

          <TextField
            // value={emailVal}
            // onChange={(e) => setEmailVal(e.target.value)}
            type='email'
            label='Email'
            className={classes.input}
            inputProps={{}}
            fullWidth
            sx={{ marginTop: '35px' }}
          />

          <TextField
            // value={emailVal}
            // onChange={(e) => setEmailVal(e.target.value)}
            type='email'
            label='Email'
            className={classes.input}
            inputProps={{}}
            fullWidth
            sx={{ marginTop: '35px' }}
          />

          <div className={classes.attachment}>
            <div className={classes.attchText}>Attach Resume</div>
            <div
              className={classes.browseFile}
              onClick={() => onBrowserFileClick()}
            >
              Browse File
            </div>
            <div className={classes.docOrPdf}>Doc or Pdf*</div>

            <input
              id='fileInput'
              style={{ display: 'none' }}
              ref={inputFile}
              onChange={handleFileUpload}
              type='file'
              accept='image/gif, image/jpeg, image/png'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
