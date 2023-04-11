import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';

export default function ListProfessor({isRating = true,  name = 'Vladyslav Balushka ', faculty = 'Philosophy  ', description = '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam modi expedita' }) {

    const handleRating = () => {
        //go to the evaluation page
        console.log('fas')
    }


    if (isRating) {        
    return (
        <List sx={{  ml: 60,  width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
            
            <ListItem alignItems="flex-start">
                <div onClick={handleRating} className='icon-div' >
                    
                    <StarIcon className='icon' sx={{color: 'yellow'}} />
                </div>
                <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                <b>Faculty:</b> {faculty}
                            </Typography>
                            <Typography>
                                <b>Description:</b> {description}
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
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            <b>Faculty:</b> {faculty}
                        </Typography>
                        <Typography>
                            <b>Description:</b> {description}
                        </Typography>
                    </React.Fragment>
                }
            />        
        </ListItem>
        
        <Divider variant="inset" component="li" />


    </List> 
    )};
}