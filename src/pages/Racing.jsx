import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Alert, Button, Card, CardActions, CardContent, CssBaseline, Paper, Rating} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {useContext, useEffect, useState} from "react";
import {RatingAPI} from "../api/RatingAPI";
import {useParams} from "react-router-dom";
import {AuthContext} from "../App";


const theme = createTheme();

export default function Racing() {

    const [quality, setQuality] = React.useState();
    const [matherial, setMatherial] = React.useState();
    const [fair, setFair] = React.useState();

    const [rating, setRating] = useState(0)
    const [name, setName] = useState(null)
    const {id} = useParams()
    const {currentUser} = useContext(AuthContext)

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

            setName(res.data.name)
            setRating(result.toFixed(2))
        }
        fetch()
    }, [])

    const handleSubmit = async () => {
        if (!currentUser) {
            alert('ви не авторизовані!')
            return
        }

        try {
            await RatingAPI.setRating(currentUser.id, id, quality, matherial, fair)
        } catch (e) {

        }
    }



// if (!name) return <Alert>Loading...</Alert>

return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>

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
                        <p style={{marginBottom: '2px'}}>Average rating</p>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly value={rating}/>
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
                    <Card sx={{minWidth: 275}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Якість викладання (Я)
                            </Typography>
                            <Typography variant="h5" component="div">
                                <Rating
                                    sx={{mr: 3, mb: 2}}
                                    precision={0.1}
                                    name="simple-controlled"
                                    value={quality}
                                    onChange={(event, newValue) => {
                                       setQuality(newValue);
                                    }}
                                />
                                {quality}
                            </Typography>

                            <Typography variant="body2">
                                Якість викладання (Я) - включає зміст навчальної дисципліни, актуальність та структуру
                                матеріалу, якість викладання.
                                <br/>

                            </Typography>
                        </CardContent>

                    </Card>
                    <Card sx={{minWidth: 275}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Методичне забезпечення (М)
                            </Typography>
                            <Typography variant="h5" component="div">
                                <Rating
                                    sx={{mr: 3, mb: 2}}
                                    precision={0.1}
                                    name="simple-controlled"
                                    value={matherial}
                                    onChange={(event, newValue) => {
                                        setMatherial(newValue);
                                    }}
                                />
                                {matherial}
                            </Typography>

                            <Typography variant="body2">
                                Методичне забезпечення (М) - наявність навчальних посібників, конспектів лекцій,
                                презентацій, методичних вказівок, інструкцій до ЛР, індивідуальних завдань тощо.
                            </Typography>
                        </CardContent>

                    </Card>
                    <Card sx={{minWidth: 275}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Об'єктивність оцінювання (О)
                            </Typography>
                            <Typography variant="h5" component="div">
                                <Rating
                                    sx={{mr: 3, mb: 2}}
                                    precision={0.1}
                                    name="simple-controlled"
                                    value={fair}
                                    onChange={(event, newValue) => {
                                        setFair(newValue);
                                    }}
                                />
                                {fair}
                            </Typography>

                            <Typography variant="body2">
                                Об’єктивність оцінювання (О) - включає систему та критерії оцінювання, зокрема розподіл
                                балів протягом семестру та під час екзамену, а також неупередженість та справедливість
                                оцінювання.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            <div style={{position: 'absolute', top: '550px', left: '1250px'}}>
                <Button variant="contained"><p style={{marginRight: '10px'}} onClick={handleSubmit}>Відправити:</p>  <p className='send'>
                    <SendIcon/></p></Button>

            </div>

        </main>


    </ThemeProvider>
);
}