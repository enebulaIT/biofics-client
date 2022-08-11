import { useState } from 'react';
import Banner from './Banner/Banner';
import classes from './HomePage.module.css';
import commonClasses from '../../App.module.css';
import PageLoader from '../../Components/PageLoader/PageLoader';
// import Problems from './Problems/Problems';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Services from './Services/Services';
import OurClients from './OurClients/OurClients';
import Testimonials from './Testimonials/Testimonials';
import FeatsAcheived from '../../Components/FeatsAcheived/FeatsAcheived';
import MapSection from './MapSection/MapSection';
import VideoPlayer from './VideoPlayer/VideoPlayer';

const HomePage = () => {

    const [loading, setLoading] = useState(false);

    return (
        <div className={`${classes.home}`}>
            {loading && <PageLoader />}

            <Banner setLoading={setLoading} />
            <section className={`${classes.banner} ${commonClasses.container}`}>
                <MapSection setLoading={setLoading} />
            </section>

            {/* <section className={classes.problems}>
                <Problems setLoading={setLoading} />
            </section> */}

            <section className={`${classes.generalSection} ${commonClasses.container}`}>
                <FeatsAcheived setLoading={setLoading} />
                <FeaturedProducts setLoading={setLoading} />
                <Services />
            </section>

            <section className={`${classes.clients}`}>
                <OurClients setLoading={setLoading} />
                <Testimonials setLoading={setLoading} />
            </section>


            <section className={`${classes.videoplayer} ${commonClasses.container}`}>
                <VideoPlayer/>
            </section>
        </div>
    )
}

export default HomePage;