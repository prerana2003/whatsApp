import { Box,  Drawer,  Grid } from "@mui/material";
import Divider from '@mui/material/Divider';
import ToolBar from "./ToolBar";
import Filter from "./filter";
import Archived from "./archived";
import ContactList from "./List";
import { useState } from "react";

const drawerWidth = 406;


function MyDrawer({cloneContacts, setSelectedCon, selectedContact}) {
    let [searchValue, setSearchValue] = useState('')

    function onSearch(myValue){
        // console.log(myValue)
        setSearchValue(myValue)
    }

    console.log(searchValue)

    return (

        <Drawer variant="permanent" 
            sx={{width: drawerWidth, 
                position:'relative',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
          }}>
                    <ToolBar/>
                    <Filter onSearch = {onSearch}/>
                    <Divider component="li" style={{listStyle:'none'}}/>
                    <ContactList searchValue={searchValue} cloneContacts= {cloneContacts} setSelectedCon={setSelectedCon} selectedContact={selectedContact}/>                    
        </Drawer>
        
    );
}

export default MyDrawer;
