import { Button, Menu, MenuItem, Drawer, Box, List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserIcon, HamburgerIcon } from '../../assets/icons';
import { nav } from '../../nav';
import classes from './RightSideBar.module.css';

const RightSideBar = (props) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


//   const onClickItem = (item) => {
//     navigate(item.to);
//     props.hide();
//   }

//   console.log('props.open', props.open)

  return (
    <div>
      <Drawer
        anchor={'right'}
        open={props.open}
        onClose={props.hide}
      >
        <Box
          sx={{ width: 220 }}
          role='presentation'
        //   onClick={props.hide}
        //   onKeyDown={props.hide}
        >
          <List>
            {nav.map((item, index) => (
              <ListItem key={item.id} onClick={(e) => {
                  navigate(item.to);
                  props.hide(e);
                  }}>
                  <ListItemText >{item.label}
                    {/* <Link to={item.to}>{item.label}</Link> */}
                  </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default RightSideBar;
