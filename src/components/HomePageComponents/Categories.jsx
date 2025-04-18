import React from 'react'
import { Typography, Box, Button, colors } from '@mui/material'
import StopIcon from '@mui/icons-material/Stop';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from "@mui/material";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import WatchIcon from '@mui/icons-material/Watch';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


const Categories = () => {
    const categoryStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '5rem',
        width: '7rem',
        m: 2,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        border: '2px solid #e0e0e0',
        "&:hover": {
            backgroundColor: "#D32F2F",
            color: 'white'
        }
    }
    const btnStyle = {
            backgroundColor: "#f0f0f0",
            color: "black",
            borderRadius: "50%",
            width: 40,
            height: 40,
            mr:2,
            boxShadow: 2,
        
            "&:hover": {
                backgroundColor: "#e0e0e0",
            }
    }
    return (
        <>
            <Box sx={{color: '#D32F2F' }}>
                <Button variant='h6' sx={{ ml: 9, gap: 2 }} ><StopIcon />Categories</Button>
            </Box>
            <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between', m: 5 }}>
                <Typography sx={{ml:6}} variant='h5'> Browse By Category</Typography>
                <Box sx={{mr:6}}>
                    <IconButton
                        sx={btnStyle}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton
                        sx={btnStyle}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                color: 'black',
                m:5,
            }}>

                <Typography variant='button'
                    sx={categoryStyle}
                >
                    <PhoneAndroidIcon />
                    <Typography variant='caption'>Phones</Typography>
                </Typography>

                <Typography variant='button'
                    sx={categoryStyle}
                >
                    <ComputerIcon fontSize='large' />
                    <Typography variant='caption'>Computer</Typography>
                </Typography>
                <Typography variant='button'
                    sx={categoryStyle}
                >
                    < WatchIcon fontSize='large' />
                    <Typography variant='caption'>Smart Watch</Typography>
                </Typography>
                <Typography variant='button'
                    sx={categoryStyle}
                >
                    <CameraAltIcon fontSize='large' />
                    <Typography variant='caption'>Camera</Typography>
                </Typography>
                <Typography variant='button'
                    sx={categoryStyle}
                >
                    <HeadphonesIcon fontSize='large' />
                    <Typography variant='caption'>Head Phone</Typography>
                </Typography>
                <Typography variant='button'
                    sx={categoryStyle}
                >
                    <SportsEsportsIcon fontSize='large' />
                    <Typography variant='caption'>Gaming</Typography>
                </Typography>
            </Box>
        </>
    )
}

export default Categories
