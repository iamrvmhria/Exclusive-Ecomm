import { Typography } from '@mui/material'
import * as React from 'react';
import { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../App.css"

const TopHeader = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Typography className='topHeader' component='nav' variant='caption' 
           sx={{display:'flex',alignItems:'center',justifyContent:'space-evenly', color:'aliceblue',backgroundColor:'black'}}>
                <Typography component='div'>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <Button variant="text" color='inherit' sx={{ textDecoration: "underline" }}>ShopNow</Button>
                </Typography >
                <Button
                    onClick={handleClick}
                    sx={{
                        color: "white",
                        textTransform: "none",
                        backgroundColor: "black",
                        padding: "6px 12px",
                        borderRadius: "4px",
                        fontSize: "14px",
                        "&:hover": { backgroundColor: "black" },
                    }}
                    endIcon={<ExpandMoreIcon />}
                >
                    English
                </Button>

                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>English</MenuItem>
                    <MenuItem onClick={handleClose}>Hindi</MenuItem>
                    <MenuItem onClick={handleClose}>Español</MenuItem>
                    <MenuItem onClick={handleClose}>Français</MenuItem>
                </Menu>
            </Typography>



        </>
    )
}

export default TopHeader

