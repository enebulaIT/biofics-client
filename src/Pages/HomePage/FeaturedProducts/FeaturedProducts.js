import { useEffect, useState } from "react";
import api from '../../../Api/publicApi';
import bgLeavesImage from '../../../assets/images/bgLeaves.png';
import classes from './FeaturedProducts.module.css';
import Button from '@mui/material/Button';

const FeaturedProducts = (props) => {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            props.setLoading(true);
            try {
                const response = await api.get(`/api/products?populate=*`);
                setProductData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                props.setLoading(false);
            }
        }
        fetchData();
    }, []);


    const generateProductItems = () => {
        const elements = [];
        productData.forEach((product, index) => {
            if (product?.attributes?.Featured) {
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
                            <div className={classes.description}>
                                {product.attributes.Excerpt}
                            </div>
                            <Button className={classes.action} disableRipple onClick={handleEnquire}>Enquire Now!</Button>
                        </div>

                        <div className={classes.imageContent}>
                            <div className={classes.imageWrapper}>
                                <img alt="product" src={`${product.attributes.Thumbnail_Image.data.attributes.url}`} />
                            </div>
                        </div>
                    </div >
                )
            }
        });
        return elements;
    }

    const handleEnquire = () => {
        console.log("Handle enquire in future");
    }

    const handleViewAll = () => {
        console.log("Handles View all products action");
    }

    if (productData?.length === 0) return null;

    return (
        <div className={classes.products}>
            {generateProductItems()}
            <Button className={classes.viewAll} disableRipple onClick={handleViewAll}>View All</Button>
        </div>
    )
}

export default FeaturedProducts;