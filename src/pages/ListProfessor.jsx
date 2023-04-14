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

    const [rait, setReait] = useState(null)
    const [isRating, setIsRating] = useState(true)
    const [rate, setRate] = React.useState(isRating)
    const handleRating = () => {
        navigate(`${rating}/`+id)
        setRate((prev) => !prev )
    }



    // useEffect(() => {
    //     const fetch = async () => {
    //         const res = await RatingAPI.getRaitnedLectures(id);
    //         debugger
    //     }
    //     fetch()
    // }, [])

    const navigate = useNavigate();

    if (rate) {        
    return (
        <List sx={{mt: 2,  ml: 60,  width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
            
            <ListItem alignItems="flex-start">
                <div onClick={handleRating} className='icon-div' >
                    
                    <StarIcon 
                    // onClick={() => navigate(`${rating}/`+id)}
                     className='icon' sx={{color: 'yellow'}} />
                </div>
                <ListItemText
                    sx={{cursor: 'pointer'}}
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