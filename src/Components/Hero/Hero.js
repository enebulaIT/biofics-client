import BgImage from '../../assets/images/bgBanner.png';
import bgLeavesImage from '../../assets/images/bgLeaves.png';
import classes from './Hero.module.css';

const heroStyle = {
    backgroundImage: `url(${BgImage})`
}

const Hero = props => {
    return (
        <div className={classes.hero} style={heroStyle}>
            <div className={classes.image} style={{
                backgroundImage: `url(${bgLeavesImage})`,
            }}>
                {props.title}
            </div>

            <div className={classes.description}>
                {props.description}
            </div>
        </div>
    )
}

export default Hero;