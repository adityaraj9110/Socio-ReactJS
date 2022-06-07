import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import img1 from '../assests/img1.jpg'
import { EmojiEmotions, PersonAdd, VideoCameraBack , Image, DateRange} from '@mui/icons-material';

const StyleModal=styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})

const UserBox=styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom:"20px"

  // justifyContent:"center"
})


const Add = () => {
  const [open,setOpen]=useState(false)
  return (
    <>
    <Tooltip onClick={(e)=>setOpen(true)} title="Create post" sx={{position:"fixed",bottom:20,left:{xs:"calc(45%)", md:30}}}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>

    <StyleModal
        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={{xs:300,sm:400}} height={260} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign='center'>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src={img1}
              sx={{ width:30 , height:30}}
            />
            <Typography fontWeight={500} variant="span">John Doe</Typography>

          </UserBox>

          <TextField
          sx={{width:"100%"}}
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant='standard'
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotions color='primary'/>
          <Image color='secondary' />
          <VideoCameraBack color='success' />
          <PersonAdd color='error'/>
          
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRange/></Button>
          </ButtonGroup>

        </Box>
      </StyleModal>


      
    </>
  )
}

export default Add
