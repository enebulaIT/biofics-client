import { useEffect, useState } from 'react';
import api from '../../../Api/publicApi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './OurClients.module.css';
import commonClasses from '../../../App.module.css';
import useWindowDimensions from '../../../utils/windowDimention';

const OurClients = (props) => {
  const [clientsData, setClientsData] = useState([]);
  const { width } = useWindowDimensions();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: width <= 600 ? 1 : 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    const fetchData = async () => {
      props.setLoading(true);
      try {
        const response = await api.get(`/api/clients?populate=*`);
        setClientsData(response.data.data);
      } catch (err) {
        console.log({ ...err });
      } finally {
        props.setLoading(false);
      }
    };
    fetchData();
  }, []);

  const generateClientsItems = () => {
    const elements = [];
    clientsData.forEach((client) => {
      elements.push(
        <div className={classes.item} key={client.id}>
          <img
            src={`${process.env.REACT_APP_STRAPI_BASE_URL}${client.attributes.Logo.data.attributes.url}`}
            alt='client'
          />
        </div>
      );
    });

    return elements;
  };

  if (clientsData.length === 0) return null;

  return (
    <div className={classes.clients}>
      <div className={commonClasses.pageTitle}>Our Clients</div>

      <div className={classes.clientWrapper}>
        <Slider {...settings}>{generateClientsItems()}</Slider>
      </div>
    </div>
  );
};

export default OurClients;
