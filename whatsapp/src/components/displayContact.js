import { AppBar, Avatar, Box, Toolbar, Typography,List, Grid, ListItemAvatar, ListItemText, Button, IconButton, ListItem} from "@mui/material"
import React from "react";
import { useState, useEffect } from "react";
import DisplayAppbar from "./DisplayAppBar";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import {InputBase} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

function MyChat({chat}){
    return(
        <Grid container direction='column' >
            <Grid item maxWidth={50} padding='2px'>
                <ListItem key='chat'  sx={{float:(chat.type==="sent")?'right':'left', wordWrap: 'break-word', borderRadius:'5px', backgroundColor:'#acfcac',width:'fit-content', maxWidth:'400px', padding:'0px 6px 0px 9px', marginRight:5}}>
                    <ListItemText>
                        <Typography component='p' padding='0px 47px 0px 0px' sx={{fontSize:'14.2px', fontFamily:font}}>
                            {chat.Msg}
                        </Typography>
                        <Typography component='p' marginTop='-8px' sx={{fontSize:'11px', textAlign:'right', fontFamily:font,}}>
                            {chat.time}
                            
                        </Typography>
                        
                        
                    </ListItemText>
                </ListItem>
            </Grid>
        </Grid>
    )
}

const DisplayContact = ({setSelectedCon, selectedContact, setMessage}) =>{
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
            ampm = "pm"
        }
        else{
            ampm = "am"
        }
        hours = hours % 12
        hours = (hours === 0 ) ? 12 : hours 
        let time = hours+":"+ min +""+ ampm
        return time
    }

    displayChats()
    
    return(
        <Grid container direction='column' position='relative'>

            <Grid item md={12} lg={12} height='72px'>
                <DisplayAppbar setSelectedCon={setSelectedCon} selectedContact={selectedContact}/>
            </Grid>

            <Grid item md={12} lg={12} padding={0}  paddingLeft={6}  >
                <List sx={{position:'revert', overflowY:'scroll',scrollbarWidth: 'thin', scrollbarColor:'rgba(var(--black-rgb),.2) rgba(var(--white-rgb),.1)', height:'77vh', maxHeight:'fit-content',scrollbarWidth: 'thin'}}>
                    {chatsArr}
                </List>
                <Toolbar/>
            </Grid>

            <Grid container md={10} lg={10} 
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    height: 60,
                    padding:'10px',
                    backgroundColor:'#e9edef'
                }}>
                    
                    <Grid item xs={1} md={0.5} lg={0.5}>
                        <Button sx={{minWidth:'0',color:"#54656f", ':hover':{backgroundColor:'#e9edef'}}}><EmojiEmotionsOutlinedIcon fontSize="medium"/></Button>
                    </Grid>
                    <Grid item xs={1} md= {0.7} lg={0.5}>
                        <Button sx={{minWidth:'0',color:"#54656f", ':hover':{backgroundColor:'#e9edef'}}}><AddOutlinedIcon fontSize="medium" sx={{textShadow:3}}/></Button>
                        
                    </Grid>
                    <Grid item xs={9} md={7} lg={8.6}>
                        <Box
                            component="form"
                            sx={{ backgroundColor:'white', borderRadius:'10px', p: '3px 5px', display: 'flex', alignItems: 'center' }}
                            >
                            <InputBase
                                sx={{ ml: 1, flex: 1, padding:0, fontSize:'14.2px', color:'#54656f', fontFamily:font}}
                                placeholder=" Type a message"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                value={newMsg.Msg}
                                onChange={(event)=>{
                                    let currTime = currtime();
                                    setNewMsg({"Msg":event.target.value, "time":currTime, "type":"sent"})
                                }}
                            />
                            
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1} lg={1}>
                        {(newMsg["Msg"])?
                        <Button onClick={()=>{
                            
                            if(newMsg["Msg"]){
                                setMessage(newMsg)
                                setNewMsg(myMsg)
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