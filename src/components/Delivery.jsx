import React from 'react'
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ReplayIcon from "@mui/icons-material/Replay";
import { Box, Typography, Paper, Avatar, Container } from "@mui/material";

function Delivery() {
    const BoxStyle = {
        flex: "1 1 200px", p: 3, textAlign: "center", transition: " 0.3s ease ",
        "&:hover": { bgcolor: '#D32F2F', color: 'white' }
    }
    const avatarStyle = {
        bgcolor: "black", mx: "auto", mb: 1, color: 'white',
        "&:hover": { bgcolor: 'white', color: '#D32F2F' }
    }
    return (
        <Container maxWidth="lg" sx={{ mt: '3rem', mb: '5rem' }}>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2}>
                <Box sx={BoxStyle}>
                    <Avatar sx={avatarStyle}>
                        <LocalShippingIcon />
                    </Avatar>
                    <Typography variant="h6" fontWeight="bold">FREE AND FAST DELIVERY</Typography>
                    <Typography variant="body2">Free delivery for all orders over $140</Typography>
                </Box>

                <Box sx={BoxStyle}>
                    <Avatar sx={avatarStyle}>
                        <SupportAgentIcon />
                    </Avatar>
                    <Typography variant="h6" fontWeight="bold">24/7 CUSTOMER SERVICE</Typography>
                    <Typography variant="body2">Friendly 24/7 customer support</Typography>
                </Box>

                <Box sx={BoxStyle}>
                    <Avatar sx={avatarStyle}>
                        <ReplayIcon />
                    </Avatar>
                    <Typography variant="h6" fontWeight="bold">MONEY BACK GUARANTEE</Typography>
                    <Typography variant="body2">We return money within 30 days</Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Delivery
