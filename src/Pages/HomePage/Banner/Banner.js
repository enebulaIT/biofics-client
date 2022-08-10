import { useEffect, useState } from 'react';
import api from '../../../Api/publicApi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './Banner.module.css';

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000
};


const Banner = (props) => {

    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            props.setLoading(true);
            try {
                const response = await api.get(`/api/banners?populate=*`);
                setBannerData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                props.setLoading(false);
            }
        }
        fetchData();
    }, [])

    const generateBannerItems = () => {
        const elements = [];

        bannerData.forEach(banner => {
            elements.push(
                // <div className={classes.item} key = {banner.id}>
                //     <div className={classes.itemWrapper}>
                //         <div className={classes.text}>
                //             <div className={classes.title}>
                //                 {banner.attributes.Title}
                //             </div>
                //             <div className={classes.description}>
                //                 {banner.attributes.Description}
                //             </div>
                //         </div>

                //         <div className={classes.image} style = {{
                //             backgroundImage: `url(${bgLeavesImage})`,
                //         }}>
                //             <div className={classes.imageWraper}>
                //                 <img src = {`${banner?.attributes?.BannerImage?.data?.attributes?.url}`}  alt = "banner"/>
                //             </div>
                //         </div>
                //     </div>
                // </div>

                <div className={classes.item} key={banner.id}>
                    <div className={classes.bannerImg} style={{ backgroundImage: `url(${banner?.attributes?.BackgroundImage?.data?.attributes?.url})` }}>

                        <div className={`${classes.itemWrapper} ${classes[banner.attributes.ProductImagePlacement]}`}>
                            <div className={classes.text}>
                                <div className={classes.title}>
                                    {banner.attributes.Title}
                                </div>
                                <div className={classes.description}>
                                    {banner.attributes.Description}
                                </div>
                            </div>

                            <div className={classes.image} >
                                <div className={classes.imageWraper}>
                                    <img src={`${banner?.attributes?.BannerImage?.data?.attributes?.url}`} alt="banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return elements;
    }

    if (bannerData.length === 0) return null;

    return (
        <div>
            <Slider {...settings}>
                {generateBannerItems()}
            </Slider>
        </div>
    )
}

export default Banner;