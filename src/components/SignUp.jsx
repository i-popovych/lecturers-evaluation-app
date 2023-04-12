import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, CircularProgress, FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from "react";
import { AuthAPI } from "../api/AuthAPI";


const theme = createTheme();

export default function RegisterForm() {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [nameDirty, setNameDirty] = React.useState(false)
    const [emailDirty, setEmailDirty] = React.useState(false)
    const [passwordDirty, setPasswordDirty] = React.useState(false)
    const [nameError, setNameError] = React.useState('Поле Full name не може бути пустим')
    const [emailError, setEmailError] = React.useState('Поле email не може бути пустим')
    const [passwordError, setPasswordError] = React.useState('Поле пароля не може бути пустим')
    const [formValid, setFormValid] = React.useState(false)

    const [message, setMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    React.useEffect(() => {
        if (emailError || passwordError || nameError) {
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    })


    const emailHendler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email error')
        } else {
            setEmailError('')
        }
    }

    const nameHendler = (e) => {
        setName(e.target.value)
        const re = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameError('Введіть коректно ім*я та прізвище')
        } else {
            setNameError('')
        }
    }

    const passwordHendler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8 || e.target.value.length > 16) {
            setPasswordError('Пароль повинен містити від 8 до 16 символів')
            if (!e.target.value) {
                setPasswordError('Password error')
            }
        } else {
            setPasswordError('')
        }
    }

    const handleBlur = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
            case 'name':
                setNameDirty(true)
                break;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const jsonData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            stydent: data.get('stydent'),
            professor: data.get('professor')
        }

        const role = data.get('stydent') ? 'student' : 'lecturer'
        setIsLoading(true)
        try {
            const res = await AuthAPI.registrationUser(jsonData.email, jsonData.name, jsonData.password, role)
            setMessage('Ви успішно зареєструвались')
        } catch (e) {
            setMessage('Якась помилка ):')
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar alt="Remy Sharp" src="" />
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {(nameDirty && nameError) && <div style={{ color: 'red' }} >{nameError}</div>}
                        <TextField
                            onChange={e => nameHendler(e)}
                            value={name}
                            onBlur={e => handleBlur(e)}
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Full name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                        {(emailDirty && emailError) && <div style={{ color: 'red' }} >{emailError}</div>}
                        <TextField
                            onChange={e => emailHendler(e)}
                            value={email}
                            onBlur={e => handleBlur(e)}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        {(passwordDirty && passwordError) && <div style={{ color: 'red' }} >{passwordError}</div>}
                        <TextField
                            onChange={e => passwordHendler(e)}
                            value={password}
                            onBlur={e => handleBlur(e)}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Who i?</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel name='stydent' value="stydent" control={<Radio />} label="I'm student" />
                                <FormControlLabel name='professor' value="professor" control={<Radio />} label="I'm professor" />

                            </RadioGroup>
                        </FormControl>

                        <Button
                            disabled={!formValid}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        {
                            message && (
                                <Grid container>
                                    <Grid item sx={{ ml: 9 }}>
                                            <Alert>{message}</Alert>
                                    </Grid>
                                </Grid>
                            )
                        }
                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2" sx={{ ml: 15 }} >
                                    {"Do have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}