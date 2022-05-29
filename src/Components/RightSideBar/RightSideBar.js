import { Drawer, Box, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { nav } from '../../nav';
import classes from './RightSideBar.module.css';
import Logo from '../../assets/images/Logo.png';

const RightSideBar = (props) => {
  const navigate = useNavigate();

  const onClickItem = (e, item) => {
      navigate(item.to);
      props.hide(e);
  }

  return (
    <div>
      <Drawer
        anchor={'right'}
        open={props.open}
        onClose={props.hide}
      >
        <Box
          sx={{ width: 230, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', marginLeft: '8px' }}
          role='presentation'
          // onClick={props.hide}
          onKeyDown={props.hide}
        >
          <div className={classes.logo}>
            <a href="/">
                <img src={Logo} alt="logo" />
            </a>
          </div>
          <List className={classes.list}>
            {nav.map((item, index) => (
              <ListItem className={classes.item} key={item.id} onClick={(e) => {onClickItem(e, item)}}>
                  <ListItemText className={classes.itemText}>{item.label}
                  </ListItemText>
              </ListItem>
            ))}
          </List>

          <div className={classes.bottomBar}>
            @2022 BIOFICS
        </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default RightSideBar;
