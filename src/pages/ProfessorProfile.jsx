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


const theme = createTheme();

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

export default function ProfessorProfile({ name = 'Professor Name', address = 'professor@lnu.edu.ua', faculty = 'Faculty of Electronics', rating = 4.4 }) {

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
                            {name}
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
                                        Your name: {name}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your email: {address}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your faculty: {faculty}
                                    </Typography>
                                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                        Your rating:
                                        <Rating sx={{ml: 2}}  name="half-rating-read" defaultValue={2.5} precision={0.1} readOnly value={rating} />
                                       <p>
                                            {rating}/5
                                       </p>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                        {/*with me end */}
                        <div>


                        </div>
                        {/*} <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Main call to action</Button>
                            <Button variant="outlined">Secondary action</Button>
                </Stack>*/}
                    </Container>
                </Box>

            </main>

        </ThemeProvider>
    );
}