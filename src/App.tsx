import React from 'react';
import { Typography, Grid, Badge, Card, styled, Stack } from "@mui/material";
import header from './assets/header.svg';
import footer from './assets/footer.svg';
import instaLogo from './assets/instagramLogo.svg'
import slackLogo from './assets/slackLogo.svg'
import emailLogo from './assets/emailLogo.svg'
import './App.css';

const SectionHead = styled(Typography)({
  color: "#4D4D4D",
  padding: 0,
  marginBottom: 20,
  fontFamily:
    '"Avenir", "Roboto","Droid Sans", "Helvetica Neue", sans-serif',
  fontWeight: 800
});

const CardHead = styled(Typography)({
  color: "#4D4D4D",
  padding: 0,
  fontFamily:
    '"Roboto","Droid Sans", "Helvetica Neue", sans-serif',
  fontWeight: 700,
  display: "inline-block"
});

const StyledCard = styled(Card)({
  backgroundColor: "#F5F5F5",
  textAlign: "left",
  borderRadius: 10,
});

const posts = [{title: "Post Title", url:null},
               {title: "Long post title with a lot of words", url:null}]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={header} height="100%" width="100%"/>
        
      </header>
      <div className="Section">
        <SectionHead className='SectionHead' variant='h3'>BLOG POSTS</SectionHead>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <StyledCard className="Feature" sx={{ minHeight: 100}}>
              <CardHead variant='h5'>Featured Post</CardHead>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam 
                eleifend mi in nulla posuere sollicitudin aliquam. Eleifend mi in nulla posuere 
                sollicitudin aliquam ultrices sagittis orci. Amet nisl purus in mollis nunc sed. 
                Consectetur adipiscing elit duis tristique sollicitudin. Dolor morbi non arcu 
                risus quis varius quam quisque. Interdum velit euismod in pellentesque massa. 
                Non quam lacus vitae tempus quam. Duis tristique sollicitudin nibh sit amet. 
                Id eu nisl nunc mi ipsum faucibus vitae aliquet. Interdum varius sit amet mattis 
                vulputate. At augue eget arcu dictum varius. Facilisis volutpat est velit egestas. 
                Interdum varius sit amet mattis...
              </p>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack spacing={2}>
              <StyledCard className="OneLineCard">
                <CardHead variant='h5'>Post Title</CardHead>
              </StyledCard>
              <StyledCard className="OneLineCard">
                <CardHead variant='h5'>Long post title with a lot of words</CardHead>
              </StyledCard>
            </Stack>
          </Grid>
        </Grid>
      </div>
      <div className='Section'>
        <SectionHead className='SectionHead' variant='h3'>ABOUT US</SectionHead>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <StyledCard className="Feature" sx={{ minHeight: 100 }}>
              <p>
                ScottyLabs is a student organization at Carnegie Mellon University devoted to helping 
                students learn about and explore interesting topics in technology. We organize educational 
                events to help people learn how to make things, host workshops to give students the opportunity 
                to work on projects outside of class, and develop applications and services for the campus community. 
                Our GBMs this semester are on Thursdays at 6pm ET over [Zoom](http://href.scottylabs.org/zoom).
              </p>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack spacing={1}>
              <CardHead variant='h5'>Connect with the org!</CardHead>
              <StyledCard className="IconCard">
                <Stack direction="row" spacing={1}>
                  <img src={instaLogo} width="32" />
                  <div className='Center'>
                    <span>@cmu.scottylabs</span>
                  </div>
                </Stack>
              </StyledCard>
              <StyledCard className="IconCard">
                <Stack direction="row" spacing={1}>
                  <img src={slackLogo} width="32" />
                  <div className='Center'>
                    <span>scottylabs.slack.com</span>
                  </div>
                </Stack>
              </StyledCard>
              <StyledCard className="IconCard">
                <Stack direction="row" spacing={1}>
                  <img src={emailLogo} width="32" />
                  <div className='Center'>
                    <span>scotty-labs@andrew.cmu.edu</span>
                  </div>
                </Stack>
              </StyledCard>
            </Stack>
          </Grid>
        </Grid>
      </div>
      <footer >
        <img src={footer} height="100%" width="100%" />
      </footer>
    </div>
  );
}

export default App;
