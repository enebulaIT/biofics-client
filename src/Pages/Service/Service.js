import { useEffect, useState } from 'react';
import PageLoader from '../../Components/PageLoader/PageLoader';
import api from '../../Api/publicApi';
import classes from './Service.module.css';
import Hero2 from '../../Components/Hero/Hero2';
import defaultInnerBannerImg from '../../assets/images/defaultInnerBanner.jpg';
import bgLeavesImage from '../../assets/images/bgLeaves.png';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const Service = () => {

    const [loading, setLoading] = useState(false);
    const [serviceData, setServiceData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/service-categories?populate=*`);
                setServiceData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleEnquire = (id) => {
        navigate('/service/' + id);
    }

    const getProductElements = () => {
        const elements = [];
        serviceData.forEach((product, index) => {
            let dynamicClass = '';
            if (index % 2 === 0) dynamicClass = 'right';
            else dynamicClass = 'left'
            elements.push(
                <div style={{
                    backgroundImage: `url(${bgLeavesImage})`
                }
                } className={`${classes.singleProduct} ${classes[dynamicClass]}`}>
                    <div className={classes.textContent}>
                        <div className={classes.title}>
                            {product.attributes.Title}
                        </div>
                        <div className={classes.description} dangerouslySetInnerHTML = {{__html: product.attributes.Excerpt}}>
                        </div>
                        <Button className={classes.action} disableRipple onClick={() => handleEnquire(product?.id)}>Read More</Button>
                    </div>

                    <div className={classes.imageContent}>
                        <img alt="product" src={`${product?.attributes?.Thumbnail_Image?.data?.attributes?.url}`} />
                    </div>
                </div >
            )
        });
        return elements;
    }

    return (
        <>
            <div className={classes.banner}>
                <Hero2 bannerData={{
                    Title: "Services",
                    image: defaultInnerBannerImg
                }} />
            </div>
            <div className={classes.container}>
                {loading && <PageLoader />}

                <div className={`${classes.productsWrapper} ${classes.service_list}`}>
                    {getProductElements()}
                </div>
            </div>
        </>
    )
}

export default Service;