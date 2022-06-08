import { useEffect, useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import PageLoader from '../../Components/PageLoader/PageLoader';
import api from '../../Api/publicApi';
import SingleProduct from './SingleProduct/SingleProduct';
import classes from './Products.module.css';

const Products = () => {

    const [loading, setLoading] = useState(false);
    const [productsData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/products?populate=*`);
                setProductData(response.data.data);
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

        productsData.forEach((product, index) => {
            elements.push(
                <SingleProduct key = {product.id} productData = {product} productIndex = {index}/>
            );
        });

        return elements;
    }

    return (
        <div className={classes.container}>
            {loading && <PageLoader />}

            <div className={classes.banner}>
                <Hero bannerId = {3} />
            </div>

            <div className={`${classes.productsWrapper} ${classes.product_list}`}>
                {getProductElements()}
            </div>
        </div>
    )
}

export default Products;