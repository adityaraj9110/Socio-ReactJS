import styled from '@emotion/styled'
import { AppBar, Avatar, InputBase, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box } from '@mui/system';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';
import img from '../assests/img1.jpg'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import { breakpoints } from '@mui/system';

// import { Notifications } from '@mui/icons-material';



const StyledToolbar= styled (Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Search= styled('div') (({ theme })=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: "6px",
  width:"40%"
  
}));

const Icons= styled(Box) (({ theme }) => ({
  // backgroundColor:"white",
  display:'flex',
  gap:"20px",
  alignItems:"center",
  
  

}));

const UserBox= styled(Box) (({theme})=>({
  // backgroundColor:"white",
  display:'flex',
  gap:"10px",
  alignItems:"center"
}));



const Navbar = () => {
  const [open,setopen]=useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>ADI DEV</Typography>
        <MenuRoundedIcon sx={{display:{xs:"block", sm:"none"}}}/>
        <Search><InputBase placeholder='search'></InputBase></Search>
        <Icons sx={{display:{sm:'flex',xs:"none"}}}>

        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>

        <Badge badgeContent={4} color="error">
          <Notifications />
        </Badge>

        <Avatar sx={{width:30,height:30}} src={img}
        onClick={e=>setopen(true)}
        />
        </Icons>

        <UserBox onClick={e=>setopen(true)}  sx={{display:{xs:"flex",sm:"none"}}}>
          <Avatar sx={{width:30,height:30}} src={img}/>
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={e=>setopen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      
    </AppBar>
  )
}

export default Navbar
