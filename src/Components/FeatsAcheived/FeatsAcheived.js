import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import api from '../../Api/publicApi';
import smallImg from '../../assets/images/featsImg.png';
import classes from './FeatsAcheived.module.css';

const FeatsAcheived = (props) => {

    const [featsData, setFeatsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            props.setLoading(true);
            try {
                const response = await api.get(`/api/feats`);
                setFeatsData(response?.data?.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                props.setLoading(false);
            }
        }
        fetchData();
    }, []);


    const getFeat = (id) => {
        const foundFeat = featsData?.find(feat => feat.id === id);
        return (
            <div className={classes.stat}>
                <div className={classes.number}>
                    {foundFeat?.attributes?.Value + (foundFeat?.attributes?.Unit ?? '')}
                </div>
                <div className={classes.description}>
                    {foundFeat?.attributes?.Title}
                </div>
            </div>
        )
    }


    return (
        <div className={classes.featsWrapper}>
            <Box sx={{ flexGrow: 1 , display: 'flex' }}>
                <Grid container spacing={2} columns={12}>
                    <Grid item md={4} xs={12}>
                        <div className={classes.feat}>
                            <div className={classes.icon}>
                                <img src={smallImg} alt="satisfied" />
                            </div>

                            {getFeat(1)}
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <div className={classes.feat}>
                            <div className={classes.icon}>
                                <img src={smallImg} alt="satisfied" />
                            </div>

                            {getFeat(2)}
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <div className={classes.feat}>
                            <div className={classes.icon}>
                                <img src={smallImg} alt="satisfied" />
                            </div>

                            {getFeat(3)}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default FeatsAcheived;