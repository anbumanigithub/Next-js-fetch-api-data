// import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";

import styles from "@/styles/Home.module.css";
// import Navbar from "../../components/Navbar";
// import Footer from '../../components/Footer'
import Link from "next/link";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>  
  {/* <Navbar/>
      <Footer/> */}
    <Box mt={10}>
      <Head>
        <title>Next | Home</title>
        
        <meta name="keyword" contents='home'/>

      </Head>
      <Stack alignItems='center' justifyContent='center'>
      <Image src='/next.jpg' width={500} height={200} marginTop={20}/>
      <Stack alignSelf='flex-start' spacing={5} mt={10} mb={10}>
<Typography variant='h3'>Introduction</Typography>
<Typography variant='gray'>Next.js is built on the latest React features, including Server Components and Actions. , and built into Next.js. based platform for the next generation of fast developer tools, and can be used for both compilation and minification.</Typography>

  </Stack>
   <Link href="/nested"> <Chip label='Go to user'/></Link>
     
      </Stack> 
   </Box>
    </>
  );
}
