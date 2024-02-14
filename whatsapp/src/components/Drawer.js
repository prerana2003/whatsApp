import { Box,  Drawer,  Grid } from "@mui/material";
import Divider from '@mui/material/Divider';
import ToolBar from "./ToolBar";
import Filter from "./filter";
import Archived from "./archived";
import ContactList from "./List";
import { useState } from "react";

const drawerWidth = '406px';


function MyDrawer({cloneContacts, setSelectedCon, selectedContact}) {
    let [searchValue, setSearchValue] = useState('')

    function onSearch(myValue){
        setSearchValue(myValue)
    } 

    return (
        <Grid  variant="permanent" overflowY='auto' overflowX='none' 
                sx={{ 
                    display:{
                        xs:(selectedContact)?'none':'',
                        sm:(selectedContact)?'none':'',
                        md:'block'
                    },
                    position:'relative',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                },
            }}>
                    <ToolBar/>
                    <Filter onSearch = {onSearch}/>
                    <Divider component="li" style={{listStyle:'none'}}/>
                    <ContactList searchValue={searchValue} cloneContacts= {cloneContacts} setSelectedCon={setSelectedCon} selectedContact={selectedContact}/>                    
            </Grid>
        // </Grid>
        
        
    );
}

export default MyDrawer;
