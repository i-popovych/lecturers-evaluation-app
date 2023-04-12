import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Rating } from '@mui/material';
import {useContext, useEffect, useState} from "react";
import {RatingAPI} from "../api/RatingAPI";
import {AuthContext} from "../App";


const theme = createTheme();



export default function ProfessorProfile({faculty = 'Faculty of Electronics' }) {
    const [rating, setRating] = useState(null);
    const {currentUser} = useContext(AuthContext)
    const id = currentUser?.id


    useEffect(() => {
        const fetch = async () => {

                const res = await RatingAPI.getLectureItem(id)
                let rate = await RatingAPI.getRating(id)
                rate = rate.data
                let sum = [];
                for (let i = 0; i < rate.length; i++) {
                    sum.push(rate[i].quality)
                    sum.push(rate[i].matherial)
                    sum.push(rate[i].fair)
                }
                let result = sum.reduce((sum, current) => sum + current, 0);
                result = result / sum.length
                debugger

                const num = result.toFixed(2)
                setRating(num)
        }
        fetch()
    }, [])


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
                                    <Typography sx={{ ml: 20 }} variant="h6" align="center" color="text.secondary" paragraph>
                                        Information with you</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your name: {currentUser.name}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your email: {currentUser.login}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your faculty: {faculty}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your rating:
                                        <Rating sx={{ ml: 2 }} name="half-rating-read" defaultValue={2.5} precision={0.1} readOnly value={rating} />
                                        <p>
                                            {rating}
                                        </p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                        {/*with me end */}
                        <div>
                        </div>
                    </Container>
                </Box>

            </main>

        </ThemeProvider>
    );
}