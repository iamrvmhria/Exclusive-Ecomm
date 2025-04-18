import { Box, Button, Container, TextField, Typography } from "@mui/material";

 function Profile() {
  return (
    <Container maxWidth="md" sx={{ bgcolor: "white", p: 4, borderRadius: 2, boxShadow: 1,mt:'3rem',mb:'5rem' }}>

      <Typography variant="h6" fontWeight="bold" color="black" mb={2}>
         Your Profile
      </Typography>


      <Box display="flex" gap={2} mb={2}>
        <TextField label="First Name " fullWidth  />
        <TextField label="Last Name " fullWidth   />
      </Box>

      <Box display="flex" gap={2} mb={2}>
        <TextField label="Email" fullWidth   />
        <TextField label="Address" fullWidth   />
      </Box>

   
      <Typography variant="subtitle1" fontWeight="bold" mt={2} mb={1}>
       Your Password 
      </Typography>

      <TextField label="Current Password" fullWidth type="password" sx={{ mb: 2 }} />
      <TextField label="New Password" fullWidth type="password" sx={{ mb: 2 }} />
      <TextField label="Confirm New Password" fullWidth type="password" sx={{ mb: 3 }} />

      <Box display="flex" justifyContent="space-between">
        <Button variant="text">Cancel</Button>
        <Button variant="contained" color="error">Save Changes</Button>
      </Box>
    </Container>
  );
}

export default Profile;