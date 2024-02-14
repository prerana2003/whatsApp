import { AppBar, Avatar, Box, Toolbar, Typography, Grid, ListItemAvatar, ListItemText, Button, IconButton} from "@mui/material"
import React from "react";
import { useState, useEffect } from "react";
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const drawerWidth = 406;

const font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

const DisplayAppbar = ({setSelectedCon, selectedContact}) =>{
    const [alert, setAlert] = useState(true);

    useEffect(() => {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 5000);
      }, [selectedContact]);

    return(
                <Toolbar sx={{height:'66px',boxShadow:'none', backgroundColor:'#F0F2F5'}}>
                    <Grid item xs={1} sx={{display:{md:'none'}}}>
                        <ArrowBackIcon onClick={()=>setSelectedCon("")}/>
                    </Grid>
                    <Grid item xs={1.5} sm={1} lg={1}>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={selectedContact["profileImg"]}></Avatar>  
                        </ListItemAvatar>
                    </Grid>
                    <Grid item xs={4.5} sm={6} lg={7}>
                        <Grid container direction='column' alignItems='flex-start'>
                            <Grid item>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography sx={{ fontFamily:font, fontSize:'17px', color:'#111B21'}} component="label">
                                                {selectedContact["Name"]}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </Grid>
                                <Grid item marginTop='-8px'>
                                    <ListItemText
                                        secondary={
                                            <React.Fragment>
                                                {(alert) ?
                                                <Typography sx={{ fontFamily:font, fontSize:'14px', color:'#111B21'}} component="label">
                                                    click here for contact info
                                                </Typography> :''}
                                            </React.Fragment>
                                        }
                                    />                                                          
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={5} lg={4} textAlign='right' minWidth={0}>
                        <Button variant='outlined' sx={{borderRadius: 5, border:'1px solid #d1d7db', ':hover':{border:'1px solid #d1d7db', bgcolor:'#F0F2F5'}}}>
                            <VideocamIcon sx={{minWidth:'0', color:"#8696a0"}} /> <KeyboardArrowDownIcon sx={{color:"#8696a0"}}/>    
                        </Button>
                        <Button sx={{':hover':{backgroundColor:'#F0F2F5'}}}>
                            <SearchIcon sx={{color:"#54656f"}} />    
                        </Button>
                        <Button sx={{minWidth:'0px', paddingRight:'0px', ':hover':{backgroundColor:'#F0F2F5'}}}>
                            <MoreVertIcon sx={{ color:"#54656f"}} />    
                        </Button>
                    </Grid>
                </Toolbar>
    )
}

export default DisplayAppbar