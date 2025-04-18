import React from 'react'
import { Typography, Button,Box } from '@mui/material'
import { useNavigate } from 'react-router'

export default function ErrorPage() {
  const navigate = useNavigate()
  return (
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh',gap:5}}>
      <Typography variant='h1' sx={{ fontSize: '5rem', fontWeight:'500'}} >404 Not Found</Typography>
      <Typography variant='h6'>Your visted page not found. You may go home page .</Typography>
      <Button  variant="contained" sx={{ backgroundColor: "#D32F2F", mt: 2 }} type="submit" onClick={() => { navigate("/") }}>
        Back to home page
      </Button>
    </Box>
  )
}
