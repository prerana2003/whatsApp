// import './components.css'
import { Divider, Grid, List, Box, Button, Stack } from '@mui/material'
import {ListItem} from '@mui/material'
import {ListItemText} from '@mui/material'
import {Typography} from '@mui/material'
import {ListItemAvatar} from '@mui/material'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import {Avatar} from '@mui/material'
import React from 'react'
import Archived from './archived'


const font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

const EmpItem = ({contact}) =>{
    // function onClick(){
    //     setSelectedEmp(emp)
    // }
    
    return(
        <Box>
        <Grid container alignItems='center'>
            <ListItem component= "li" id={contact['ID']} sx={{padding:'0px 30px 0px 18px'}}>
                <Grid item xs={2}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp"><img src={contact["profileImg"]} height='50px' width='50px'/></Avatar>
                    </ListItemAvatar>
                </Grid>
                <Grid item xs={10}>
                    <Grid container direction='column'>
                        <Grid container direction='row'>
                            <Grid item xs={11}>
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
                            <Grid item xs={1}>
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
                        <Grid item>
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <Typography id={contact['ID']} sx={{ fontFamily:font, fontSize:'14px', color:'#111B21'}} component="label">
                                            {contact.Messages[contact.Messages.length-1].Msg}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />                                                          
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Divider variant="inset" component="li" /> */}
            </ListItem>
            {/* <Divider component="li" style={{listStyle:'none'}}/> */}
        </Grid>
        <Divider variant="inset" component="li" style={{listStyle:'none'}} />
        </Box>
    )
}

const ContactList = ({cloneContacts, searchValue}) =>{
    let contactListArr = []

    let contacts = cloneContacts;

    function showEmployees(){
        if(contacts){
            for(let i=0;i<contacts.length;i++){
                contactListArr.push(<EmpItem key= {contacts[i]["id"]}  contact = {contacts[i]}/>)
            }
        }
    }

    // showEmployees();

    // ------------------Searching------------------------------------
    function search(){
        // console.log(searchValue)
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

    // ----------------------Sorting---------------------------
    // function sort(){
    //     if(props.SortBtnID === 'asc'){
    //         contacts.sort(function(a,b){
    //             return a["name"].localeCompare(b["name"]);
    //         });
    //         EmpListArr = [];
    //         showEmployees();
    //     }
    //     else if(props.SortBtnID === 'dsc'){
    //         employees.sort(function(a,b){
    //             return b["name"].localeCompare(a["name"]);
    //         });
    //         EmpListArr = [];
    //         showEmployees();
    //     }
    // }
    
    search()
    // sort()

    return(
        <Stack direction='column' overflow='auto'>
            <Archived />
            <Divider variant="inset" component="li" style={{listStyle:'none'}} />
            <List sx={{maxHeight: 'fit-content'}}>{contactListArr}</List>
        </Stack>
    )
}

export default ContactList;
