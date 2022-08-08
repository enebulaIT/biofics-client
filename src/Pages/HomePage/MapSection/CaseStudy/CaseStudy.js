import React from 'react';
import commonClasses from '../../../../App.module.css';
import classes from './CaseStudy.module.css';
import { DoneIcon, TestIcon, RecycleIcon, CityIcon } from '../../../../assets/icons';

const CaseStudy = (props) => {
    const { selectedStateData } = props;

    console.log('selectedStateData', selectedStateData)
    return (
        <div>
            <div className={`${commonClasses.pageTitle} ${classes.title}`}>
                {selectedStateData?.StateName}
            </div>

            <div className={classes.oneliner}>
                {selectedStateData?.Achievement}
            </div>

            <div className={classes.majors}>
                <div className={classes.cities}>
                    Major Cities: {selectedStateData?.MajorCities}
                </div>

                <div className={classes.majorClients}>
                    Major Clients: {selectedStateData?.MajorClients}
                </div>

            </div>

            <div className={classes.stats}>

                <div className={classes.statsWrapper}>
                    <div className={classes.icon}>
                        <DoneIcon />
                    </div>

                    <div className={classes.stat}>
                        <div className={classes.number}>
                            {selectedStateData?.NumberOfProjects}
                        </div>

                        <div className={classes.text}>
                            NUMBER OF PROJECTS
                        </div>
                    </div>
                </div>

                <div className={classes.statsWrapper}>
                    <div className={classes.icon}>
                        <CityIcon />
                    </div>

                    <div className={classes.stat}>
                        <div className={classes.number}>
                            {selectedStateData?.NumberOfCities}
                        </div>

                        <div className={classes.text}>
                            NUMBER OF CITIES
                        </div>
                    </div>
                </div>

                <div className={classes.statsWrapper}>
                    <div className={classes.icon}>
                        <RecycleIcon />
                    </div>

                    <div className={classes.stat}>
                        <div className={classes.number}>
                            {selectedStateData?.WasteProcessingPerDay}
                        </div>

                        <div className={classes.text}>
                            WASTE PROCESSING/DAY
                        </div>
                    </div>
                </div>

                <div className={classes.statsWrapper}>
                    <div className={classes.icon}>
                        <TestIcon />
                    </div>

                    <div className={classes.stat}>
                        <div className={classes.number}>
                            {selectedStateData?.UpcommingNewProjects}
                        </div>

                        <div className={classes.text}>
                            UPCOMMING NEW PROJECTS
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default CaseStudy;