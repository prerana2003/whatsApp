import { Box,  Drawer,  Grid } from "@mui/material";
import Divider from '@mui/material/Divider';
import ToolBar from "./ToolBar";
import Filter from "./filter";
import Archived from "./archived";
import ContactList from "./List";
import { useState } from "react";


function MyDrawer({cloneContacts}) {
    let [searchValue, setSearchValue] = useState('')

    function onSearch(myValue){
        // console.log(myValue)
        setSearchValue(myValue)
    }

    console.log(searchValue)

    return (
        <Drawer variant="permanent" elevation={4} sx={{position:'fixed'}}>
                    <ToolBar/>
                    <Filter onSearch = {onSearch}/>
                    <Divider component="li" style={{listStyle:'none'}}/>
                    <ContactList searchValue={searchValue} cloneContacts= {cloneContacts}/>                    
        </Drawer>
        
    );
}

export default MyDrawer;
