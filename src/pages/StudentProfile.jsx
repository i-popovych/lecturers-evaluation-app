import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {AuthContext} from "../App";
import {Alert} from "@mui/material";
import {RatingAPI} from "../api/RatingAPI";
import {Navigate, useNavigate} from 'react-router-dom';
import {allListProfessor} from "../utils/routes";


const theme = createTheme();



export default function StudentProfile({faculty = 'Faculty of Electronics', course = 'some course' }) {
    const {currentUser} = useContext(AuthContext)
    const [isLoafing, setIsLoading] = useState(true)
    // const [address, setAddress] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetch = async () => {
            const res = await RatingAPI.getStudentRatingHistory(currentUser.id)
            // "login": "example13@lnu.edu.ua",
            //     "name": "Example13 Example13",
            debugger
        }
        fetch()
    }, [])

    if (!currentUser) return <Alert>Ви не авторизовані</Alert>
    if(currentUser.role === 'lecturer') {
        navigate(`/${allListProfessor}/item/${currentUser.id}`)
    }
    // if(!name) return <Alert>loading...</Alert>

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            {currentUser.name}
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Welcome to your personal account
                        </Typography>
                        {/*with me start */}
                        <div>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ml: 20}} variant="h6" align="center" color="text.secondary" paragraph>
                                        Information with you</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your name: {currentUser.name}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your address: {currentUser.email}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your faculty: {faculty}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your course: {course}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                        {/*with me end */}
                        <div>
                            <Accordion sx={{mt: 5}} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ml: 17}} variant="h6" align="center" color="text.secondary" paragraph>
                                        Information with your rating</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your name: {currentUser.name}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your address: {currentUser.login}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your faculty: {faculty}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your course: {course}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                    </Container>
                </Box>

            </main>

        </ThemeProvider>
    );
}