import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, styled, Stack } from "@mui/material";
import header from './assets/header.svg';
import footer from './assets/footer.svg';
import instaLogo from './assets/instagramLogo.svg'
import slackLogo from './assets/slackLogo.svg'
import emailLogo from './assets/emailLogo.svg'
import './App.css';
import IconCard from './components/IconCard';
import PostPrev from './components/PostPrev'
import getRss from './util/rssFeed';

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

type post = {
  link: string,
  title:  string,
  author: string,
  content: string
}

function str2html (s : string) {
  var htmlObject = document.createElement('div');
  htmlObject.innerHTML = s;
  return htmlObject;
}

function App() {
  const [posts, setPosts] = useState<post[]>([]);
  useEffect(() => {
    getRss().then((rss) => {
      if (rss != null) {
        setPosts(rss);
      }
    });
  }, []);

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
              <CardHead variant='h5'><a href={posts[0].link}>{posts[0].title}</a></CardHead>
              <div dangerouslySetInnerHTML={{ __html: posts[0].content }} />
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack spacing={2}>
              {posts.map(
                function(post, idx){
                  if (idx != 0) {
                    return <PostPrev
                      title={post.title}
                      link={post.link}
                    />
                  }
                }
              )}
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
        <SectionHead className='SectionHead' variant='h3'>EVENTS</SectionHead>
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
              <IconCard icon={instaLogo} text="@cmu.scottylabs"></IconCard>
              <IconCard icon={slackLogo} text="scottylabs.slack.com"></IconCard>
              <IconCard icon={emailLogo} text="scotty-labs@andrew.cmu.edu"></IconCard>
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
