import { AppBar, Avatar, Box, Toolbar, Typography,List, Grid, ListItemAvatar, ListItemText, Button, IconButton, ListItem} from "@mui/material"
import React from "react";
import { useState, useEffect } from "react";
import DisplayAppbar from "./DisplayAppBar";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import {InputBase} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { HubRounded } from "@mui/icons-material";

const drawerWidth = 406;

const font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

function MyChat({chat}){
    return(
        <Grid container direction='column'>
            <Grid item maxWidth={50} padding='2px'>
            <ListItem key='chat' sx={{float:(chat.type==="sent")?'right':'left', borderRadius:'5px', backgroundColor:'#acfcac',width:'fit-content', padding:'6px 7px 8px 9px'}}>
                <ListItemText >
                    <Typography component='p' sx={{fontSize:'14.2px', fontFamily:font,}}>
                    {chat.Msg}
                    </Typography>
                    
                </ListItemText>
            </ListItem>
            </Grid>
        </Grid>
    )
}

const DisplayContact = ({selectedContact, setMessage}) =>{
    let myMsg={"Msg": '',
                "time":'',
                "type":''};
    const [newMsg, setNewMsg] = useState(myMsg)
    

    let chatsArr=[];

    function displayChats(){
        if(selectedContact){
            for(let i=0;i<selectedContact["Messages"].length;i++){
                chatsArr.push(<MyChat key={selectedContact["id"]} chat = {selectedContact["Messages"][i]}/>)
            }
        }
    }

    function currtime(){
        let hours = new Date().getHours()
        
        let min = new Date().getMinutes()
        let ampm;
        if(hours >= 12){
            ampm = "PM"
        }
        else{
            ampm = "AM"
        }
        hours = hours %12
        let time = hours+":"+min+ampm
        return time
    }

    console.log(currtime())

    displayChats()

    // console.log(newMsg)
    
    return(
        <Grid container direction='column'>
            <Grid item md={1} lg={1}>
                <DisplayAppbar selectedContact={selectedContact}/>
            </Grid>
            <Grid item md={1} lg={1}  padding={0} paddingLeft={4} sx={{height:'fit-content', minHeight:'70vh',}}>
                <List>{chatsArr}</List>
            </Grid>
            <Grid container md={10} lg={10} 
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    // marginLeft:'-20px',
                    height: 60,
                    padding:'10px',
                    backgroundColor:'#e9edef'
                }}>
                    
                    <Grid item md={0.5} lg='none'>

                    </Grid>
                    <Grid item md={1} lg={0.5}>
                        <Button sx={{minWidth:'0',color:"#54656f", ':hover':{backgroundColor:'#e9edef'}}}><EmojiEmotionsOutlinedIcon fontSize="medium"/></Button>
                    </Grid>
                    <Grid item md= {1} lg={0.5}>
                        <Button sx={{minWidth:'0',color:"#54656f", ':hover':{backgroundColor:'#e9edef'}}}><AddOutlinedIcon fontSize="medium" sx={{textShadow:3}}/></Button>
                        
                    </Grid>
                    <Grid item md={8} lg={7.7}>
                        <Box
                            component="form"
                            sx={{ backgroundColor:'white', borderRadius:'10px', p: '3px 5px', display: 'flex', alignItems: 'center' }}
                            >
                            <InputBase
                                sx={{ ml: 1, flex: 1, padding:0, fontSize:'14.2px', color:'#54656f', fontFamily:font}}
                                placeholder=" Type a message"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={(event)=>{
                                    let currTime = currtime();
                                    setNewMsg({"Msg":event.target.value, "time":currTime, "type":"sent"})
                                }}
                            />
                            
                        </Box>
                    </Grid>
                    <Grid item md={0.5} lg={1}>
                        {(newMsg["Msg"])?
                        <Button onClick={()=>{
                            
                            if(newMsg["Msg"]){
                                setMessage(newMsg)
                            }}} sx={{color:"#54656f", ':hover':{backgroundColor:'#e9edef'}}} ><SendIcon fontSize="medium" /></Button>
                        
                        :
                        <Button sx={{color:"#54656f", ':hover':{backgroundColor:'#e9edef'}}}><MicOutlinedIcon fontSize="medium" /></Button>
                        }
                    </Grid>
                        
           </Grid>

        </Grid>
    )
}


export default DisplayContact