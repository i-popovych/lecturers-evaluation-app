import * as React from 'react';
import {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import {useNavigate} from "react-router-dom";
import {rating} from "../utils/routes";

export default function ListProfessor({ name = 'Vladyslav Balushka ', email = 'some email', id }) {

    const [rate, setRate] = React.useState(true)
    const handleRating = () => {
        navigate(`${rating}/` + id)
        setRate((prev) => !prev)
    }


    // useEffect(() => {
    //     const fetch = async () => {
    //         const res = await RatingAPI.getRaitnedLectures(id);
    //         debugger
    //     }
    //     fetch()
    // }, [])

    const navigate = useNavigate();
    const color = rate ? "yellow" : "silver"

    return (
        <List sx={{mt: 2, ml: 60, width: '100%', maxWidth: 460, bgcolor: 'background.paper'}}>

            <ListItem alignItems="flex-start">
                <div onClick={handleRating} className='icon-div'>

                    <StarIcon
                        // onClick={() => navigate(`${rating}/`+id)}
                        className='icon' sx={{color}}/>
                </div>
                <ListItemText
                    sx={{cursor: 'pointer'}}
                    primary={name}
                    onClick={() => {
                        navigate(`${rating}/` + id)
                    }
                    }
                    secondary={
                        <React.Fragment>

                            <Typography>
                                <b>Email:</b> {email}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>

            <Divider variant="inset" component="li"/>


        </List>
    )
}