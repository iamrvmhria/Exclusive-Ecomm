import React, { useState } from "react";
import {
    Box,
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Typography,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    Paper,
    Divider,
} from "@mui/material";

const BillingDetails = () => {
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const style = {
        backgroundColor: 'rgb(248 241 241)',
        color:'white'
    }
    return (
        <Box sx={{ maxWidth: 600, margin: "auto", padding: 3 }}>
            {/* Billing Details */}
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Billing Details
            </Typography>
            <TextField label="First Name" fullWidth required margin="dense" sx={style}/>
            <TextField label="Company Name" fullWidth margin="dense" sx={style} />
            <TextField label="Street Address" fullWidth required margin="dense" sx={style}/>
            <TextField label="Apartment, floor, etc. (Optional)" fullWidth margin="dense" sx={style}/>
            <TextField label="Town/City" fullWidth required margin="dense" sx={style}/>
            <TextField label="Phone Number" fullWidth required margin="dense" sx={style}/>
            <TextField label="Email Address" fullWidth required margin="dense" sx={style} />
            <FormControlLabel
                control={<Checkbox />}
                label="Save this information for faster check-out next time"
            />

            {/* Order Summary */}
            <Paper variant="outlined" sx={{ padding: 3, mt: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                    Order Summary
                </Typography>

                <Box display="flex" justifyContent="space-between" mt={2}>
                    <Typography>LCD Monitor</Typography>
                    <Typography>$650</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography>H1 Gamepad</Typography>
                    <Typography>$1100</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" justifyContent="space-between">
                    <Typography>Subtotal:</Typography>
                    <Typography>$1750</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography>Shipping:</Typography>
                    <Typography>Free</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" fontWeight="bold" mt={2}>
                    <Typography>Total:</Typography>
                    <Typography>$1750</Typography>
                </Box>

                {/* Payment Method */}
                <FormControl component="fieldset" sx={{ mt: 3 }}>
                    <FormLabel component="legend">Payment Method</FormLabel>
                    <RadioGroup
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <FormControlLabel value="bank" control={<Radio />} label="Bank" />
                        <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
                    </RadioGroup>
                </FormControl>

                {/* Coupon & Place Order */}
                <Box display="flex" gap={1} mt={2}>
                    <TextField fullWidth label="Coupon Code" size="small" />
                    <Button variant="contained" color="secondary">
                        Apply Coupon
                    </Button>
                </Box>

                <Button variant="contained" color="error" fullWidth sx={{ mt: 2 }}>
                    Place Order
                </Button>
            </Paper>
        </Box>
    );
};

export default BillingDetails;
