import { useEffect, useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import PageLoader from '../../Components/PageLoader/PageLoader';
import api from '../../Api/publicApi';
import SingleService from './SingleService/SingleService';
import classes from './Service.module.css';

const Service = () => {

    const [loading, setLoading] = useState(false);
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/services?populate=*`);
                setServiceData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const getProductElements = () => {
        const elements = [];

        serviceData.forEach((service, index) => {
            elements.push(
                <SingleService key = {service.id} serviceData = {service} productIndex = {index}/>
            );
        });

        return elements;
    }

    return (
        <div className={classes.container}>
            {loading && <PageLoader />}

            <div className={classes.banner}>
                <Hero title='Our Services' />
            </div>

            <div className={`${classes.productsWrapper} ${classes.service_list}`}>
                {getProductElements()}
            </div>
        </div>
    )
}

export default Service;