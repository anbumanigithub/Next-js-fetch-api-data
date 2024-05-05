import { Stack,Toolbar,AppBar,Typography, styled } from "@mui/material";
import Link from "next/link";



const StyledToolBar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
  background:"black"
})

const navbar = () => {
  return (
    <AppBar position="static" >
      <StyledToolBar  >
        <Typography variant="h5">NEXT</Typography>
        <Stack direction="row" justifyContent="space-between" width="20%">
           <Link href="/">home</Link>
           <Link href="/aboutus">About</Link> 
          <Link href="/nested/contacts">contact</Link> 
        </Stack>
      </StyledToolBar>
    </AppBar>
  );
};

export default navbar;
