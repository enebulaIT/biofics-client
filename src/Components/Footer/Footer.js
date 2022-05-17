import { Grid } from "@mui/material";
import Logo from '../../assets/images/Logo.png';
import Cert1 from '../../assets/images/cert1.png';
import Cert2 from '../../assets/images/cert2.png';
import classes from './Footer.module.css';
import { nav } from "../../nav";
import { Link } from "react-router-dom";
import NewsLetterForm from '../../Components/NewsLetterForm/NewsLetterForm';
import bgImage from '../../assets/images/bgFooter.png';
import commonClasses from '../../App.module.css';

const styles = {
    backgroundImage: `url(${bgImage})`
}

const Footer = () => {

    const generateMenu = () => {
        return nav.map(link => {
            return <Link key={link.id} to={link.to}>{link.label}</Link>
        })
    }

    return (
        <div className={`${classes.footer} ${commonClasses.container}`} style = {styles}>
            <div className={classes.footerWrapper}>
                <Grid container spacing={2}>
                    <Grid item md={3} sm={12} xs={12}>
                        <div className={classes.logo}>
                            <a href="/">
                                <img src={Logo} alt="Logo" />
                            </a>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                        <div className={classes.column}>
                            <div className={classes.title}>
                                Cert./Logos
                            </div>

                            <div className={classes.certs}>
                                <div>
                                    <img src={Cert1} alt="certificate" />
                                </div>

                                <div>
                                    <img src={Cert2} className={classes.bulb} alt="certificate" />
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                        <div className={classes.column}>
                            <div className={classes.title}>
                                Useful Links
                            </div>

                            <div className={classes.nav}>
                                {generateMenu()}
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                        <div className={`${classes.column} ${classes.form}`}>
                            <div className={classes.title}>
                                NewsLetter
                            </div>

                            <div className={classes.newsletterForm}>
                                <NewsLetterForm />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;