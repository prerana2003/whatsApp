import { Box, Grid } from "@mui/material";
import { useState } from "react";
import MyDrawer from "./Drawer";
import Display from "./Display";
import { Block } from "@mui/icons-material";



function Parent() {
    let contactObj = require('../contacts.json').contacts

    const [contacts, setContacts] = useState(contactObj)
    const [selectedContact, setSelectedContact] = useState()

     let cloneContacts= [...contacts]

    function setMessage(msg){
        cloneContacts[selectedContact["ID"]-1].Messages.push(msg)
        setContacts(cloneContacts)
        
    }

    function setSelectedCon(contact){
        setSelectedContact(contact)
    }

    return (
        <Grid container display='flex' >
            <Grid item sm={12} md={2.8} lg={2.8}>
                <MyDrawer cloneContacts={cloneContacts} setSelectedCon={setSelectedCon} selectedContact={selectedContact}/>
            </Grid>
           
            <Grid item sm={0} md={9.2} lg={9.2} component="main" margin='auto' alignItems='center' justifyContent='center'  sx={{flexGrow: 1,  position:'relative', height:''}}>
                <Display selectedContact={selectedContact} setMessage={setMessage}/>
            </Grid>
        </Grid>
    );
}

export default Parent;
