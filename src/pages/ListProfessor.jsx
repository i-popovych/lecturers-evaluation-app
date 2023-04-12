import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import {useNavigate} from "react-router-dom";
import {allListProfessor, rating} from "../utils/routes";

export default function ListProfessor({isRating = false,  name = 'Vladyslav Balushka ', email = 'some email', id }) {

        const [rate, setRate] = React.useState(isRating)

    const handleRating = () => {
        setRate((prev) => !prev )   
        navigate(`${rating}/`+id)
        
    }
    const navigate = useNavigate();

    if (rate) {        
    return (
        <List sx={{  ml: 60,  width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
            
            <ListItem alignItems="flex-start">
                <div onClick={handleRating} className='icon-div' >
                    
                    <StarIcon 
                    // onClick={() => navigate(`${rating}/`+id)}
                     className='icon' sx={{color: 'yellow'}} />
                </div>
                <ListItemText
                    primary={name}
                    onClick={() => {
                        navigate(`${rating}/`+id)
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
            
            <Divider variant="inset" component="li" />


        </List>
    )}
    else { return (
        <List sx={{mt: 2,  ml: 60,  width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
        
        <ListItem alignItems="flex-start">
            <div onClick={handleRating} className='icon-div' >
                
                <StarIcon className='icon' sx={{color: 'silver'}} />
            </div>
            <ListItemText
                primary={name}
                onClick={() => {
                    navigate(`${rating}/`+id)
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
        
        <Divider variant="inset" component="li" />


    </List> 
    )};
}