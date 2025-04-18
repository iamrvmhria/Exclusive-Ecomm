import React from "react";
import { Box, Typography, Paper, Avatar, Button, Container } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PeopleIcon from "@mui/icons-material/People";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import girls from '../assets/girls.jpg';
import ceo1 from '../assets/ceo1.jpg';
import ceo2 from '../assets/ceo2.jpg';
import ceo3 from '../assets/ceo3.jpg';

export default function HomePage() {
  const avatarStyle = { bgcolor: "black", mx: "auto", mb: 1 ,color: 'white',"&:hover": { bgcolor: 'white', color: '#D32F2F' } }
  const paperStyle = { flex: "1 1 200px", p: 3, textAlign: "center", boxShadow: 3 , transition: " 0.3s ease",
    "&:hover": { bgcolor:'#D32F2F',color:'white' } 
   }
  return (
    <Container maxWidth="lg" sx={{mt:'3rem', mb:'5rem'}}>
      <Box display="flex" alignItems="center" gap={4} my={5}>
        <Box flex={1}>
          <Typography variant="h4" fontWeight="bold">
            Our Story
          </Typography>
          <Typography variant="body1" mt={2}>
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
          </Typography>
            <Typography sx={{ mt: 2}}>
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
            </Typography>
          <Button sx={{ mt: 2, textTransform: "none", color: "blue" }}>Read more...</Button>
        </Box>
        <Box flex={1}>
          <img
           src={girls}
           alt="Our Story"
            style={{ width: "100%", borderRadius: 3 }}
          />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2} mb={5}>
        <Paper sx={paperStyle}>
          <Avatar sx={avatarStyle}>
            <PeopleIcon />
          </Avatar>
          <Typography variant="h6" fontWeight="bold">10.5k</Typography>
          <Typography variant="body2">Sellers active on site</Typography>
        </Paper>

        <Paper sx={paperStyle}>
          <Avatar sx={avatarStyle}>
            <MonetizationOnIcon />
          </Avatar>
          <Typography variant="h6" fontWeight="bold">33k</Typography>
          <Typography variant="body2">Monthly product sale</Typography>
        </Paper>

        <Paper sx={paperStyle}>
          <Avatar sx={avatarStyle}>
            <StarIcon />
          </Avatar>
          <Typography variant="h6" fontWeight="bold">45.5k</Typography>
          <Typography variant="body2">Customer active on site</Typography>
        </Paper>

        <Paper sx={paperStyle}>
          <Avatar sx={avatarStyle}>
            <ShoppingBagIcon />
          </Avatar>
          <Typography variant="h6" fontWeight="bold">25k</Typography>
          <Typography variant="body2">Annual gross sale on site</Typography>
        </Paper>
      </Box>


      <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2} mb={5}>
        <Paper sx={paperStyle}>
          <Avatar src={ceo1}
           sx={{ width: 100, height: 100, mx: "auto", mb: 1 }} />
          <Typography variant="h6" fontWeight="bold">Tom Cruise</Typography>
          <Typography variant="body2">Founder & Chairman</Typography>
        </Paper>

        <Paper sx={paperStyle}>
          <Avatar src= {ceo2} sx={{ width: 100, height: 100, mx: "auto", mb: 1 }} />
          <Typography variant="h6" fontWeight="bold">Emma Watson</Typography>
          <Typography variant="body2">Managing Director</Typography>
        </Paper>

        <Paper sx={paperStyle}>
          <Avatar src={ceo3} sx={{ width: 100, height: 100, mx: "auto", mb: 1 }} />
          <Typography variant="h6" fontWeight="bold">Will Smith</Typography>
          <Typography variant="body2">Product Designer</Typography>
        </Paper>
      </Box>

  
    </Container>
  );
}
