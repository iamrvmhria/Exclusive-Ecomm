import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from 'react-router';
import mobile from '../assets/mobile.jpg';

const LogIn = () => {
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };


    const onSubmit = (data)=>{
        const storedUsers = localStorage.getItem("users");
        let users = JSON.parse(storedUsers)
        const userExists = users.find(user => user.email === data.email && user.password === data.password);
        if (userExists) {
            alert("Logged in successfully");
            navigate('/')
        } else {
            alert("Wrong email or password");
        }
        reset()
    }
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                    component="img"
                    alt="Description"
                   src={mobile}
                    sx={{
                        width: '919px',
                        height: '506px',
                        margin: "2rem 0 5rem 0",
                    }}
                />
                <Container maxWidth="xs">
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
                        <Typography variant="h5" fontWeight="bold">
                            Log in to Exclusive
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
                            Enter your details below
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            fullWidth
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address",
                                },
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            label="Email" variant="standard" margin="normal"
                        />
                        <TextField
                            fullWidth
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message:
                                        "Password must be at least 8 characters, include an uppercase letter, a number, and a special character",
                                },
                            })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            label="Password" type={showPassword ? "text" : "password"} variant="standard" margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={togglePasswordVisibility} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mt: 2 }}>
                            <Button sx={{ color: 'white', backgroundColor: "#D32F2F", mt: 2 }} type='submit'>
                                Log in
                            </Button>
                            <Button
                                sx={{ mt: 2, color: "#D32F2F" }}
                            >
                                Forget Password?
                            </Button>
                        </Box>
                        </form>
                    </Box>

                </Container>
            </Box>
        </>
    )
}

export default LogIn
