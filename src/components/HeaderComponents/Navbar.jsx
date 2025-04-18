import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, useLocation, useNavigate } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Tooltip, IconButton, Avatar } from '@mui/material';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import '../../Navbar.css';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '23ch',
        },
    },
}));

function NavBar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    let navigate = useNavigate()

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const location = useLocation();

    return (
        <>
            <Toolbar position="static" sx={{ width: '100%' }}>
                <Container sx={{ backgroundColor: "white", display: "inline-block" }} maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} disableGutters >
                        <Typography
                            variant="h6"
                            component="a"
                            onClick={() => { navigate('/') }}
                            sx={{
                                mr: 2,
                                display: { md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            Exclusive
                        </Typography>
                        <Box sx={{ flexGrow: 0, gap: 3, display: { xs: 'none', md: 'flex' } }}>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
                                sx={{ my: 2, color: 'black', display: 'block' }}                     
                                
                            >
                                Home
                            </NavLink>
                            <NavLink
                              className={({ isActive }) => (isActive ? 'active-link' : 'link')}
                                  to='/contact'
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                Contact
                            </NavLink>
                            <NavLink
                             className={({ isActive }) => (isActive ? 'active-link' : 'link')}
                                  to='/about'
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                About
                            </NavLink>
                            <NavLink
                             className={({ isActive }) => (isActive ? 'active-link' : 'link')}
                                  to='/signup'
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                Sign-Up
                            </NavLink>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 5 }}>
                            <Search sx={{ backgroundColor: 'rgb(248 241 241)', color: 'black' }} >
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="What are you looking for?"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>

                            <IconButton onClick={() => navigate("/wishlist")}
                                sx={{ color: "black", "&:hover": { backgroundColor: "#e0e0e0" } }}>
                                <FavoriteBorderOutlinedIcon />
                            </IconButton>

                            <IconButton onClick={() => navigate("/cart")} sx={{ color: "black", "&:hover": { backgroundColor: "#e0e0e0" } }}>
                                <ShoppingCartOutlinedIcon />
                            </IconButton>
                        </Box>


                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar sx={{ color: 'white', backgroundColor: 'black' }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                                <MenuItem sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }} disableRipple>
                                    <Button sx={{ p: 1, color: 'inherit' }} onClick={() => navigate("/profile")}>Profile</Button>
                                    <Button sx={{ p: 1, color: 'inherit' }} onClick={() => navigate("/account")}>Account</Button>
                                    <Button sx={{ p: 1, color: 'inherit' }}>Dashboard</Button>
                                    <Button sx={{ p: 1, color: 'inherit' }}>Logout</Button>
                                </MenuItem>

                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </Toolbar>
        </>
    );
}
export default NavBar;
