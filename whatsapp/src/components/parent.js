import { Box, Grid } from "@mui/material";
import { useState } from "react";
import MyDrawer from "./Drawer";
import Display from "./Display";
import { Block } from "@mui/icons-material";



function Parent() {
    let contactObj = require('../contacts.json').contacts

    const [contacts, setContacts] = useState(contactObj)
    const [selectedContact, setSelectedContact] = useState()
    const [display, setDisplay] = useState()

     let cloneContacts= [...contacts]

    function setMessage(msg){
        cloneContacts[selectedContact["ID"]-1].Messages.push(msg)
        setContacts(cloneContacts)  
    }

    function setSelectedCon(contact){
        setSelectedContact(contact)
        console.log(selectedContact);
    }

    return (
        <Grid container >
            <Grid item xs={12} sm={6} md={4.8} lg={3.6}>
                <MyDrawer cloneContacts={cloneContacts} setSelectedCon={setSelectedCon} selectedContact={selectedContact}/>
            </Grid>
           
            <Grid item sm={6} md={7.2} lg={8.4} component="main"   sx={{flexGrow: 1, padding:'0px', margin:'0px', position:'relative', height:'100%'}}>
                <Display setSelectedCon={setSelectedCon} selectedContact={selectedContact} setMessage={setMessage}/>
            </Grid>
        </Grid>
    );
}

export default Parent;
