import Hero from '../../Components/Hero/Hero';
import classes from './About.module.css';
import api from '../../Api/publicApi';
import { useEffect, useState } from 'react';
import PageLoader from '../../Components/PageLoader/PageLoader';
import FeatsAcheived from '../../Components/FeatsAcheived/FeatsAcheived';
import OurTeam from '../../Components/OurTeam/OurTeam';

const About = () => {
    
    const [aboutPageContent, setAboutPageContent] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/about-content?populate=*`);
                setAboutPageContent(response?.data?.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    console.log('aboutPageContent', aboutPageContent?.attributes?.WhoWeAre?.Content)

    return (
        <div className={classes.container}>
            { loading && <PageLoader/> }

            <div className={classes.aboutPage}>
                <Hero title= "About Biofics" description = "Adaptation of Green India"/>
                
                <div className={classes.whoweare}>
                    <div className={classes.text} dangerouslySetInnerHTML = {{__html: aboutPageContent?.attributes?.WhoWeAre?.Content}}>
                        
                    </div>

                    <div className={classes.image}>

                    </div>
                </div>

                <div className={classes.mission}>
                    
                </div>

                <div className={classes.vision}>

                </div>

                <FeatsAcheived setLoading ={setLoading}/>

                <OurTeam/>
            </div>

        </div>
    )
}

export default About;