import { useEffect, useState } from 'react';
import Hero2 from '../../Components/Hero/Hero2';
import PageLoader from '../../Components/PageLoader/PageLoader';
import api from '../../Api/publicApi';
import SingleProduct from './SingleProduct/SingleProduct';
import classes from './ProductDetail.module.css';
import { useParams } from 'react-router-dom';
import defaultInnerBannerImg from '../../assets/images/defaultInnerBanner.jpg';


const ProductDetail = () => {
    const { id } = useParams();
      

    const [loading, setLoading] = useState(false);
    const [productsData, setProductData] = useState([]);
    const [subCatData, setSubCatData] = useState([]);

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

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/product-sub-categories/${id}?populate=*`);
                setSubCatData(response.data.data);
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
        const subCatDataShortData = subCatData?.attributes?.products?.data;
        const productIds = [];
        if(subCatDataShortData && subCatDataShortData?.length !== 0) {
            subCatDataShortData.forEach(data => productIds.push(data?.id))
        }

        productsData.forEach((product, index) => {
            if(productIds.includes(product?.id)) {
                elements.push(
                    <SingleProduct key={product.id} productData={product} productIndex={index} />
                );
                console.log('product', product)
            }
        });

        return elements;
    }

    return (
        <>
            <div className={classes.banner}>
                <Hero2 bannerData={{
                    Title: subCatData?.attributes?.Title,
                    image: defaultInnerBannerImg
                }} />
            </div>
            
            <div className={classes.container}>
                {loading && <PageLoader />}


                <div className={`${classes.productsWrapper} ${classes.product_list}`}>
                    {getProductElements()}
                </div>
            </div>
        </>
    )
}

export default ProductDetail;