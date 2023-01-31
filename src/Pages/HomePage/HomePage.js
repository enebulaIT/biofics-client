import { useState } from 'react';
import Banner from './Banner/Banner';
import classes from './HomePage.module.css';
import commonClasses from '../../App.module.css';
import PageLoader from '../../Components/PageLoader/PageLoader';
import ProductCategories from './ProductCategories/ProductCategories';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
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

            <section className={`${classes.generalSection} ${commonClasses.container}`}>
                <ProductCategories setLoading={setLoading} />
            </section>

            <section className={`${classes.generalSection}`}>
                <FeaturedProducts setLoading={setLoading} />
            </section>

            <section className={`${classes.clients}`}>
                <OurClients setLoading={setLoading} />
                <Testimonials setLoading={setLoading} />
            </section>


            <section className={`${classes.videoplayer} ${commonClasses.container}`}>
                <FeatsAcheived setLoading={setLoading} />
                <VideoPlayer/>
            </section>
            
        </div>
    )
}

export default HomePage;