import React, { useState } from "react";
import { Box, List, ListItemButton, ListItemText, ListItemIcon, Divider, Container, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AppleIcon from '@mui/icons-material/Apple';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import apple from '../../assets/apple.jpg'; 


const SideNav = () => {
    return (
        <>
            <Divider />
            <Box sx={{ display: 'flex', p: 2, ml: 3,flexWrap:'wrap' }}>
                <Box sx={{ display: 'flex', p: 2, ml: 3 }}>
                    <List sx={{ width: 240 }}>
                        <ListItemButton>
                            <ListItemText> Women's Fashion</ListItemText>
                            <ListItemIcon>
                                <ArrowForwardIosIcon fontSize="small" />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText>Men's Fashion </ListItemText>
                            <ListItemIcon>
                                <ArrowForwardIosIcon fontSize="small" />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText>Eletronics </ListItemText>
                            <ListItemIcon>
                                <ArrowForwardIosIcon fontSize="small" />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText>  Home & Lifestyle</ListItemText>
                            <ListItemIcon>
                                <ArrowForwardIosIcon fontSize="small" />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText>Medicine</ListItemText>
                            <ListItemIcon>
                                <ArrowForwardIosIcon fontSize="small" />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText>Sports & Outdoor</ListItemText>
                            <ListItemIcon>
                                <ArrowForwardIosIcon fontSize="small" />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText> Baby's & Toys</ListItemText>
                            <ListItemIcon>
                                <ArrowForwardIosIcon fontSize="small" />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText>Groceries & Pet</ListItemText>
                            <ListItemIcon>
                                <ArrowForwardIosIcon fontSize="small" />
                            </ListItemIcon>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText>   Health & Beauty </ListItemText>
                            <ListItemIcon>
                                <ArrowForwardIosIcon fontSize="small" />
                            </ListItemIcon>
                        </ListItemButton>
                    </List>
                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                </Box>

                <Container
                 sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',height: '394px', width: '912px', backgroundColor: 'black', color: "white",flexWrap:'wrap',m:5,ml:5}}
                 >
                    <Box
                    sx={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'start',height: '344px',flexWrap:'wrap',ml:3,p:3,mt:3}}
                    >
                        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:2}} >
                            <AppleIcon sx={{ fontSize: '50px' }} />
                           <Typography variant="h6">
                             iphone 14 Series
                            </Typography>
                        </Box>
                        <Typography variant="h4" p={2}>Up to 10% <br />off Voucher</Typography>
                        <Button color="none"sx={{textDecoration:'underline',fontSize:'1.3rem'}} >
                            Shop Now  <ArrowForwardIcon sx={{m:1}}/>
                        </Button>
                    </Box>
                        <Box
                            component="img"
                            alt="Description"
                           src={apple}
                            sx={{
                                width: '496px',
                                height:'404px'
                            }}
                        />
                      
                </Container>
            </Box>

        </>
    );
};

export default SideNav;