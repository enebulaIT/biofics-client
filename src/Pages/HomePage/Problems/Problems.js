import classes from './Problems.module.css';
import commonClasses from '../../../App.module.css';
import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import api from '../../../Api/publicApi';

const Problems = (props) => {

    const [problemData, setProblemData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            props.setLoading(true);
            try {
                const response = await api.get(`/api/how-are-we-solving-the-problems?populate=*`);
                setProblemData(response.data.data);
            } catch (err) {
                console.log({ ...err });
            } finally {
                props.setLoading(false);
            }
        }
        fetchData();
    }, [])

    const generateProblemItems = () => {
        const elements = [];
        problemData.forEach(problem => {
            elements.push(
                <Grid item xs={2} sm={4} md={4} key={problem.id}>
                    <div className={classes.problemItem}>
                        <div className={classes.image}>
                            <img src = {`${process.env.REACT_APP_STRAPI_BASE_URL}${problem.attributes.Image.data.attributes.url}`} alt = "problem"/>
                        </div>

                        <div className={classes.text}>
                            <div className={classes.title}>
                                { problem.attributes.Title }   
                            </div>
                            <div className={classes.description}>
                                { problem.attributes.Description }   
                            </div>
                        </div>
                    </div>
                </Grid>
            )
        });
        return elements;
    }

    return (
        <div className={classes.problems}>
            <div className={commonClasses.pageTitle}>
                How are we solving the problem?
            </div>

            <Box className={classes.problemsContainer} sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    { generateProblemItems() }
                </Grid>
            </Box>
        </div>
    );
}

export default Problems;