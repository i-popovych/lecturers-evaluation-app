import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Alert, Button, Card, CardActions, CardContent, CssBaseline, Paper, Rating} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {useEffect, useState} from "react";
import {RatingAPI} from "../api/RatingAPI";
import {useParams} from "react-router-dom";




const theme = createTheme();

export default function Racing() {

    const [value1, setValue1] = React.useState();
    const [value2, setValue2] = React.useState();
    const [value3, setValue3] = React.useState();

    const [rating, setRating] = useState(0)
    const [name, setName] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const fetch = async () => {
            const res = await RatingAPI.getLectureItem(id)
            const rate = await RatingAPI.getRating(id)
            const z = rate.data
            console.log(rate.data)
            const fair = z[0].fair;
            const matherial = z[0].matherial
            const quality = z[0].quality
            const sum = ((fair + matherial + quality) / 3).toFixed(1)
            console.log(sum)
            debugger
            setName(res.data.name)
            setRating(sum )
        }
        fetch()
    }, [])
    if (!name) return <Alert>Loading...</Alert>

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
                            Welcome to the professor's teaching quality assessment page
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            <p style={{ marginBottom: '2px' }} >Average rating</p>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly value={rating} />
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                {rating}/5
                            </Typography>
                        </Typography>
                    </Container>
                    <Box
                        sx={{
                            ml: 33,
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 300,
                                height: 300,
                            },
                        }}
                    >
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Якість викладання (Я)
                                </Typography>
                                <Typography variant="h5" component="div">
                                <Rating
                                        sx={{mr: 3, mb: 2}}
                                        precision={0.1}
                                        name="simple-controlled"
                                        value={value1}
                                        onChange={(event, newValue) => {
                                            setValue1(newValue);
                                        }}
                                    />
                                    {value1}
                                </Typography>
                                
                                <Typography variant="body2">
                                     Якість викладання (Я) - включає зміст навчальної дисципліни, актуальність та структуру матеріалу, якість викладання.
                                    <br />
                                    
                                </Typography>
                            </CardContent>

                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Методичне забезпечення (М)
                                </Typography>
                                <Typography variant="h5" component="div">
                                <Rating
                                        sx={{mr: 3, mb: 2}}
                                        precision={0.1}
                                        name="simple-controlled"
                                        value={value2}
                                        onChange={(event, newValue) => {
                                            setValue2(newValue);
                                        }}
                                    />
                                    {value2}
                                </Typography>
                             
                                <Typography variant="body2">
                                Методичне забезпечення (М) - наявність навчальних посібників, конспектів лекцій, презентацій, методичних вказівок, інструкцій до ЛР, індивідуальних завдань тощо.
                                </Typography>
                            </CardContent>

                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Об'єктивність оцінювання (О)
                                </Typography>
                                <Typography variant="h5" component="div">
                                <Rating
                                        sx={{mr: 3, mb: 2}}
                                        precision={0.1}
                                        name="simple-controlled"
                                        value={value3}
                                        onChange={(event, newValue) => {
                                            setValue3(newValue);
                                        }}
                                    />
                                    {value3}
                                </Typography>
                                
                                <Typography variant="body2">
                                Об’єктивність оцінювання (О) - включає систему та критерії оцінювання, зокрема розподіл балів протягом семестру та під час екзамену, а також неупередженість та справедливість оцінювання.
                                </Typography>
                            </CardContent>
                        </Card>                                        
                    </Box>
                </Box>
                <div style={{position: 'absolute', top: '550px', left: '1250px'}} >
                <Button variant="contained"><p style={{marginRight: '10px'}} >Відправити:</p>  <p className='send' ><SendIcon/></p></Button>
                     
                     </div>
               
            </main>


        </ThemeProvider>
    );
}