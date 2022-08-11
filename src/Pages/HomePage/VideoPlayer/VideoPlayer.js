import React from 'react';
import ReactPlayer from 'react-player';
import commonClasses from '../../../App.module.css';

const VideoPlayer = () => {
    return (
        <>
            <div className={commonClasses.pageTitle}>What we are?</div>
            <ReactPlayer style = {{marginTop: "100px"}} width="100%" height="80vh" url='https://www.youtube.com/watch?v=NUDKW6VrF9I' />
        </>
    )
}

export default VideoPlayer;
