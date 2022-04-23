import { useEffect, useState } from "react";
import api from '../../../Api/publicApi';
import classes from './Testimonials.module.css';

const Testimonials = (props) => {

    const [testimonailsData, setTestimonialsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            props.setLoading(true);
            try {
                const response = await api.get(`/api/testimonials?populate=*`);
                setTestimonialsData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                props.setLoading(false);
            }
        }
        fetchData();
    }, []);

    const generateTestimonialsItems = () => {
        const elements = [];
        testimonailsData.forEach(testimonial => {
            elements.push(
                <div key = {testimonial.id} className={classes.testimonail}>
                    <div className={classes.image}>
                        <img src = {`${process.env.REACT_APP_STRAPI_BASE_URL}${testimonial.attributes.Image.data.attributes.url}`}  alt = "testimonial"/>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.name}>
                            { testimonial.attributes.Name }
                        </div>

                        <div className={classes.description}>
                            { testimonial.attributes.Description }
                        </div>
                    </div>
                </div>
            )
        })
    }

    if(testimonailsData.length === 0) return null;


    return (
        <div className={classes.testimonails}>
            <div className={classes.textSection}>
                What they have<br /> to Say!
            </div>

            <div className={classes.testimonailsSection}>
                { generateTestimonialsItems() }
            </div>
        </div>
    )
}

export default Testimonials;