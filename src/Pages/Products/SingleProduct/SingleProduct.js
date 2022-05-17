import Slider from "react-slick";
import classes from './SingleProduct.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const SingleProduct = (props) => {
    const { productData } = props;

    const [productImages, setProductImages] = useState([]);

    const settings = {
        customPaging: function (i) {
            const imgSrc = productImages[i]?.attributes?.url;
            return (
                <a className={classes.smallImage}>
                    <img src={`${process.env.REACT_APP_STRAPI_BASE_URL}${imgSrc}`} alt="product" />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots product-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    useEffect(() => {
        const images = [productData?.attributes?.Thumbnail_Image?.data, ...productData?.attributes?.Gallery_Image?.data];
        setProductImages(images)
    }, []);

    const getImageElements = () => {
        const elements = [];

        productImages.forEach(image => {
            elements.push(
                <div className={classes.item} key={image?.id}>
                    <img src={`${process.env.REACT_APP_STRAPI_BASE_URL}${image?.attributes?.url}`} alt="product" />
                </div>
            )
        })

        return elements
    }

    return (
        <div className={classes.product}>
            <div className={classes.imagesContainer}>
                <Slider {...settings}>
                    {getImageElements()}
                </Slider>
            </div>


            <div className={classes.textContainer}>

            </div>
        </div>
    )
}

export default SingleProduct;