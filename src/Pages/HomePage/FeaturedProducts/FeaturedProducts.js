import { useEffect, useState } from "react";
import api from '../../../Api/publicApi';
import { useNavigate } from 'react-router-dom';
import bgLeavesImage from '../../../assets/images/bgLeaves.png';
import classes from './FeaturedProducts.module.css';
import Button from '@mui/material/Button';

const FeaturedProducts = (props) => {
    const navigate = useNavigate();

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            props.setLoading(true);
            try {
                const response = await api.get(`/api/product-categories?populate=*`);
                setProductData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                props.setLoading(false);
            }
        }
        fetchData();
    }, []);

    console.log('productData', productData)


    const generateProductItems = () => {
        const elements = [];
        productData.forEach((product, index) => {
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

    // const handleViewAll = () => {
    //     console.log("Handles View all products action");
    // }

    if (productData?.length === 0) return null;

    return (
        <div className={classes.products}>
            {generateProductItems()}
            {/* <Button className={classes.viewAll} disableRipple onClick={handleViewAll}>View All</Button> */}
        </div>
    )
}

export default FeaturedProducts;