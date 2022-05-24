import React from 'react';
import { Typography, Grid, Badge, Card, styled, Stack } from "@mui/material";
import header from './assets/header.svg';
import footer from './assets/footer.svg';
import slLogo from './assets/scottylabsLogo.svg'
import './App.css';

const SectionHead = styled(Typography)({
  color: "#4D4D4D",
  padding: 0,
  fontFamily:
    '"Avenir", "Roboto","Droid Sans", "Helvetica Neue", sans-serif',
  fontWeight: 800
});

const CardHead = styled(Typography)({
  color: "#4D4D4D",
  padding: 0,
  fontFamily:
    '"Roboto","Droid Sans", "Helvetica Neue", sans-serif',
  fontWeight: 700
});

const StyledCard = styled(Card)({
  backgroundColor: "#F5F5F5",
  textAlign: "left",
  borderRadius: 10,
  height: "100%",
  justifyContent: "flex-start",
  padding: 20
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={header} height="100%" width="100%"/>
        
      </header>
      <div className="Section">
        <SectionHead className='SectionHead' variant='h3'>BLOG POSTS</SectionHead>
        <StyledCard className="Feature" sx={{minHeight: 100}}>
          <CardHead variant='h5'>Featured Post</CardHead>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Amet nisl purus in mollis nunc sed. Consectetur adipiscing elit duis tristique sollicitudin. Dolor morbi non arcu risus quis varius quam quisque. Interdum velit euismod in pellentesque massa. Non quam lacus vitae tempus quam. Duis tristique sollicitudin nibh sit amet. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Interdum varius sit amet mattis vulputate. At augue eget arcu dictum varius. Facilisis volutpat est velit egestas. Interdum varius sit amet mattis...
          </p>
        </StyledCard>
        <Stack>
          <StyledCard sx={{width: 20}}></StyledCard>
        </Stack>
      </div>
      <footer >
        <img src={footer} height="100%" width="100%" />
      </footer>
    </div>
  );
}

export default App;
