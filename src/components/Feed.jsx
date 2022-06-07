import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'
import img1 from '../assests/img1.jpg'
import img2 from '../assests/img2.jpg'
import img3 from '../assests/img3.jpg'
import img4 from '../assests/img4.jpg'
import img5 from '../assests/img5.jpg'
import img6 from '../assests/img6.jpg'

const Feed = () => {
  return (
    <Box  flex={4} p={2} >
      <Post avName='J' title="John" header="September 14, 2016" img={img1}/>
      <Post avName='R' title="Rony" header="November 14, 2016" img={img2}/>
      <Post avName='N' title="Natasha" header="August 15, 2017" img={img3}/>
      <Post avName='A' title="Aditya" header="December 18, 2017" img={img4}/>
      <Post avName='K' title="Kiara" header="May 08, 2019" img={img5}/>
      <Post avName='M' title="Michel" header="February 14, 2022" img={img6}/>
      
    </Box>
  )
}

export default Feed
