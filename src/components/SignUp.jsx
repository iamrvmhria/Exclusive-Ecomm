import React from 'react'
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from 'react-router';
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import mobile from '../assets/mobile.jpg';



const SignUp = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const storedUsers = localStorage.getItem("users");
    let initialValue = JSON.parse(storedUsers)

    const [users, setUsers] = useState(() => initialValue ? initialValue : [])

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const onSubmit = (data) => {
        const userExists = users.some(user => user.email === data.email);
        if (userExists) {
            alert("User with this email already exists.");
            return;
        }
        else{
        setUsers([...users, data]);
        reset();
        alert('Account Create Successfully')
        navigate('/')
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
      };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                            Create an account
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
                            Enter your details below
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                fullWidth
                                {...register("name", { required: "Name is required" })}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                                label="Name" variant="standard" margin="normal"
                            />

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
                                label="Password"   type={showPassword ? "text" : "password"} variant="standard" margin="normal" 
                                InputProps = {{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={togglePasswordVisibility} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <Button fullWidth variant="contained" sx={{ backgroundColor: "#D32F2F", mt: 2 }} type="submit">
                                Create Account
                            </Button>
                        </form>

                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<GoogleIcon />}
                            sx={{ mt: 2, color: "black", borderColor: "grey.400" }}
                        >
                            Sign up with Google
                        </Button>

                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Already have an account?{" "}
                            < Typography onClick={() => { navigate('/login') }} component='button' sx={{ color: "black", fontWeight: "bold", cursor: "pointer", textDecoration: 'underline', border: 'none' }}>
                                Log in
                            </Typography>
                        </Typography>
                    </Box>
                </Container>

            </Box>
        </>
    )
}

export default SignUp
