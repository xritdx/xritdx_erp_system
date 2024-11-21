import {Link} from 'react-router-dom'
import logo from '../../assets/images/fav.png'
import profilePhoto from '../../assets/profilePhoto/1.jpg'
import {Avatar, Button} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {MdMenuOpen, MdNotifications, MdMessage, MdLightMode, MdDarkMode} from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';

import Searchbar from "../Searchbar";
import './style.css'
import React, {useState} from 'react';
import { Logout, Person } from '@mui/icons-material';


const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null); // Profil menüsü
    const [notificationEl, setNotificationEl] = useState(null); // Bildirim menüsü
    const [messageEl, setMessageEl] = useState(null); // Bildirim menüsü
  
    const handleOpenMyAccBox = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccBox = () => {
      setAnchorEl(null);
    };
  
    const handleOpenNotificationBox = (event) => {
      setNotificationEl(event.currentTarget);
    };
    const handleCloseNotificationBox = () => {
        setNotificationEl(null);
    };
    const handleOpenMessageBox = (event) => {
        setMessageEl(event.currentTarget);
    };
    const handleCloseMessageBox = () => {
        setMessageEl(null);
    };
  
    return (
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="d-flex align-items-center justify-content-between">
            <div className="left">
              <div className="part1 d-flex align-items-center justify-content-between">
                <Link to="/dashboard" className="d-flex align-items-center logo gap-2">
                  <img src={logo} alt="logo" />
                  <span className="ml-2">ByteBlaze</span>
                </Link>
                <div className="part2">
                  <Button className="rounded-circle">
                    <MdMenuOpen />
                  </Button>
                </div>
              </div>
            </div>
            <div className="middle align-items-center">
              <Searchbar placeholder="Axtar..." />
            </div>
            <div className="right d-flex gap-3">
    
            <Button className="icon-button rounded-circle" onClick={handleOpenNotificationBox}>
                <MdNotifications />
              </Button>
              <Menu
                anchorEl={notificationEl}
                open={Boolean(notificationEl)}
                onClose={handleCloseNotificationBox}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <div className='head'>

                <span>Bildirişlər</span>
                <hr />
                </div>
                <MenuItem onClick={handleCloseNotificationBox}>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  Bildiriş
                </MenuItem>
              </Menu>

              <Button className="icon-button rounded-circle" onClick={handleOpenMessageBox}>
                <MdMessage />
              </Button>
              <Menu
                anchorEl={messageEl}
                open={Boolean(messageEl)}
                onClose={handleCloseMessageBox}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <div className='head'>

                <span>Mesajlar</span>
                <hr />

                </div>
                <MenuItem onClick={handleCloseMessageBox}>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  Mesajlar
                </MenuItem>
              </Menu>
  
              {/* Profil menüsü */}
              <Button className="d-flex align-items-center gap-2" onClick={handleOpenMyAccBox}>
                <img className="profile-photo rounded-circle" alt="profilePhoto" src={profilePhoto} />
                <div className="info">
                  <span className="fullname text-dark fw-bold">İlkin Quluzadə</span>
                  <span className="position text-muted">Developer</span>
                </div>
                <ArrowDropDownIcon />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMyAccBox}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleCloseMyAccBox}>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  Mənim hesabım
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccBox}>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  Parametrlər
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccBox}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  Çıxış
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    );
  };
export default Header