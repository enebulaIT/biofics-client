import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Logo from '../../../assets/images/Logo.png';
import classes from './FeaturedProducts.module.css';
import appClasses from '../../../App.module.css';


export default function FeaturedProduct(props) {
    const { productData } = props;
    console.log('productData', productData)
    const productImg = productData?.attributes?.Thumbnail_Image?.data?.attributes?.url || Logo;
    const productalt = productData?.attributes?.Thumbnail_Image?.data?.attributes?.alternativeText;
    return (
        <Card sx={{ maxWidth: 345, minHeight: 500, maxHeight: 500, margin: '0 auto' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="340"
                    image={productImg}
                    alt={productalt}
                />
                <CardContent>
                    <span className={classes.name} gutterBottom variant="h5" component="div">
                        {productData?.attributes?.Title}
                    </span>
                    {/* <Typography variant="body2" color="text.secondary" className={classes.desc}>
                        {productData?.attributes?.Short_product_description}
                    </Typography> */}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={appClasses.btn1}>
                    Details
                </Button>
            </CardActions>
        </Card>
    );
}