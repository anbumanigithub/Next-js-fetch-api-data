import { Stack, Typography } from '@mui/material'
import React from 'react'
import Head from 'next/head'


const contacts = () => {
  return (
    <>
     <Head>
        <title>Next | contact</title>
        
        <meta name="keyword" contents='contact'/>

      </Head>
   
    <Stack spacing={5} mt={10} mb={20}>
<Typography variant='h3'>Contact Page</Typography>
<Typography variant='gray'>Next.js is built on the latest React features, including Server Components and Actions. , and built into Next.js. based platform for the next generation of fast developer tools, and can be used for both compilation and minification.</Typography>






  </Stack>
  </>
  )
}

export default contacts