import { useState } from 'react'
import React from 'react';
import { Box, TextField, Typography, Container, Button } from '@mui/material';

export default function ContactForm() {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });

        if (name !== 'email') {
            setErrors({ ...errors, [name]: '' });
        } else if (validateEmail(value)) {
            setErrors({ ...errors, email: '' });
        }
    };

    const handleBlur = () => {
        const { name, value } = event.target;
        if (name === 'email' && !validateEmail(value)) {
            setErrors({ ...errors, email: 'yr email is invalid.' });
        } else if (name === 'name' && !value.trim()) {
            setErrors({ ...errors, name: 'name is required.' });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = {};
        if (!formValues.name.trim()) validationErrors.name = 'name is required';
        if (!formValues.email) {
            validationErrors.email = 'email is required';
        } else if (!validateEmail(formValues.email)) {
            validationErrors.email = 'please enter a valid email address';
        }
        if (!formValues.message.trim()) validationErrors.message = 'message is required';

        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log('form submitted', formValues);
        }
    };
    return (
        <div>
            <Container
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 0
                }}
            >
                <Typography variant="body1" sx={{
                    mt: 2,
                    p: 4,
                    fontSize: { xs: '.5rem', sm: '.75rem', md: '1rem', lg: '1.33rem' },
                }}
                >
                    email: alostsound@gmail.com

                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        border: '2px solid lightblue',
                        width: '100%',
                        maxWidth: 500,
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'rgb(55, 55, 55)',
                        borderRadius: '8px',
                    }}
                >
                    <TextField
                        name="name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2, backgroundColor: 'white', '& .MuiInputBase-input': { color: 'black' } }}
                        value={formValues.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2, backgroundColor: 'white', '& .MuiInputBase-input': { color: 'black' } }}
                        value={formValues.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        name="message"
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        sx={{ mt: 2, mb: 2, backgroundColor: 'white', '& .MuiInputBase-input': { color: 'black' } }}
                        value={formValues.message}
                        onChange={handleInputChange}
                        error={!!errors.message}
                        helperText={errors.message}
                    />
                    <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                        Submit
                    </Button>
                </Box>
            </Container>
        </div>
    );
}
