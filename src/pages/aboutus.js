import { Stack, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'

const aboutus = () => {
  return (
    <>
     <Head>
        <title>Next | about</title>
        
        <meta name="keyword" contents='about'/>

      </Head>
    
  <Stack spacing={5} mt={10} mb={20}>
<Typography variant='h3'>About Page</Typography>
<Typography variant='gray'>Next.js is built on the latest React features, including Server Components and Actions. , and built into Next.js. based platform for the next generation of fast developer tools, and can be used for both compilation and minification.</Typography>






  </Stack>
  
  </>
  )
}

export default aboutus