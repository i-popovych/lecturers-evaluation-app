import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {AuthAPI} from "../api/AuthAPI";
import {useContext, useState} from "react";
import {AuthContext} from "../App";
import {RatingAPI} from "../api/RatingAPI";


const theme = createTheme();

export default function LoginForm() {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailDirty, setEmailDirty] = React.useState(false)
    const [passwordDirty, setPasswordDirty] = React.useState(false)
    const [emailError, setEmailError] = React.useState('Поле email не може бути пустим')
    const [passwordError, setPasswordError] = React.useState('Поле пароля не може бути пустим')

    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const {setCurrentUser} = useContext(AuthContext)


    const emailHendler = (e) =>{
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Email error')
        } else {
            setEmailError('')
        }
    }

    const passwordHendler = (e) =>{
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8){
            setPasswordError('Пароль повинен містити від 3 до 8 символів')
            if(!e.target.value){
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
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setIsLoading(true)
        try {
            let res = await AuthAPI.loginUser(data.get('email'), data.get('password'))
            localStorage.setItem('id', res.data)
            try {
                res = await RatingAPI.getStudentItem(res.data)
            } catch (e) {
                res = await RatingAPI.getLectureItem(res.data)
            }
            debugger
            setCurrentUser(res.data)
        }
        catch (e) {
            setMessage('Some error :(')
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
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {(emailDirty && emailError) && <div style={{color: 'red'}} >{emailError}</div> }
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
                        {(passwordDirty && passwordError) && <div style={{color: 'red'}} >{passwordError}</div> }
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}