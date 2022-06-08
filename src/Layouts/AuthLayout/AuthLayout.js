import { Outlet } from 'react-router-dom';
import classes from './AuthLayout.module.css';
import bgLeavesAuth from '../../assets/images/bgLeavesAuth.png';
import Logo from '../../assets/images/Logo.png';
import useWindowDimensions from '../../utils/windowDimention';

const AuthLayout = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={classes.container}>
      <div
        className={classes.col1}
        style={{
          backgroundImage: width <= 1024 && `url(${bgLeavesAuth})`,
        }}
      >
        <Outlet />
      </div>
      <div
        className={classes.col2}
        style={{
          backgroundImage: `url(${bgLeavesAuth})`,
        }}
      >
        <img src={Logo} alt='Logo' className={classes.logo} />
      </div>
    </div>
  );
};

export default AuthLayout;
