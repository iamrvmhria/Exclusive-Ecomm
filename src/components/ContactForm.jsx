import React from "react";
import { Box, TextField, Button, Typography, Paper, Avatar, colors } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function ContactForm() {
  const style = { bgcolor: "#D32F2F",color:'white', width: 40, height: 40 }
  return (
    <Box sx={{ maxWidth: 1000, margin: "auto", padding: 2, display: "flex", gap: 3,  mt:'3rem',mb:'5rem'}}>
 
      <Paper elevation={2} sx={{ padding: '3rem', width: "40%" }}>
       
        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <Avatar sx={style}>
            <PhoneIcon />
          </Avatar>
          <Typography variant="h6" fontWeight="bold">
            Call To Us
          </Typography>
        </Box>
        <Typography variant="body2" mb={2}>
          We are available 24/7, 7 days a week.
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          Phone: +880161112222
        </Typography>
        <Box my={5} borderBottom="2px solid #ddd" />

       
        <Box display="flex" alignItems="center" gap={2} mb={4}>
          <Avatar sx={style}>
            <EmailIcon sx={{ color: "white" }} />
          </Avatar>
          <Typography variant="h6" fontWeight="bold">
            Write To Us
          </Typography>
        </Box>
        <Typography variant="body2" mb={1}>
          Fill out our form and we will contact you within 24 hours.
        </Typography>
        <Typography variant="body2" mb={1}>
          Emails: <b>customer@exclusive.com</b>
        </Typography>
        <Typography variant="body2" mb={1}>
          Emails: <b>support@exclusive.com</b>
        </Typography>
      </Paper>


      <Paper elevation={2} sx={{ padding: '3rem', flexGrow: 1 }}>
        <Box display="flex" gap={2} mb={2}>
          <TextField label="Your Name" fullWidth required  
          sx={{ backgroundColor: "rgb(248 241 241)", borderRadius: 1, "& fieldset": { border: "none" } }}
          />
          <TextField label="Your Email" fullWidth required  
          sx={{ backgroundColor: "rgb(248 241 241)", borderRadius: 1, "& fieldset": { border: "none" } }}
          />
          <TextField label="Your Phone" fullWidth required  
          sx={{ backgroundColor: "rgb(248 241 241)", borderRadius: 1, "& fieldset": { border: "none" } }}
          />
        </Box>
        <TextField
          label="Your Message"
          multiline
          rows={4}
          fullWidth
          required
          sx={{ backgroundColor: "rgb(248 241 241)", mb: 2 ,borderRadius: 1, "& fieldset": { border: "none" } }}
        />
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" sx={{ backgroundColor: "red", color: "white" }}>
            Send Message
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default ContactForm;