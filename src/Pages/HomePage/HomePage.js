import { useState } from 'react';
import Banner from './Banner/Banner';
import classes from './HomePage.module.css';
import commonClasses from '../../App.module.css';
import PageLoader from '../../Components/PageLoader/PageLoader';
import Problems from './Problems/Problems';
import FeatsAcheived from './FeatsAcheived/FeatsAcheived';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Services from './Services/Services';
import OurClients from './OurClients/OurClients';
import Testimonials from './Testimonials/Testimonials';

const HomePage = () => {

    const [ loading, setLoading ] = useState(false);

    return (
        <div className={`${classes.home}`}>
            { loading && <PageLoader/> }

            <section className={`${classes.banner} ${commonClasses.container}`}>
                <Banner setLoading = {setLoading}/>
            </section>

            <section className={classes.problems}>
                <Problems setLoading = {setLoading}/>
            </section>
            
            <section className={classes.generalSection}>
                <FeatsAcheived setLoading = {setLoading}/>
                <FeaturedProducts setLoading = {setLoading}/>
                <Services />
            </section>

            <section className={classes.clients}>
                <OurClients setLoading = {setLoading}/>
                <Testimonials setLoading = {setLoading}/>

            </section>
        </div>
    )
}

export default HomePage;