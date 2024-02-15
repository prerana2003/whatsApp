import { Box,  Drawer,  Grid } from "@mui/material";
import Divider from '@mui/material/Divider';
import ToolBar from "./ToolBar";
import Filter from "./filter";
import Archived from "./archived";
import ContactList from "./List";
import { useState } from "react";
import PersistentDrawer from "./persistentDrawer";
import {useTheme} from "@mui/material";
import React from "react";

// const drawerWidth = '406px';


function MyDrawer({cloneContacts, setSelectedCon, selectedContact}) {
    let [searchValue, setSearchValue] = useState('')
    const [btnClick, setBtnClick] = useState();

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    function onSearch(myValue){
        setSearchValue(myValue)
    }

    function onSetBtnClick(btn){
        setBtnClick(btn)
    }

    console.log(btnClick)

    return (
        <Grid  variant="permanent" overflowY='auto' overflowX='none' 
                sx={{ 
                    display:{
                        xs:(selectedContact)?'none':'',
                        sm:'block'
                    },
                    position:'relative',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                },
            }}>
                    <ToolBar onSetBtnClick={onSetBtnClick} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
                    <PersistentDrawer btnClick={btnClick} theme={theme} open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
                    <Filter onSearch = {onSearch}/>
                    <Divider component="li" style={{listStyle:'none'}}/>
                    <ContactList searchValue={searchValue} cloneContacts= {cloneContacts} setSelectedCon={setSelectedCon} selectedContact={selectedContact}/>                    
            </Grid>
        // </Grid>
        
        
    );
}

export default MyDrawer;
