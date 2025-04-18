import * as React from 'react';
import { Box, Typography, Divider } from '@mui/material'
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { QRCodeCanvas } from "qrcode.react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import googleplay from '../assets/googleplay.png'; 
import App_Store from '../assets/App_Store.svg'; 


export default function Footer() {
    return (
        <>
            <Box sx={{
                backgroundColor: "black",
                color: "white",
                width: "100%",
                padding: "1rem",
                textAlign: "center"
            }}>
                <Box
                    sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "flex-start" , padding: "1rem",}}
                >
                    <Typography variant='body1' component='div'
                        sx={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between", gap: '1.5rem', alignItems: 'start' }}
                    >
                        <Typography variant='h6' sx={{ fontSize: '1.5rem' }}>Exclusive</Typography>
                        <Typography variant='h6'>Subscribe</Typography>
                        <Typography variant='caption' sx={{ fontSize: '1rem' }}>Get 10% off your first order</Typography>
                        <TextField
                            sx={{
                                display: 'block',
                                backgroundColor: "black",
                                borderRadius: "8px",
                                input: { color: "white" },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "gray" },
                                    "&:hover fieldset": { borderColor: "white" },
                                    "&.Mui-focused fieldset": { borderColor: "white" },
                                },
                            }}
                            variant="outlined"
                            placeholder="Enter your email"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton sx={{ color: "white" }} onClick={() => console.log("Message sent!")}>
                                            <SendOutlinedIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Typography>

                    <Typography variant='body1' component='div' sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'start' }}>
                        <Typography variant='h6'>Support</Typography>
                        <Typography variant='caption' sx={{ fontSize: '1rem' }}>41/11, Varun path,  <br /> Mansarover, Jaipur</Typography>
                        <Typography variant='caption' sx={{ fontSize: '1rem' }}>exclusive@gmail.com</Typography>
                        <Typography variant='caption' sx={{ fontSize: '1rem' }}>+91 94827-84870</Typography>
                    </Typography>

                    <Typography variant='body1' component='div' sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start' }}>
                        <Typography variant='h6'>Account</Typography>
                        <Typography variant='caption' sx={{ fontSize: '1rem' }}>My Account</Typography>
                        <Typography variant='caption' sx={{ fontSize: '1rem' }}>Login/Register</Typography>
                        <Typography variant='caption' sx={{ fontSize: '1rem' }}>Cart</Typography>
                        <Typography variant='caption' sx={{ fontSize: '1rem' }}>Wishlist</Typography>
                        <Typography variant='caption' sx={{ fontSize: '1rem' }}>Shop</Typography>
                    </Typography>

                    <Typography variant='body1' component='div' sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start' }}>
                        <Typography variant='h6'>Quick Link</Typography>
                        <Typography variant='caption' sx={{ fontSize: '1rem' }}>Privacy Policy</Typography>
                        <Typography variant='caption' sx={{ fontSize: '1rem' }}>terms of use</Typography>
                        <Typography variant='caption' sx={{ fontSize: '1rem' }}>FAQ</Typography>
                        <Typography variant='caption' sx={{ fontSize: '1rem' }}>Contact</Typography>
                    </Typography>

                    <Typography variant='body1' component='div'
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' ,gap:1.5}}>
                        <Typography variant='h6'>Download App</Typography>
                        <Typography variant='caption'>Save $3 with App New User Only</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center", textAlign: "center" }}>
                            <Box sx={{ display: 'flex' }}>
                                <QRCodeCanvas size={120} bgColor="white" fgColor="black" />
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <img style={{ marginLeft: '10px' }}
                                        src={googleplay} alt="Google Play" width={130} height={57} />
                                    <img src={App_Store} alt="App Store" width={150} height={75} />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", gap: 2 ,pb:2}}>
                            <FacebookIcon sx={{ color: "white", fontSize: 30 }} />
                            <TwitterIcon sx={{ color: "white", fontSize: 30 }} />
                            <InstagramIcon sx={{ color: "white", fontSize: 30 }} />
                            <LinkedInIcon sx={{ color: "white", fontSize: 30 }} />
                        </Box>
                    </Typography>
                </Box>
                <Divider sx={{ backgroundColor: "gray" }} />
                <Box
                    sx={{ mt: 2, fontSize: "1rem", color: "gray" }}>
                    <Typography variant="caption">© {new Date().getFullYear()} Exclusive. All rights reserved.</Typography>
                </Box>
            </Box>
        </>
    )
}
