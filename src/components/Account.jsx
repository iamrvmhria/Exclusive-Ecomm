import React from "react";
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from "@mui/material";

const AccountPage = () => {
  return (
    <Box display="flex" sx={{padding:'4rem'}}>
  
      <Box width="250px" borderRight="1px solid #ddd" pr={3}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Manage My Account
        </Typography>
        <List>
        <ListItem>
            <Button sx={{color:"black"}}>My Profile</Button>
          </ListItem>
        <ListItem>
            <Button sx={{color:"black"}}>Address Book</Button>
          </ListItem>
          <ListItem>
            <Button sx={{color:"black"}}>My Payment Option</Button>
          </ListItem>
        </List>

        <Typography variant="h6" fontWeight="bold" mt={3} mb={2}>
          My Orders
        </Typography>
        <List>
        <ListItem>
            <Button sx={{color:"black"}}>My Return</Button>
          </ListItem>
          <ListItem>
            <Button sx={{color:"black"}}>My Cancellations</Button>
          </ListItem>
        </List>

        <Typography variant="h6" fontWeight="bold" mt={3} mb={2}>
          My Wishlist
        </Typography>
        <List>
          <ListItem>
            <Button  sx={{color:"black"}}>Wishlist</Button>
          </ListItem>
        </List>
      </Box>

  
      <Box flex={1} pl={3}>
        <Typography variant="h5" fontWeight="bold" color="red" mb={3}>
          Edit Your Profile
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Box flex={1}>
            <Typography variant="body1">First Name</Typography>
            <TextField fullWidth variant="outlined" size="small" />
          </Box>
          <Box flex={1}>
            <Typography variant="body1">Last Name</Typography>
            <TextField fullWidth variant="outlined" size="small"  />
          </Box>
        </Box>
        <Box display="flex" gap={2} mb={2}>
          <Box flex={1}>
            <Typography variant="body1">Email</Typography>
            <TextField fullWidth variant="outlined" size="small"  />
          </Box>
          <Box flex={1}>
            <Typography variant="body1">Address</Typography>
            <TextField fullWidth variant="outlined" size="small"   />
          </Box>
        </Box>

        <Typography variant="h6" fontWeight="bold" mt={3} mb={2}>
          Password Changes
        </Typography>
        <TextField fullWidth variant="outlined" size="small"  placeholder="Current Password" sx={{ mb: 2 }} />
        <TextField fullWidth variant="outlined" size="small"  placeholder="New Password" sx={{ mb: 2 }} />
        <TextField fullWidth variant="outlined" size="small"  placeholder="Confirm New Password" sx={{ mb: 2 }} />

        <Box display="flex" justifyContent="flex-end" mt={2} gap={2}>
          <Button variant="text">Cancel</Button>
          <Button variant="contained" color="error">Save Changes</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountPage;
