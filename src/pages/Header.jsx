import * as React from 'react';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {allListProfessor, lectures, login, registr} from "../utils/routes";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../App";
import logo from "../assets/logo.png";


function ResponsiveAppBar() {
    const { currentUser } = useContext(AuthContext)

    const pages = !currentUser ? [
        { name: 'All teachers', path: allListProfessor },
        { name: 'Login', path: login },
        { name: 'Sign Out', path: registr },
    ] : [
        { name: 'All teachers', path: allListProfessor },
    ]
    const settings = [{ name: 'Profile', path: '/student' }, { name: 'Dashboard', path: '/' }, { name: 'Logout', path: '/' }];

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        debugger
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        debugger
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (event, path) => {
        navigate(path, { replace: true })
        setAnchorElNav(null);
    };

<<<<<<< HEAD
    const handleCloseUserMenu = (event, path) => {
        navigate(path, {replace: true})
=======
    const handleCloseUserMenu = (path) => {
        navigate(path, { replace: true })
>>>>>>> c40cf55a3bedb16b20fd18858f9d6f50ac7dd0d3
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography 
                        className='mernTeam'                   
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        MERN TEAM
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.path)}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                className='mernTeam'
                                key={page.name}
                                onClick={(e) => handleCloseNavMenu(e, page.path)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                   
                    <Box>
                        {currentUser && <span className='user' >
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mt: 4,
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                {currentUser.name + ': ' + currentUser.role} 
                            </Typography>

                            <span className='userName' > </span> <span className='userRole' > </span></span>
                        }</Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                typeof setting === 'object' ? (
<<<<<<< HEAD
                                <MenuItem key={setting.name} onClick={(e) => handleCloseUserMenu(e, setting.path)}>
                                    <Typography textAlign="center">{setting.name}</Typography>
                                </MenuItem>
=======
                                    <MenuItem key={setting.name} onClick={() => handleCloseUserMenu(setting.path)}>
                                        <Typography textAlign="center">{setting.name}</Typography>
                                    </MenuItem>
>>>>>>> c40cf55a3bedb16b20fd18858f9d6f50ac7dd0d3
                                ) : (
                                    <MenuItem key={setting}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                )
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>

        </AppBar>

    );
}
export default ResponsiveAppBar;