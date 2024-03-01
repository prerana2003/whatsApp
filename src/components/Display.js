import {Paper } from "@mui/material";
import DisplayContact from "./displayContact";
import backImg from '../assets/back.jpeg'
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import Drawer from "./Drawer"

function Display() {
  const selectedContact = useSelector((state)=>state.selectedContact.selectedContact)

  return (
    <Paper height='100%' marginBottom={0} overflow='hidden' sx={{display: { xs:(selectedContact)? 'block':'none', sm:'block'}, backgroundColor: (!selectedContact) ? '#F0F2F5' : '', backgroundImage:(selectedContact)? `url(${backImg})` : '', padding:'0px'}} textAlign='center' justifyContent='center'>  
      <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contact/:id" Component={DisplayContact}/>
      </Routes>
  </Paper>
  );
}

export default Display;






// {/*  */}

// {(selectedContact)?
//   //     <DisplayContact/>
//   //     :
//   //     <Home/>
//   //   }