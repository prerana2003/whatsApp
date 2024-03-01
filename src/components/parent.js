import { Grid } from "@mui/material";
import Drawer from "./Drawer";
import Display from "./Display";
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import HomePage from "./home";
import Init from "./init";
import DisplayContact from "./displayContact";

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Drawer/>,
//     //   children : [{
//     //     path:"/contact/:id",
//     //     element : <Display />
//     //   }]
//     },
//     {
//       path : "/contact/:id",
//       element : <DisplayContact/>,
//       children:[{
//         path:"/contact",
//         element : <HomePage />
//       }]
//     }
//   ])



function Parent() {
    
    return (
        <Grid container >
            <Grid item xs={12} sm={6} md={4.8} lg={3.6}>
                <Drawer />
            </Grid>
            <Grid item sm={6} md={7.2} lg={8.4} component="main"   sx={{flexGrow: 1, padding:'0px', margin:'0px', position:'relative', height:'100%'}}>
                <Display />
            </Grid> 
        </Grid>
    );
}

export default Parent;



{/* <Grid container >
            <Grid item xs={12} sm={6} md={4.8} lg={3.6}>
                <MyDrawer />
            </Grid>
            <Grid item sm={6} md={7.2} lg={8.4} component="main"   sx={{flexGrow: 1, padding:'0px', margin:'0px', position:'relative', height:'100%'}}>
                <Display />
            </Grid>
        </Grid> */}