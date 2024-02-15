// import './components.css'
import { Divider, Grid, List, Box, Button, Stack } from '@mui/material'
import {ListItem} from '@mui/material'
import {ListItemText} from '@mui/material'
import {Typography} from '@mui/material'
import {ListItemAvatar} from '@mui/material'
import {Avatar} from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Archived from './archived'


const font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

const EmpItem = ({contact, setSelectedCon, selectedContact}) =>{
    function onClick(){
        setSelectedCon(contact)
    }
    
    
    return(
        <Box>
        <Grid container key={contact['ID']} onClick={onClick} alignItems='center' style={{backgroundColor: (selectedContact && contact['ID'] === selectedContact['ID']) ? '#F0F2F5' : ''}} sx={{':hover':{backgroundColor:'#F0F2F5'} }}>
            <ListItem component= "li" id={contact['ID']} sx={{padding:'0px 30px 0px 18px'}}>
                <Grid item xs={2}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={contact["profileImg"]}></Avatar>  
                    </ListItemAvatar>
                </Grid>
                <Grid item xs={10}>
                    <Grid container direction='column'>
                        <Grid container direction='row'>
                            <Grid item xs={10.5} margin={0}>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography id={contact['ID']} sx={{ fontFamily:font, fontSize:'17px', color:'#111B21'}} component="label">
                                                {contact["Name"]}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </Grid>
                            <Grid  item xs={1.5} padding={0} margin={0}>
                                <ListItemText
                                    secondary={
                                        <React.Fragment>
                                            <Typography id={contact['ID']} sx={{ fontFamily:font, fontSize:'12px', color:'#111B21'}} component="label">
                                                {contact.Messages[contact.Messages.length-1].time}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Grid item marginBottom={1} marginTop='-8px'>
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <Typography id={contact['ID']} sx={{ fontFamily:font, fontSize:'14px', color:'#111B21'}} component="label">
                                            {(contact.Messages[contact.Messages.length-1].Msg.length>34)? contact.Messages[contact.Messages.length-1].Msg.slice(0,34)+"...":contact.Messages[contact.Messages.length-1].Msg}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />                                                          
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
        </Grid>
        <Divider variant="inset" component="li" style={{listStyle:'none'}} />
        </Box>
    )
}

const ContactList = ({cloneContacts, searchValue, setSelectedCon, selectedContact}) =>{
    let contactListArr = []

    let contacts = cloneContacts;

    function showEmployees(){
        if(contacts){
            for(let i=0;i<contacts.length;i++){
                contactListArr.push(<EmpItem key= {contacts[i]["id"]}  contact = {contacts[i]} setSelectedCon={setSelectedCon} selectedContact={selectedContact}/>)
            }
        }
    }

    // ------------------Searching------------------------------------
    function search(){
        if(searchValue){
            contacts = contacts.filter(function(contact){
                if(contact["Name"].toLowerCase().includes(searchValue.toLowerCase())){
                    return contact;
                }
            })
            showEmployees();
        }
        else{
            showEmployees();
        }
    }
    
    search()

    return(
        <Stack direction='column' overflow='auto' overflowX="none" height='80vh'
            sx={
                {
                  '&::-webkit-scrollbar': {
                    width: '0.4em'
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0,0,0,.1)',
                  }
                }
            }
            >
            <Archived/>
            <Divider variant="inset" component="li" style={{listStyle:'none'}} />
            <List sx={{maxHeight: 'fit-content'}}>{contactListArr}</List>
        </Stack>
    )
}

export default ContactList;
