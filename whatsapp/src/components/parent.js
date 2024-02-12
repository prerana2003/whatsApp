import { Box, Grid } from "@mui/material";
import { useState } from "react";
import MyDrawer from "./Drawer";
import Display from "./Display";


function Parent() {
    let contactObj = require('../contacts.json').contacts

    console.log(contactObj["profileImg"])
    const [contacts, setContacts] = useState(contactObj)

     let cloneContacts= [...contacts]

    console.log(cloneContacts)

    return (
        <Grid container position='absolute' alignItems='center' justifyContent='space-between' height='100%' sx={{backgroundColor: '#F0F2F5'}}>
            <Grid item md={4}>
                <MyDrawer cloneContacts={cloneContacts}/>
            </Grid>
            <Grid item md={8}>
                <Display/>
            </Grid>
            
        </Grid>
    );
}

export default Parent;
