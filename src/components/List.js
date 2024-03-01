import { Divider, Grid, List, Box, Stack } from '@mui/material'
import {ListItem} from '@mui/material'
import {ListItemText} from '@mui/material'
import {Typography} from '@mui/material'
import {ListItemAvatar} from '@mui/material'
import {Avatar} from '@mui/material'
import React from 'react'
import Archived from './archived'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { setSelectedContact } from '../redux/selectedContactSlice'

const font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

const EmpItem = ({contact, index}) =>{
    const selectedContact = useSelector((state)=>state.selectedContact.selectedContact)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation()
    // console.log('dskfhksdjfh',location.pathname[location.pathname.length-1])
    const id = location.pathname[location.pathname.length-1];
    // onClick={()=>dispatch(setSelectedContact(id))}
    // onClick={()=>{console.log("dslfjsdlk")}}
    return(
        <>
        <Link to={`/contact/${contact.ID}`} style={{textDecoration:'none'}}>
            <Grid container key={contact['ID']-1}  alignItems='center' style={{backgroundColor: (selectedContact && index === selectedContact-1) ? '#F0F2F5' : 'white'}} sx={{':hover':{backgroundColor:'#F0F2F5'} }}>
                <ListItem component= "li" id={contact['ID']} sx={{padding:'0px 30px 0px 18px'}}>
                    <Grid item xs={2}>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={contact["profileImg"]}></Avatar>  
                        </ListItemAvatar>
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container direction='column'>
                            <Grid container direction='row'>
                                <Grid item xs={9.2} sm={9.8} margin={0}>
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
                                <Grid  item xs={2.8} sm={2.2} padding={0} margin={0}>
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
            </Link>
            </>
    )
}

const ContactList = ({searchValue,}) =>{
    let contacts = useSelector((state)=>state.contacts.contacts)
    
    let contactListArr = []

    function showEmployees(contacts){
        if(contacts){
            for(let i=0;i<contacts.length;i++){
                contactListArr.push(<EmpItem key= {i}  contact = {contacts[i]} index = {i}/>)
            }
        }
    }

    // ------------------Searching------------------------------------
    function search(){
        if(searchValue){
            let filteredContact = contacts.filter(function(contact){
                if(contact["Name"].toLowerCase().includes(searchValue.toLowerCase())){
                    return contact;
                }
            })
            showEmployees(filteredContact);
        }
        else{
            showEmployees(contacts);
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
