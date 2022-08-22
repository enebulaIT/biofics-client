import { useEffect, useState } from 'react';
import Hero2 from '../../Components/Hero/Hero2';
import PageLoader from '../../Components/PageLoader/PageLoader';
import api from '../../Api/publicApi';
import { useNavigate } from 'react-router-dom';
import bgLeavesImage from '../../assets/images/bgLeaves.png';
import defaultInnerBannerImg from '../../assets/images/defaultInnerBanner.jpg';
import { Button } from '@mui/material';
import classes from './MainProductsPage.module.css';



const MainProductsPage = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [catData, setCatData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/product-categories?populate=*`);
                setCatData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const generateProductItems = () => {
        const elements = [];
        catData.forEach((product, index) => {
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
                            {product.attributes.CategoryName}
                        </div>
                        <div className={classes.description} dangerouslySetInnerHTML = {{__html: product.attributes.Description}}>
                        </div>
                        <Button className={classes.action} disableRipple onClick={() => handleEnquire(product?.id)}>Read More</Button>
                    </div>

                    <div className={classes.imageContent}>
                        <img alt="product" src={`${product?.attributes?.Image?.data?.attributes?.url}`} />
                    </div>
                </div >
            )
        });
        return elements;
    }

    
    const handleEnquire = (id) => {
        navigate('/products/' + id);
    }

    return (
        <>
            <div className={classes.banner}>
                <Hero2 bannerData={{
                    Title: 'Products',
                    image: defaultInnerBannerImg
                }} />
            </div>
            
            <div className={classes.container}>
                {loading && <PageLoader />}


                <div className={`${classes.productsWrapper} ${classes.product_list}`}>
                    {generateProductItems()}
                </div>
            </div>
        </>
    )
}

export default MainProductsPage;