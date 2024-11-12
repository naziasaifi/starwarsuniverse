import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function CommonAppBar() {
    const navigate = useNavigate();
    const handleMenuClick = (action: string) => {
        navigate(action);
    }
    return ( <AppBar position="static">
        <Toolbar variant="dense">
          <Typography style={{cursor: 'pointer'}} onClick={()=>handleMenuClick('')} variant="h4" color="inherit" component="div">
            StarWars
          </Typography>
          <Typography sx={{ textAlign: 'center' }} style={{marginLeft:'1rem',cursor: 'pointer'}} onClick={()=>handleMenuClick('')} >Home</Typography>
          <Typography sx={{ textAlign: 'center' }} style={{marginLeft:'1rem',cursor: 'pointer'}} onClick={()=>handleMenuClick('favourite')}>Favourite</Typography>
        </Toolbar>
      </AppBar>)
}